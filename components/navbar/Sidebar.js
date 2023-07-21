"use client";
import Link from "next/link";
import { useCallback } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import styles from "@styles/components/navbar.module.css";
export default function App({ isOpen, setOpen, user }) {
  const handleSidebarByButton = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      }  navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50`}
    >
      <div
        onClick={handleSidebarByButton}
        className="navbar-backdrop fixed inset-0 backdrop-blur-xl backdrop-filter bg-gray-900 bg-opacity-80"
      ></div>
      <nav
        className="relative pt-7 pb-8 bg-white h-full overflow-y-auto"
        data-config-id="toggle-mobile-2"
        data-config-target=".navbar-menu"
        data-config-className="hidden"
      >
        <div className="flex flex-col px-6 h-full">
          <div className="flex items-center justify-between ml-4 mb-7">
            <img
              src="https://shuffle.dev/shopal-assets/logos/shopal-logo.svg"
              alt=""
              data-config-id="auto-img-10-1"
            />
            <div onClick={handleSidebarByButton}>
              <XMarkIcon width={30} />
            </div>
          </div>
          <ul className="w-full mb-auto pb-16">
            <li className="mb-6">
              <button
                className="relative group inline-flex flex-wrap items-center text-left text-base font-bold text-black"
                data-config-id="auto-input-3-1"
              >
                <span className="mr-2" data-config-id="auto-txt-36-1">
                  Category
                </span>
                <svg
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.99999 5.08071C3.91243 5.08081 3.82572 5.06361 3.74483 5.03009C3.66394 4.99657 3.59048 4.94739 3.52866 4.88538L0.700184 2.05728C0.575173 1.93227 0.504943 1.76272 0.504944 1.58593C0.504944 1.40913 0.575175 1.23958 0.700187 1.11457C0.825199 0.989561 0.99475 0.919331 1.17154 0.919331C1.34834 0.919332 1.51789 0.989563 1.6429 1.11457L3.99999 3.47132L6.35708 1.11455C6.48209 0.989543 6.65165 0.919312 6.82844 0.919312C7.00523 0.919311 7.17478 0.989541 7.29979 1.11455C7.42481 1.23956 7.49504 1.40911 7.49504 1.58591C7.49504 1.7627 7.42481 1.93225 7.2998 2.05726L4.47132 4.8854C4.4095 4.9474 4.33604 4.99658 4.25515 5.0301C4.17426 5.06361 4.08755 5.08082 3.99999 5.08071V5.08071Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div
                  className={`hidden group-hover:block w-full pt-2 px-2 ${styles.shadowBlack}`}
                >
                  <a
                    className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                    href="https://shuffle.dev/#"
                    data-config-id="auto-txt-37-1"
                  >
                    Category 1
                  </a>
                  <a
                    className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                    href="https://shuffle.dev/#"
                    data-config-id="auto-txt-38-1"
                  >
                    Category 1
                  </a>
                  <a
                    className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                    href="https://shuffle.dev/#"
                    data-config-id="auto-txt-39-1"
                  >
                    Category 1
                  </a>
                </div>
              </button>
            </li>
            <li className="mb-6">
              <button
                className="relative group inline-flex flex-wrap items-center text-left text-base font-bold text-black"
                data-config-id="auto-input-3-1"
              >
                <span className="mr-2" data-config-id="auto-txt-40-1">
                  Pages
                </span>
                <svg
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.99999 5.08071C3.91243 5.08081 3.82572 5.06361 3.74483 5.03009C3.66394 4.99657 3.59048 4.94739 3.52866 4.88538L0.700184 2.05728C0.575173 1.93227 0.504943 1.76272 0.504944 1.58593C0.504944 1.40913 0.575175 1.23958 0.700187 1.11457C0.825199 0.989561 0.99475 0.919331 1.17154 0.919331C1.34834 0.919332 1.51789 0.989563 1.6429 1.11457L3.99999 3.47132L6.35708 1.11455C6.48209 0.989543 6.65165 0.919312 6.82844 0.919312C7.00523 0.919311 7.17478 0.989541 7.29979 1.11455C7.42481 1.23956 7.49504 1.40911 7.49504 1.58591C7.49504 1.7627 7.42481 1.93225 7.2998 2.05726L4.47132 4.8854C4.4095 4.9474 4.33604 4.99658 4.25515 5.0301C4.17426 5.06361 4.08755 5.08082 3.99999 5.08071V5.08071Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="hidden group-hover:block w-full pt-2 px-2">
                  <a
                    className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                    href="https://shuffle.dev/#"
                    data-config-id="auto-txt-41-1"
                  >
                    Category 1
                  </a>
                  <a
                    className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                    href="https://shuffle.dev/#"
                    data-config-id="auto-txt-42-1"
                  >
                    Category 1
                  </a>
                  <a
                    className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                    href="https://shuffle.dev/#"
                    data-config-id="auto-txt-43-1"
                  >
                    Category 1
                  </a>
                </div>
              </button>
            </li>
            <li className="mb-6">
              <button
                className="relative group inline-flex flex-wrap items-center text-left text-base font-bold text-black"
                data-config-id="auto-input-3-1"
              >
                <span className="mr-2" data-config-id="auto-txt-44-1">
                  Products
                </span>
                <svg
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.99999 5.08071C3.91243 5.08081 3.82572 5.06361 3.74483 5.03009C3.66394 4.99657 3.59048 4.94739 3.52866 4.88538L0.700184 2.05728C0.575173 1.93227 0.504943 1.76272 0.504944 1.58593C0.504944 1.40913 0.575175 1.23958 0.700187 1.11457C0.825199 0.989561 0.99475 0.919331 1.17154 0.919331C1.34834 0.919332 1.51789 0.989563 1.6429 1.11457L3.99999 3.47132L6.35708 1.11455C6.48209 0.989543 6.65165 0.919312 6.82844 0.919312C7.00523 0.919311 7.17478 0.989541 7.29979 1.11455C7.42481 1.23956 7.49504 1.40911 7.49504 1.58591C7.49504 1.7627 7.42481 1.93225 7.2998 2.05726L4.47132 4.8854C4.4095 4.9474 4.33604 4.99658 4.25515 5.0301C4.17426 5.06361 4.08755 5.08082 3.99999 5.08071V5.08071Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="hidden group-hover:block w-full pt-2 px-2">
                  <a
                    className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                    href="https://shuffle.dev/#"
                    data-config-id="auto-txt-45-1"
                  >
                    Category 1
                  </a>
                  <a
                    className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                    href="https://shuffle.dev/#"
                    data-config-id="auto-txt-46-1"
                  >
                    Category 1
                  </a>
                  <a
                    className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                    href="https://shuffle.dev/#"
                    data-config-id="auto-txt-47-1"
                  >
                    Category 1
                  </a>
                </div>
              </button>
            </li>
            <li className="mb-6">
              <a
                className="inline-block pl-1 font-bold"
                href="https://shuffle.dev/#"
                data-config-id="auto-txt-22-1"
              >
                Blog
              </a>
            </li>
            <li className="mb-6">
              <Link
                onClick={handleSidebarByButton}
                href={"/orders/list"}
                className="inline-block pl-1 font-bold"
              >
                Your Orders
              </Link>
            </li>
            <li>
              <Link
                className="inline-block pl-1 font-bold"
                href="/contact"
                onClick={handleSidebarByButton}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="w-full">
            {user ? (
              <div>
                <Link
                  href={"/logout"}
                  onClick={handleSidebarByButton}
                  className={`block text-center w-full py-4 px-4 mb-4 font-bold border-2 border-gray-900 rounded-md ${styles.shadowBlack} bg-orange-500`}
                  data-config-id="auto-txt-25-1"
                >
                  Log Out
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  href={"/login"}
                  onClick={handleSidebarByButton}
                  className={`block text-center w-full py-4 px-4 mb-4 font-bold border-2 border-gray-900 rounded-md ${styles.shadowBlack}`}
                  data-config-id="auto-txt-25-1"
                >
                  Log in
                </Link>
                <Link
                  href={"/register"}
                  onClick={handleSidebarByButton}
                  className={`block text-center w-full py-4 px-4 mb-8 font-bold border-2 border-gray-900 rounded-md ${styles.shadowBlack} text-gray-900 ${styles.greenBg}`}
                  data-config-id="auto-txt-26-1"
                >
                  Sign up
                </Link>
              </div>
            )}

            <p className="pl-2 text-sm" data-config-id="auto-txt-27-1">
              2022 © Shuffle
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}
