import { getCookie } from "cookies-next";
export const createAddress = async ({
  fullName,
  address,
  locality,
  pinCode,
  phoneNumber,
}) => {
  const accessToken = getCookie("accessToken");
  try {
    let body = JSON.stringify({
      fullName,
      address,
      locality,
      pinCode,
      phoneNumber,
    });
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/user/createaddress`,
      {
        method: "POST",
        headers: {
          Authorization: `bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body,
      }
    );

    if (!res.ok) {
      const errorResponse = await res.json();
      const { message } = errorResponse;
      throw new Error(message || "Saving Address failed");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
