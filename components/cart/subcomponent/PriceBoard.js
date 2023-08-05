"use client";
import styles from "@styles/cart/cart.module.css";
import { userInfoAtom } from "@atoms/UserInfoAtom";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { useEffect, useMemo, useState } from "react";
export default function App({ products }) {
  // const totalPrice = useMemo(() => {
  //   console.log(products);
  //   return products.reduce(
  //     (total, item) => total + item.product.price * item.quantity,
  //     0
  //   );
  // }, [products]);
  const [productPrice, setProductPrice] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(0);
  const [netPrice, setNetPrice] = useState(0);
  const [taxPrice, setTaxPrice] = useState(0);
  const userInfo = useRecoilValue(userInfoAtom);
  const [isUserVerified, setIsUserVerified] = useState("Loading");
  const [totalQuantity, setTotalQuantity] = useState(0);
  const shippingLimitPrice = 249;
  useEffect(() => {
    const ProductNet = products.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
    const shippingChargeNet = products.reduce(
      (total, item) => total + 15 * item.quantity,
      0
    );

    const totalProductQnty = products.reduce(
      (total, item) => total + item.quantity,
      0
    );

    setShippingCharge(shippingChargeNet);
    setTotalQuantity(totalProductQnty);
    setProductPrice(ProductNet);
  }, [products]);

  useEffect(() => {
    if (totalQuantity >= 3) {
      let shippedCharge = shippingCharge - 25;
      if (shippedCharge <= 0) {
        shippedCharge = 0;
      }
      console.log(shippedCharge, totalQuantity);
      setShippingCharge(shippedCharge);
    }

    if (productPrice > shippingLimitPrice) {
      setShippingCharge(0);
      console.log("shipped up above anti");
    }
  }, [productPrice, totalQuantity]);

  useEffect(() => {
    setNetPrice(productPrice + shippingCharge);
  }, [productPrice, shippingCharge]);

  useEffect(() => {
    if (userInfo) {
      setIsUserVerified(true);
    } else {
      setIsUserVerified(false);
    }
  }, [userInfo]);
  // useEffect(() => {
  //   if (totalQuantity >= 3) {
  //     let shippedCharge = shippingCharge - 25;
  //     if (shippedCharge <= 0) {
  //       shippedCharge = 0;
  //     }
  //     console.log(shippedCharge, totalQuantity);
  //     setShippingCharge(shippedCharge);
  //   }
  // }, [totalQuantity]);
  return (
    <div className="w-[98%] largeMobile:w-[90%] md:w-[76%] lg:w-1/3 px-4">
      <div
        className={`pt-8 pb-6 px-6 ${styles.greenBg} border-2 border-black rounded-md ${styles.shadowBlack} `}
      >
        <h4 className="font-bold mb-3">Cart totals</h4>
        <p className="text-sm font-semibold mb-5">
          Shipping and additional costs are calculated based on values you have
          entered.
        </p>
        <div className="mb-6 border-2 border-black bg-white rounded-md">
          <div className="relative flex px-5 pt-5 pb-6 items-center justify-between">
            <span className="text-sm font-bold">Order Subtotal</span>
            <span className="text-sm font-black">₹ {productPrice}</span>
            <div className="absolute bottom-0 left-0 py-px bg-black w-11/12"></div>
          </div>
          <div className="relative flex px-5 pt-5 pb-6 items-center justify-between">
            <span className="text-sm font-bold">Shipping and handling</span>
            <span className="text-sm font-black">
              {shippingCharge == 0 ? (
                <span className={`${styles.textGreen}`}>FREE</span>
              ) : (
                " ₹ " + shippingCharge
              )}
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 py-px bg-black w-10/12"></div>
          </div>
          <div className="relative flex px-5 pt-5 pb-6 items-center justify-between">
            <span className="text-sm font-bold">Tax</span>
            <span className="text-sm font-black">₹ 0.00</span>
            <div className="absolute bottom-0 left-0 py-px bg-black w-full"></div>
          </div>
          <div className="flex px-5 py-5 items-center justify-between">
            <span className="text-lg font-bold">Total</span>
            <span className={`text-lg font-black  ${styles.textGreen}`}>
              ₹ {netPrice}
            </span>
          </div>
        </div>
        <Link
          href={
            isUserVerified
              ? isUserVerified != "Loading"
                ? "/check"
                : "/cart"
              : "/login"
          }
          className="group relative inline-block h-12 w-full bg-black rounded-md"
        >
          <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
            <div className="flex h-full w-full items-center justify-center bg-black hover:bg-indigo-500 border-2 border-black rounded-md transition duration-300">
              <span className="text-base font-black text-white">
                {isUserVerified
                  ? isUserVerified != "Loading"
                    ? "Go To Buy"
                    : "Loading"
                  : "Register/Login To Buy"}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
