"use client";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { useState, useEffect } from "react";
import { cartItemsAtom } from "@atoms/CartAtoms";
import styles from "@styles/components/navbar.module.css";
export default function App({ showInSM }) {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const cartItems = useRecoilValue(cartItemsAtom);
  useEffect(() => {
    const netQnty = cartItems.length;

    setTotalQuantity(netQnty);
  }, [cartItems]);
  return (
    <Link
      href={"/cart"}
      className={`flex items-center cursor-pointer gap-[6px] mr-6 ${styles.textGreen} hover:text-orange-500 transition duration-200`}
      // href="https://shuffle.dev/#"
    >
      <div className="relative">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-config-id="auto-svg-2-1"
        >
          <path
            d="M19.24 5.58H18.84L15.46 2.2C15.19 1.93 14.75 1.93 14.47 2.2C14.2 2.47 14.2 2.91 14.47 3.19L16.86 5.58H7.14L9.53 3.19C9.8 2.92 9.8 2.48 9.53 2.2C9.26 1.93 8.82 1.93 8.54 2.2L5.17 5.58H4.77C3.87 5.58 2 5.58 2 8.14C2 9.11 2.2 9.75 2.62 10.17C2.86 10.42 3.15 10.55 3.46 10.62C3.75 10.69 4.06 10.7 4.36 10.7H19.64C19.95 10.7 20.24 10.68 20.52 10.62C21.36 10.42 22 9.82 22 8.14C22 5.58 20.13 5.58 19.24 5.58Z"
            fill="currentColor"
          ></path>
          <path
            d="M19.0499 12H4.86991C4.24991 12 3.77991 12.55 3.87991 13.16L4.71991 18.3C4.99991 20.02 5.74991 22 9.07991 22H14.6899C18.0599 22 18.6599 20.31 19.0199 18.42L20.0299 13.19C20.1499 12.57 19.6799 12 19.0499 12ZM10.6099 18.45C10.6099 18.84 10.2999 19.15 9.91991 19.15C9.52991 19.15 9.21991 18.84 9.21991 18.45V15.15C9.21991 14.77 9.52991 14.45 9.91991 14.45C10.2999 14.45 10.6099 14.77 10.6099 15.15V18.45ZM14.8899 18.45C14.8899 18.84 14.5799 19.15 14.1899 19.15C13.8099 19.15 13.4899 18.84 13.4899 18.45V15.15C13.4899 14.77 13.8099 14.45 14.1899 14.45C14.5799 14.45 14.8899 14.77 14.8899 15.15V18.45Z"
            fill="currentColor"
          ></path>
        </svg>
        {totalQuantity ? (
          <span
            className={`absolute top-[-1px] right-[-8px] flex items-center justify-center text-black text-xs  transform -translate-y-1/2 w-3.5 h-3.5 ${styles.greenBg} border-2 border-white dark:border-gray-800 rounded-full`}
          ></span>
        ) : null}
      </div>
      <span className={`text-black ${styles.hideInSmallDeviceShowInLarge}`}>
        Cart
      </span>
    </Link>
  );
}
