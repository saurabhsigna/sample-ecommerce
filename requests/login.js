export const login = async ({ email, password, phoneNumber }) => {
  try {
    let body = JSON.stringify({
      email,
      phone: phoneNumber,
      password,
    });
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/auth/login`,
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
      throw new Error(message || "Login failed");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
