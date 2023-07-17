"use client";
import { useState } from "react";
import PriceBox from "@components/checkoutPage/subcomponent/PriceBox";
import styles from "@styles/components/checkout/AddressPage.module.css";
import { useRecoilValue } from "recoil";
import { cartItemsAtom } from "@/atoms/CartAtoms";
import Spinner from "@components/minicomponents/Spinners/InsideButtonSpinner";
import Product from "@components/checkoutPage/orderSummaryPageCheckout/Product";
import WhatsInTheBag from "@components/checkoutPage/orderSummaryPageCheckout/WhatsInTheBag";
import { createPaymentLink } from "@requests/buyOnlineStripe";
export default function App({ setOk }) {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [errorMsg, setErrorMsg] = useState("");
  const cartItems = useRecoilValue(cartItemsAtom);
  const [disableBtn, setDisableBtn] = useState(false);
  const [btnText, setBtnText] = useState("Confirm Order");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setDisableBtn(true);
    setBtnText("Loading");
    try {
      if (paymentMethod == "Online") {
        const response = await createPaymentLink({ cartItems });
        const link = response.message;

        setBtnText("Going To Payment Page");
        setTimeout(() => {
          window.location.href = link;
        }, 600);
      } else if (paymentMethod == "COD") {
        throw Error("abhi available nahi hai !");
      }
      setDisableBtn(false);
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
    <div className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl lg:max-w-6xl mx-auto">
          <h3 className={` ${styles.satoshi} text-3xl font-bold mb-6`}>
            Payment Page
          </h3>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-2/3 px-4 mb-12 lg:mb-0">
              <h3 className={` ${styles.satoshi} text-xl font-bold mb-6`}>
                Select Payment Method :
              </h3>

              <form onSubmit={handleSubmit}>
                <fieldset className="mb-5">
                  <legend className="sr-only">Payment Method</legend>

                  <div className="flex items-center mb-4">
                    <input
                      id="payment-cod"
                      type="radio"
                      name="paymentMethod"
                      value="COD"
                      className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                      aria-labelledby="payment-cod"
                      aria-describedby="payment-cod"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      defaultChecked
                    />
                    <label
                      htmlFor="payment-cod"
                      className="text-sm font-medium text-gray-900 ml-2 block"
                    >
                      Cash On Delivery (COD)
                    </label>
                  </div>

                  <div className="flex items-center mb-4">
                    <input
                      id="payment-online"
                      type="radio"
                      name="paymentMethod"
                      value="Online"
                      className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                      aria-labelledby="payment-online"
                      aria-describedby="payment-online"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label
                      htmlFor="payment-online"
                      className="text-sm font-medium text-gray-900 ml-2 block"
                    >
                      Online Payment
                    </label>
                  </div>
                </fieldset>
                <button
                  className="group relative inline-block h-12 w-full bg-black rounded-md"
                  type="submit"
                >
                  <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0  group-hover:translate-x-0 transition duration-300">
                    <div
                      className={`flex h-full w-full items-center justify-center active:bg-blue-500 ${styles.greenBg} border-2 border-black rounded-md`}
                    >
                      {btnText == "Loading" && <Spinner color={"black"} />}{" "}
                      <span
                        className={`text-base font-black text-black ${styles.satoshi}`}
                      >
                        {" "}
                        {btnText}
                      </span>
                    </div>
                  </div>
                </button>
              </form>
            </div>
            <PriceBox />
          </div>
        </div>
      </div>
    </div>
  );
}
