"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@styles/components/login/login.module.css";
import dynamic from "next/dynamic";
import Spinner from "@components/minicomponents/Spinners/InsideButtonSpinner";
import { register } from "@requests/register";
import { setCookie } from "cookies-next";
import ErrorFix from "@components/checkoutPage/addressPageCheckout/ErrorFix";
const PasswordChecklist = dynamic(() => import("react-password-checklist"), {
  ssr: false,
});

export default function App() {
  //UI state
  const [mutate, setMutate] = useState(false);
  useEffect(() => {
    setMutate(true);
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const [usePhoneNumber, setUsePhoneNumber] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const [btnText, setBtnText] = useState("Get Started");

  // form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setDisableBtn(true);
    setBtnText("Loading");
    try {
      const response = await register({
        email,
        password,
        phoneNumber,
        fullName,
      });
      const tokens = response;
      console.log(tokens);
      setCookie("accessToken", tokens.access_token, {
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
      setBtnText("You Are Registered");
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
    <div>
      <div className="relative py-20 lg:py-14 2xl:py-32">
        <div className="hidden  lg:block absolute top-0 right-0 2xl:w-1/2 p-8">
          {/* <h2 className="absolute pr-[25px] top-[100px] left-[100px] z-[2] text-red-400 text-2xl">
          An Error Occured Due To Some Simps is Attacking On You
        </h2> */}

          {/* <img
          className={` z-[2] img-fluid w-full max-w-xl xl:max-w-[36rem] 2xl:max-w-none border-2 border-black rounded-md ${styles.shadowBlack} object-cover`}
          src="https://shuffle.dev/shopal-assets/images/placeholder-office-sign-in.png"
          alt=""
        /> */}
          <div
            className={`lg:w-[555px] lg:h-[555px] flex items-center justify-center relative max-w-xl xl:max-w-[36rem] 2xl:max-w-none border-2 border-black rounded-md ${
              styles.shadowBlack
            } object-cover bg-[url('https://shuffle.dev/shopal-assets/images/placeholder-office-sign-in.png')] ${
              errorMsg && styles.registerImg
            } `}
          >
            {errorMsg && (
              <h2 className="unset ml-[50px] mb-[150px]  mr-[35px] text-red-400 text-4xl/[3rem]">
                Error: {errorMsg}
              </h2>
            )}
          </div>
        </div>
        <div className="relative container px-4 mx-auto">
          <div className="max-w-sm mx-auto lg:mx-0">
            <div className="text-center mb-8">
              <span
                className={`block mb-2 text-sm font-bold uppercase text-green-500 ${styles.textGreen}`}
              >
                Sign Up
              </span>
              <h3 className="text-2xl font-bold">Create new account</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                required
                className="w-full mb-4 py-3 px-6 h-12 text-sm font-bold placeholder-black border-2 border-black rounded-md focus:outline-indigo"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
              />
              <input
                required
                className="w-full mb-4 py-3 px-6 h-12 text-sm font-bold placeholder-black border-2 border-black rounded-md focus:outline-indigo"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
              />
              <input
                required
                className="w-full mb-4 py-3 px-6 h-12 text-sm font-bold placeholder-black border-2 border-black rounded-md focus:outline-indigo"
                type="tel"
                value={phoneNumber}
                placeholder="Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                maxLength="10"
                minLength={10}
                pattern="[0-9]{10}"
                inputMode="numeric"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full mb-4 py-3 px-6 h-12 text-sm font-bold placeholder-black border-2 border-black rounded-md focus:outline-indigo"
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
                    rules={["minLength", "specialChar", "number", "capital"]}
                    minLength={6}
                    value={password}
                    onChange={(isValid) => {
                      setIsValidPassword(isValid.valueOf());
                    }}
                  />
                </div>
              )}
              <div className="flex mb-5 items-start">
                <input className="mr-3" type="checkbox" value="" id="" />
                <label className="text-sm font-bold" htmlFor="">
                  By signing up, you agree to our Terms, Data Policy and Cookies
                  Policy.
                </label>
              </div>

              <button
                type="submit"
                className="group relative inline-block h-12 mb-5 w-full bg-black rounded-md"
              >
                <div
                  className={`absolute top-0 left-0 transform ${styles.greenBg} -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300`}
                >
                  <div
                    className={`flex h-full w-full items-center justify-center   active:bg-blue-300  border-2 border-black rounded-md transition duration-300 ${
                      errorMsg && "bg-red-500"
                    }`}
                  >
                    {btnText == "Loading" && <Spinner color={"black"} />}{" "}
                    <span className="text-base font-black text-black">
                      {btnText}
                    </span>
                  </div>
                </div>
              </button>

              <p className="text-lg text-center font-semibold">OR</p>

              <button
                className="group py-4  my-4 relative inline-block h-12 w-full bg-black rounded-md"
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
              </button>
              <p className="text-center">
                <span className="text-sm font-bold">
                  Already have an account?
                </span>
                <Link
                  className="inline-block text-sm font-bold text-indigo-500 hover:text-indigo-700 underline"
                  href="/login"
                >
                  Sign In
                </Link>
              </p>
            </form>
            <div className="lg:hidden mt-16">
              <img
                className="img-fluid border-2 border-black rounded-md shadow object-cover"
                src="https://shuffle.dev/shopal-assets/images/placeholder-office-sign-in.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
