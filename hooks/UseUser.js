import useSWR from "swr";
import { getCookie, setCookie } from "cookies-next"; // Import parseCookies and setCookie from the cookies-next package
import { userInfoAtom } from "@atoms/UserInfoAtom";
import { useSetRecoilState } from "recoil";
const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/refreshtoken`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      }
    );

    if (!response.ok) {
      throw new Error("Access token refresh failed");
    }

    const data = await response.json();
    const accessTokenResponse = data.message.accessToken;
    const refreshTokenResponse = data.message.refreshToken;

    setCookie("accessToken", accessTokenResponse, {
      maxAge: 60 * 60 * 6,
      sameSite: "strict",
      secure: true,
    });
    setCookie("refreshToken", refreshTokenResponse, {
      maxAge: 60 * 60 * 24 * 30,
      sameSite: "strict",
      secure: true,
    });

    return accessTokenResponse;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUser = async (
  url,
  accessToken,
  refreshToken,
  retryCount = 0,
  maxRetries = 3
) => {
  try {
    console.log("inside getUser");
    console.log(accessToken);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 401) {
      if (retryCount < maxRetries) {
        // If the response status is 401 (Unauthorized) and retry count is within the limit, try refreshing the accessToken
        const newAccessToken = await refreshAccessToken(refreshToken);
        console.log("inside retryCount");
        // Retry the request with the new accessToken, incrementing the retry count
        return getUser(url, newAccessToken, refreshToken, retryCount + 1, 3);
      } else {
        // If the retry count exceeds the limit, throw an error
        throw new Error("Max retries exceeded");
      }
    }

    if (!response.ok) {
      throw new Error("Request failed");
    }

    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default function useUser() {
  const accessToken = getCookie("accessToken");
  const refreshToken = getCookie("refreshToken");
  const setUserInfo = useSetRecoilState(userInfoAtom);
  console.log("inseide useUser");
  console.log(accessToken);
  const { data, mutate, error } = useSWR(
    accessToken ? `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/user/me` : null,

    (url) => getUser(url, accessToken, refreshToken),
    {
      revalidateOnFocus: false,
      errorRetryCount: 0,
      revalidateIfStale: false,
      shouldRetryOnError: false,
    }
  );

  if (data) {
    console.log("data is of user is ");
    console.log(data);
    setUserInfo(data);
  } else {
    setUserInfo(null);
  }
  const loading = !data && !error && accessToken;
  const loggedIn = !error && data;

  return {
    loading,
    loggedIn,
    user: data,
    mutate,
  };
}
