"use client";

import styles from "../../styles/cart/cart.module.css";

export default function App() {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl lg:max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold">Cart</h3>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-2/3 px-4 mb-12 lg:mb-0">
              <div className="pt-12">
                <div className="overflow-x-scroll mb-6">
                  <table className="w-full min-w-max table-auto border-b-2 border-black">
                    <thead>
                      <tr className="border-b-2 border-black">
                        <th className="pb-5 text-sm font-bold text-left">
                          Product
                        </th>
                        <th
                          className={`px-8 pb-5 text-sm font-bold text-left `}
                        >
                          <div className={`${styles.hideInSmallDevice}`}>
                            Quantity
                          </div>
                        </th>
                        <th className={`pb-5 text-sm font-bold  text-right`}>
                          <div className={`${styles.hideInSmallDevice}`}>
                            Subtotal
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="h-28 pt-6 pr-8">
                          <div className="flex h-full items-start md:items-center -mx-3">
                            <div className="w-auto px-3">
                              <img
                                className="img-fluid w-20 h-20 border-2 border-black rounded-md"
                                src="https://shuffle.dev/shopal-assets/products/product-square1.png"
                                alt=""
                              />
                            </div>
                            <div className="w-auto flex flex-col gap-[4px]  px-3">
                              <h4 className="text-base font-bold leading-none">
                                Main Name for Product
                              </h4>
                              <div className="flex md:hidden h-full items-center text-base font-bold">
                                $132.00
                              </div>
                              <div className="flex md:hidden h-full items-center">
                                <div className="flex h-[2rem] md:h-12 w-24 px-2 items-center justify-between bg-white border-2 border-black rounded-md">
                                  <button className="flex w-3.5 h-3.5 px-px items-center justify-center bg-black hover:bg-indigo-500 rounded transition duration-100">
                                    <div className="h-px mx-px w-full bg-white"></div>
                                  </button>
                                  <input
                                    className="w-10 text-center text-sm font-bold placeholder-black text-black outline-none"
                                    type="number"
                                    placeholder="2"
                                  />
                                  <button className="relative flex w-3.5 h-3.5 px-px py-px items-center justify-center bg-black hover:bg-indigo-500 rounded transition duration-100">
                                    <div className="relative h-full w-full py-px">
                                      <div className="absolute top-1/2 left-0 h-px w-full bg-white"></div>
                                      <div className="inline-block max-w-max mx-auto h-full bg-white">
                                        <div className="inline-block px-px"></div>
                                      </div>
                                    </div>
                                  </button>
                                </div>
                              </div>
                              <span
                                className={`${styles.hideInSmallDevice} text-sm font-bold`}
                              >
                                Small description
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className={`h-28 pt-6 px-8`}>
                          <div className={` ${styles.hideInSmallDevice} `}>
                            <div className="flex h-full items-center">
                              <div className="flex h-12 w-24 px-2 items-center justify-between bg-white border-2 border-black rounded-md">
                                <button className="flex w-3.5 h-3.5 px-px items-center justify-center bg-black hover:bg-indigo-500 rounded transition duration-100">
                                  <div className="h-px mx-px w-full bg-white"></div>
                                </button>
                                <input
                                  className="w-10 text-center text-sm font-bold placeholder-black text-black outline-none"
                                  type="number"
                                  placeholder="2"
                                />
                                <button className="relative flex w-3.5 h-3.5 px-px py-px items-center justify-center bg-black hover:bg-indigo-500 rounded transition duration-100">
                                  <div className="relative h-full w-full py-px">
                                    <div className="absolute top-1/2 left-0 h-px w-full bg-white"></div>
                                    <div className="inline-block max-w-max mx-auto h-full bg-white">
                                      <div className="inline-block px-px"></div>
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className={`h-28 pt-6 pl-8 `}>
                          <div className="flex h-full items-center text-base font-bold">
                            <div className={` ${styles.hideInSmallDevice}`}>
                              $132.00
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="max-w-sm">
                  <label className="block text-sm font-bold mb-2" for="">
                    Enter Promo Code
                  </label>
                  <div className="flex">
                    <input
                      className="h-12 w-full py-3 px-4 mr-2 text-sm font-bold placeholder-black border-2 border-black rounded-md focus:outline-indigo"
                      type="text"
                      placeholder="EASDDGFHGE5423"
                    />
                    <button
                      className="flex-shrink-0 group relative inline-block h-12 w-24 bg-black rounded-md"
                      type="submit"
                    >
                      <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                        <div
                          className={`flex h-full w-full items-center justify-center   ${styles.buttonColor} border-2 border-black rounded-md `}
                        >
                          <span className="text-base font-black text-black">
                            Apply
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4">
              <div
                className={`pt-8 pb-6 px-6 ${styles.greenBg} border-2 border-black rounded-md ${styles.shadowBlack} `}
              >
                <h4 className="font-bold mb-3">Cart totals</h4>
                <p className="text-sm font-semibold mb-5">
                  Shipping and additional costs are calculated based on values
                  you have entered.
                </p>
                <div className="mb-6 border-2 border-black bg-white rounded-md">
                  <div className="relative flex px-5 pt-5 pb-6 items-center justify-between">
                    <span className="text-sm font-bold">Order Subtotal</span>
                    <span className="text-sm font-black">$390.00</span>
                    <div className="absolute bottom-0 left-0 py-px bg-black w-11/12"></div>
                  </div>
                  <div className="relative flex px-5 pt-5 pb-6 items-center justify-between">
                    <span className="text-sm font-bold">
                      Shipping and handling
                    </span>
                    <span className="text-sm font-black">$10.00</span>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 py-px bg-black w-10/12"></div>
                  </div>
                  <div className="relative flex px-5 pt-5 pb-6 items-center justify-between">
                    <span className="text-sm font-bold">Tax</span>
                    <span className="text-sm font-black">$0.00</span>
                    <div className="absolute bottom-0 left-0 py-px bg-black w-full"></div>
                  </div>
                  <div className="flex px-5 py-5 items-center justify-between">
                    <span className="text-lg font-bold">Total</span>
                    <span className={`text-lg font-black  ${styles.textGreen}`}>
                      $400.00
                    </span>
                  </div>
                </div>
                <button className="group relative inline-block h-12 w-full bg-black rounded-md">
                  <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                    <div className="flex h-full w-full items-center justify-center bg-black hover:bg-indigo-500 border-2 border-black rounded-md transition duration-300">
                      <span className="text-base font-black text-white">
                        Go to Checkout
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
