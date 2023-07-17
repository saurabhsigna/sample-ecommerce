export const register = async ({ email, password, phoneNumber, fullName }) => {
  try {
    let body = JSON.stringify({
      email,
      phone: phoneNumber,
      password,
      fullName: fullName,
    });
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }
    );

    if (!res.ok) {
      const errorResponse = await res.json();
      const { message } = errorResponse;
      throw new Error(message || "Registration failed");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
