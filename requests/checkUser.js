import { getCookie } from "cookies-next";

const fetchWithRetry = async (url, options) => {
  try {
    return await fetch(url, options);
  } catch (error) {
    // Handle any fetch errors here
    throw error;
  }
};

export const checkUser = async () => {
  let accessToken = getCookie("accessToken");
  const refreshToken = getCookie("refreshToken");

  try {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    };

    const res = await fetchWithRetry(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/user/me`,
      requestOptions
    );

    if (!res.ok) {
      if (res.status === 401 && refreshToken) {
        // If the request returns 401 (Unauthorized) and we have a refresh token,
        // try to obtain a new access token using the refresh token.
        try {
          const refreshRes = await fetchWithRetry(
            `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/refreshtoken`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: { refreshToken: refreshToken },
              // You may need to provide the necessary body for refreshing the token
            }
          );

          if (!refreshRes.ok) {
            throw new Error("Failed to refresh access token");
          }

          const { accessToken: newAccessToken } = await refreshRes.json();
          accessToken = newAccessToken;

          // Update the access token in the request headers and retry the original request.
          requestOptions.headers.Authorization = `bearer ${accessToken}`;
          const retryRes = await fetchWithRetry(
            `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/user/me`,
            requestOptions
          );

          if (!retryRes.ok) {
            const errorResponse = await retryRes.json();
            const { message } = errorResponse;
            throw new Error(message || "Checking user failed");
          }

          return retryRes.json();
        } catch (error) {
          console.log(error);
          throw error;
        }
      } else {
        const errorResponse = await res.json();
        const { message } = errorResponse;
        throw new Error(message || "checking user failed");
      }
    }

    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
