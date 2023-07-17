import { getCookie } from "cookies-next";
export const createPaymentLink = async ({ cartItems }) => {
  const accessToken = getCookie("accessToken");
  try {
    let body = JSON.stringify({
      items: cartItems,
    });
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/create/stripe-checkout`,
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
      throw new Error(message || "Online Payment Link Creation failed");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
