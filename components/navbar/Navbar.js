"use client";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import SideBar from "@components/navbar/Sidebar";
import ProfileDropDown from "@components/dropdown/navbar/Profile";
import LeftSideButton from "@components/navbar/LeftSideButton";
import ProfileButton from "@components/navbar/LeftSideButton/ProfileButton";
import CartButton from "@components/navbar/LeftSideButton/CartButton";
import SearchButton from "@components/navbar/LeftSideButton/SearchButton";
import styles from "@styles/components/navbar.module.css";
import AuthButton from "@components/navbar/LeftSideButton/AuthButton";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"], weight: "400", style: "normal" });

import UseUser from "@hooks/UseUser";
export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarByButton = () => {
    setSidebarOpen(true);
  };

  const { loading, user, loggedIn } = UseUser();

  return (
    <main className={sora.className}>
      <div class="isolate fixed w-screen z-[1] max-w-screen">
        <SideBar
          user={user}
          isOpen={isSidebarOpen}
          setOpen={setSidebarOpen}
        />
        <nav
          class="relative z-10 bg-[#fffaf0]"
          data-config-id="toggle-mobile"
          data-config-target=".navbar-menu"
          data-config-class="hidden"
        >
          <div class="flex h-[3rem] md:h-[4rem] border-black border-b-[2px] py-6 px-6 items-center justify-between bg-transparent relative">
            <Link class="inline-block text-2xl font-bold mr-10" href="/">
              <img
                src="https://shuffle.dev/shopal-assets/logos/shopal-logo.svg"
                alt=""
                data-config-id="auto-img-1-1"
              />
            </Link>
            <ul class="hidden lg:flex items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <li class="mr-6">
                <button
                  class="relative group inline-flex items-center text-left text-base font-bold text-black hover:text-indigo-500"
                  data-config-id="auto-input-3-1"
                >
                  <span class="mr-2" data-config-id="auto-txt-28-1">
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
                  <div class="hidden group-hover:block absolute z-50 bottom-0 left-0 transform translate-y-full w-56 pt-6">
                    <div class="p-2 bg-white border-2 border-black rounded-md shadow">
                      <a
                        class="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                        href="https://shuffle.dev/#"
                        data-config-id="auto-txt-29-1"
                      >
                        Category 1
                      </a>
                      <a
                        class="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                        href="https://shuffle.dev/#"
                        data-config-id="auto-txt-30-1"
                      >
                        Category 1
                      </a>
                      <a
                        class="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                        href="https://shuffle.dev/#"
                        data-config-id="auto-txt-31-1"
                      >
                        Category 1
                      </a>
                    </div>
                  </div>
                </button>
              </li>

              <li class="mr-6">
                <a
                  class="inline-block font-bold text-gray-900 hover:text-indigo-500"
                  href="https://shuffle.dev/#"
                  data-config-id="auto-txt-7-1"
                >
                  Story
                </a>
              </li>
              <li>
                <Link
                  class="inline-block font-bold text-gray-900 hover:text-indigo-500"
                  href="/orders/list"
                  data-config-id="auto-txt-8-1"
                >
                  Your Orders
                </Link>
              </li>
            </ul>
            <div class="inline-flex items-center">
              <div class="flex lg:flex">
                <SearchButton showInSM={true} />
                <CartButton showInSM={true} />
                {user ? (
                  <ProfileButton
                    userName={user.message.fullName}
                    showInSM={false}
                  />
                ) : (
                  <AuthButton />
                )}
              </div>
              <button
                onClick={() => setSidebarOpen(true)}
                className={`${styles.hideInLargeDeviceShowInTablet} navbar-burger flex p-1 items-center lg:text-green-500 hover:text-orange-500`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-config-id="auto-svg-5-1"
                >
                  <path
                    d="M3 18H21"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M3 12H21"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M3 6H21"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className="h-[50px]"></div>
    </main>
  );
}
