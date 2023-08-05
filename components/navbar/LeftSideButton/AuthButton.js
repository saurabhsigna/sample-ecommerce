"use client";
import styles from "@styles/components/navbar.module.css";
import { useRouter } from "next/navigation";

export default function App({ showInSM }) {
  const router = useRouter();

  const handleAuthButton = () => {
    let currentPath = window.location.pathname;

    router.push(`/register?path=${currentPath}`);
  };

  return (
    <div className={`hidden largeMobile:block`}>
      <button
        onClick={handleAuthButton}
        className={`flex items-center gap-[6px] cursor-pointer mr-6 ${styles.textGreen} hover:text-orange-500 transition duration-200 `}
        // href="https://shuffle.dev/#"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-config-id="auto-svg-8-7"
        >
          <path
            d="M6.71297 8.85331H8.77297V13.6533C8.77297 14.36 9.65297 14.6933 10.1196 14.16L15.1663 8.42665C15.6063 7.92665 15.253 7.14665 14.5863 7.14665H12.5263V2.34665C12.5263 1.63998 11.6463 1.30665 11.1796 1.83998L6.13297 7.57331C5.69963 8.07331 6.05297 8.85331 6.71297 8.85331Z"
            fill="currentColor"
          ></path>
          <path
            d="M6.16667 3.16663H1.5C1.22667 3.16663 1 2.93996 1 2.66663C1 2.39329 1.22667 2.16663 1.5 2.16663H6.16667C6.44 2.16663 6.66667 2.39329 6.66667 2.66663C6.66667 2.93996 6.44 3.16663 6.16667 3.16663Z"
            fill="currentColor"
          ></path>
          <path
            d="M5.5 13.8334H1.5C1.22667 13.8334 1 13.6067 1 13.3334C1 13.06 1.22667 12.8334 1.5 12.8334H5.5C5.77333 12.8334 6 13.06 6 13.3334C6 13.6067 5.77333 13.8334 5.5 13.8334Z"
            fill="currentColor"
          ></path>
          <path
            d="M3.5 8.5H1.5C1.22667 8.5 1 8.27333 1 8C1 7.72667 1.22667 7.5 1.5 7.5H3.5C3.77333 7.5 4 7.72667 4 8C4 8.27333 3.77333 8.5 3.5 8.5Z"
            fill="currentColor"
          ></path>
        </svg>

        <span className={`text-black ${styles.hideInSmallDeviceShowInLarge}`}>
          Register/Login
        </span>
      </button>
    </div>
  );
}
