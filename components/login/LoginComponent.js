"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "@styles/components/login/login.module.css";
import dynamic from "next/dynamic";
import { login } from "@requests/login";
import Spinner from "@components/minicomponents/Spinners/InsideButtonSpinner";
import { setCookie } from "cookies-next";

const PasswordChecklist = dynamic(() => import("react-password-checklist"), {
  ssr: false,
});
const SignInSection = () => {
  //UI state
  const [showPassword, setShowPassword] = useState(false);
  const [usePhoneNumber, setUsePhoneNumber] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const [btnText, setBtnText] = useState("Get Started");
  // form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //select whether email or password
  const onInputSelection = () => {
    if (usePhoneNumber) {
      setEmail("");
      setPhoneNumber("");
      setUsePhoneNumber(false);
      // setRequiredInput(false);
    } else {
      setEmail("");
      setPhoneNumber("");
      setUsePhoneNumber(true);
      // setRequiredInput(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setDisableBtn(true);
    setBtnText("Loading");
    try {
      const response = await login({ email, password, phoneNumber });
      const tokens = response.message;
      console.log(tokens);
      setCookie("accessToken", tokens.access_token, {
        // httpOnly: true,
        maxAge: 60 * 60 * 6,
        sameSite: "strict",
        secure: true,
      });
      setCookie("refreshToken", tokens.refresh_token, {
        maxAge: 60 * 60 * 24 * 30,
        sameSite: "strict",
        secure: true,
      });
      setDisableBtn(false);
      setBtnText("You Are Logged In");
    } catch (error) {
      const errorMessage = error.message || "An error occurred";
      console.log(errorMessage);
      alert(errorMessage);
      setDisableBtn(false);
      setErrorMsg(errorMessage);
      setBtnText("Error,Try Again");
      // You can store the error message in state for displaying it in your UI
      // setError(errorMessage);
    }
  };

  return (
    <main className="relative py-20 bg-[#292929]">
      <div className="hidden md:block absolute top-0 right-0 w-2/12 xl:w-4/12 h-full bg-white"></div>
      <div className="relative container px-4 mx-auto">
        <div className="max-w-xl lg:max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full xl:w-1/2 px-4 mb-16 xl:pb-[100px] xl:mb-0">
              <div className="max-w-[32rem] mx-auto xl:mx-0">
                <h1 className="font-heading text-3xl font-bold text-white mb-6">
                  Login In To All For Us
                </h1>
                {errorMsg && (
                  <h2
                    className={`font-heading text-3xl font-bold text-red-400 mb-6`}
                  >
                    Error: {errorMsg}
                  </h2>
                )}
                <p className="hidden lg:block text-lg font-bold text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                  aliquet orci.
                </p>
                <div className=" lg:block mt-4 lg:mt-7 text-lg font-bold text-white">
                  Are You A New Customer ,{" "}
                  <Link
                    className={`inline-block font-bold hover:text-indigo-700 underline text-[#cdfd63]`}
                    href="/register"
                  >
                    Register Here
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-auto px-4">
              <div className="max-w-md  lg:w-[28rem] mx-auto bg-black rounded-md">
                <div
                  className={`px-8 py-12 transform -translate-x-1 -translate-y-1 ${styles.greenBg} border-2 border-black rounded-md`}
                >
                  <div className="text-center mb-8">
                    <span className="block text-sm font-bold uppercase">
                      Sign In
                    </span>
                    <h3 className="text-2xl font-bold">Join our community</h3>
                  </div>
                  <form onSubmit={handleSubmit}>
                    {usePhoneNumber ? (
                      <input
                        required
                        className="w-full mb-4 py-3 px-6 h-12 text-sm font-bold placeholder-black border-2 border-black rounded-md focus:outline-indigo"
                        type="tel"
                        placeholder="Phone Number"
                        maxLength="10"
                        minLength={10}
                        pattern="[0-9]{10}"
                        inputMode="numeric"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    ) : (
                      <input
                        className="w-full mb-4 py-3 px-6 h-12 text-sm font-bold placeholder-black border-2 border-black rounded-md focus:outline-indigo"
                        type="email"
                        required
                        value={email}
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    )}

                    <div className="text-center mb-5">
                      <button
                        onClick={onInputSelection}
                        type="button"
                        className="inline-block text-sm font-bold hover:underline"
                      >
                        {usePhoneNumber
                          ? "Use Email  Instead"
                          : "Use Phone No. Instead"}
                      </button>
                    </div>

                    <div className="relative w-full mb-4 h-12 p-0 ">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        required
                        className="w-full mb-4 pl-6 h-12 text-sm font-bold placeholder-black border-2 border-black rounded-md focus:outline-indigo"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute right-[11px] top-[12px]"
                        onClick={togglePasswordVisibility}
                      >
                        <svg
                          className="h-6 w-6 ml-4 my-auto text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          ></path>
                        </svg>
                      </button>
                    </div>

                    {password && (
                      <div className="pb-3">
                        <PasswordChecklist
                          rules={[
                            "minLength",
                            "specialChar",
                            "number",
                            "capital",
                          ]}
                          minLength={6}
                          value={password}
                          onChange={(isValid) => {
                            setIsValidPassword(isValid.valueOf());
                          }}
                        />
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={disableBtn || !isValidPassword}
                      className="group relative inline-block h-12 mb-4 w-full bg-blue-600 rounded-md"
                    >
                      <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                        <div
                          className={`flex h-full w-full items-center justify-center bg-black hover:bg-indigo-500 border-2 border-black rounded-md transition duration-300 ${
                            errorMsg && "bg-red-500"
                          }`}
                        >
                          {btnText == "Loading" && <Spinner color={"green"} />}{" "}
                          <span className="text-base font-black text-white">
                            {btnText}
                          </span>
                        </div>
                      </div>
                    </button>
                    <div className="text-center mb-5">
                      <a
                        className="inline-block text-sm font-bold hover:underline"
                        href="https://shuffle.dev/#"
                      >
                        Forgot password?
                      </a>
                    </div>

                    <a
                      className="group relative inline-block h-12 w-full bg-black rounded-md"
                      href="https://shuffle.dev/#"
                    >
                      <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                        <div className="flex h-full w-full items-center justify-center bg-[#292929] border-2 border-black rounded-md transition duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width="30"
                            height="30"
                          >
                            <path
                              fill="#FFC107"
                              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                            />
                            <path
                              fill="#FF3D00"
                              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                            />
                            <path
                              fill="#4CAF50"
                              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                            />
                            <path
                              fill="#1976D2"
                              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                            />
                          </svg>
                          <span className="ml-3 text-base font-black text-white">
                            Sign In with Google
                          </span>
                        </div>
                      </div>
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignInSection;
