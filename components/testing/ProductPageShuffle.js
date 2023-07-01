import ShowMoreButton from "../product/ShowMoreButton";
import styles from "../../styles/product/product.module.css";
import SingleProduct from "../product/SingleProduct";
export default function App() {
  return (
    <section
  
      class="py-16"
    >
      <div class="container px-4 mx-auto">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-wrap items-center justify-between mb-10">
            <h2 class="text-2xl sm:text-3xl font-[600]">
              <span class="text-black" data-config-id="auto-txt-1-2">
                Found 420 results for
              </span>
              <span
                class={`block lg:inline ${styles.textGreen} `}
                data-config-id="auto-txt-2-2"
              >
                {" "}
                Lorem Ipsum
              </span>
            </h2>
            <div class="w-full lg:w-auto inline-flex items-center mt-6 lg:mt-0">
              <div class="group relative h-12 w-52 mr-6 border-2 border-black rounded-md overflow-hidden">
                <select
                  class="w-full h-full px-4 text-sm font-bold appearance-none outline-none"
                  name=""
                  id=""
                  data-config-id="auto-input-7-2"
                >
                  <option value="1">Sort by Newest</option>
                  <option value="1">Sort by Oldest</option>
                  <option value="1">Sort by Price</option>
                </select>
                <span class="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 text-black group-hover:text-indigo-500">
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="auto-svg-1-2"
                  >
                    <path
                      d="M8.94667 0.453308H4.79333H1.05333C0.413333 0.453308 0.0933335 1.22664 0.546667 1.67997L4 5.13331C4.55333 5.68664 5.45333 5.68664 6.00667 5.13331L7.32 3.81997L9.46 1.67997C9.90667 1.22664 9.58667 0.453308 8.94667 0.453308Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
              <div class="inline-flex h-12 border-2 border-black rounded-md overflow-hidden">
                <a
                  class="inline-flex items-center justify-center w-12 h-full border-r border-black bg-green-500 transition duration-300"
                  href="https://shuffle.dev/#"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="auto-svg-2-2"
                  >
                    <path
                      d="M7.75 2V7.8H2C2 4.19 4.15 2.02 7.75 2Z"
                      fill="black"
                    ></path>
                    <path
                      d="M22 7.8H16.25V2C19.85 2.02 22 4.19 22 7.8Z"
                      fill="black"
                    ></path>
                    <path
                      d="M22 16.3C21.96 19.85 19.82 21.98 16.25 22V16.3H22Z"
                      fill="black"
                    ></path>
                    <path
                      d="M7.75 16.3V22C4.18 21.98 2.04 19.85 2 16.3H7.75Z"
                      fill="black"
                    ></path>
                    <path
                      d="M7.75 9.30005H2V14.8H7.75V9.30005Z"
                      fill="black"
                    ></path>
                    <path
                      d="M22 9.30005H16.25V14.8H22V9.30005Z"
                      fill="black"
                    ></path>
                    <path
                      d="M14.75 9.30005H9.25V14.8H14.75V9.30005Z"
                      fill="black"
                    ></path>
                    <path d="M14.75 2H9.25V7.8H14.75V2Z" fill="black"></path>
                    <path
                      d="M14.75 16.3H9.25V22H14.75V16.3Z"
                      fill="black"
                    ></path>
                  </svg>
                </a>
                <a
                  class="inline-flex items-center justify-center w-12 h-full border-l border-black bg-white hover:bg-green-500 transition duration-300"
                  href="https://shuffle.dev/#"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="auto-svg-3-2"
                  >
                    <path
                      d="M20 6.52V1.98C20 0.57 19.36 0 17.77 0H13.73C12.14 0 11.5 0.57 11.5 1.98V6.51C11.5 7.93 12.14 8.49 13.73 8.49H17.77C19.36 8.5 20 7.93 20 6.52Z"
                      fill="black"
                    ></path>
                    <path
                      d="M20 17.77V13.73C20 12.14 19.36 11.5 17.77 11.5H13.73C12.14 11.5 11.5 12.14 11.5 13.73V17.77C11.5 19.36 12.14 20 13.73 20H17.77C19.36 20 20 19.36 20 17.77Z"
                      fill="black"
                    ></path>
                    <path
                      d="M8.5 6.52V1.98C8.5 0.57 7.86 0 6.27 0H2.23C0.64 0 0 0.57 0 1.98V6.51C0 7.93 0.64 8.49 2.23 8.49H6.27C7.86 8.5 8.5 7.93 8.5 6.52Z"
                      fill="black"
                    ></path>
                    <path
                      d="M8.5 17.77V13.73C8.5 12.14 7.86 11.5 6.27 11.5H2.23C0.64 11.5 0 12.14 0 13.73V17.77C0 19.36 0.64 20 2.23 20H6.27C7.86 20 8.5 19.36 8.5 17.77Z"
                      fill="black"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-4 justify-content">
            <div class="w-full lg:w-1/4 px-4 mb-12 lg:mb-0">
              <div
                class={`${styles.hideInSmallDeviceShowInLarge} flex flex-wrap -mx-4 -mb-8`}
              >
                <div class="w-full sm:w-1/2 lg:w-full px-4 mb-8">
                  <h4
                    class="text-2xl font-bold mb-4"
                    data-config-id="auto-txt-3-2"
                  >
                    Category
                  </h4>
                  <ul>
                    <li class="mb-4">
                      <a
                        class="inline-block font-medium text-black hover:text-indigo-500"
                        href="https://shuffle.dev/#"
                        data-config-id="auto-txt-4-2"
                      >
                        Lorem ipsum dolor sit
                      </a>
                    </li>
                    <li class="mb-4">
                      <a
                        class="inline-block font-medium text-black hover:text-indigo-500"
                        href="https://shuffle.dev/#"
                        data-config-id="auto-txt-5-2"
                      >
                        Sed dignissim enim
                      </a>
                    </li>
                    <li class="mb-4">
                      <a
                        class="inline-block font-medium text-black hover:text-indigo-500"
                        href="https://shuffle.dev/#"
                        data-config-id="auto-txt-6-2"
                      >
                        Duis nunc diam
                      </a>
                    </li>
                    <li class="mb-4">
                      <a
                        class="inline-block font-medium text-black hover:text-indigo-500"
                        href="https://shuffle.dev/#"
                        data-config-id="auto-txt-7-2"
                      >
                        Morbi id purus
                      </a>
                    </li>
                    <li class="mb-4">
                      <a
                        class="inline-block font-medium text-black hover:text-indigo-500"
                        href="https://shuffle.dev/#"
                        data-config-id="auto-txt-8-2"
                      >
                        Duis quam lacus
                      </a>
                    </li>
                    <li>
                      <a
                        class="inline-block font-medium text-black hover:text-indigo-500"
                        href="https://shuffle.dev/#"
                        data-config-id="auto-txt-9-2"
                      >
                        Vestibulum magna
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="w-full sm:w-1/2 lg:w-full px-4 mb-8">
                  <h4
                    class="text-2xl font-bold mb-4"
                    data-config-id="auto-txt-10-2"
                  >
                    Color
                  </h4>
                  <div class="flex flex-wrap -mb-2">
                    <button class="inline-block w-6 h-6 bg-emerald-500 mb-2 mr-4 rounded-full border border-white hover:border-black"></button>
                    <button
                      class={`inline-block w-6 h-6 ${styles.greenBg} mb-2 mr-4 rounded-full border border-white hover:border-black`}
                    ></button>
                    <button class="inline-block w-6 h-6 bg-indigo-500 mb-2 mr-4 rounded-full border border-white hover:border-black"></button>
                    <button class="inline-block w-6 h-6 bg-orange-500 mb-2 mr-4 rounded-full border border-white hover:border-black"></button>
                    <button class="inline-block w-6 h-6 bg-red-500 mb-2 mr-4 rounded-full border border-white hover:border-black"></button>
                    <button class="inline-block w-6 h-6 bg-blue-500 rounded-full border border-white hover:border-black"></button>
                  </div>
                </div>
                <div class="w-full sm:w-1/2 lg:w-full px-4 mb-8">
                  <h4
                    class="text-2xl font-bold mb-4"
                    data-config-id="auto-txt-11-2"
                  >
                    Delivery method
                  </h4>
                  <div class="flex items-center mb-4">
                    <input
                      class="mr-2"
                      type="checkbox"
                      value=""
                      id=""
                      data-config-id="auto-input-8-2"
                    />
                    <label
                      class="font-medium"
                      for=""
                      data-config-id="auto-txt-12-2"
                    >
                      Lorem ipsum dolor sit
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      class="mr-2"
                      type="checkbox"
                      value=""
                      id=""
                      data-config-id="auto-input-9-2"
                    />
                    <label
                      class="font-medium"
                      for=""
                      data-config-id="auto-txt-13-2"
                    >
                      Duis nunc diam
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      class="mr-2"
                      type="checkbox"
                      value=""
                      id=""
                      data-config-id="auto-input-10-2"
                    />
                    <label
                      class="font-medium"
                      for=""
                      data-config-id="auto-txt-14-2"
                    >
                      Morbi id purus
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      class="mr-2"
                      type="checkbox"
                      value=""
                      id=""
                      data-config-id="auto-input-11-2"
                    />
                    <label
                      class="font-medium"
                      for=""
                      data-config-id="auto-txt-15-2"
                    >
                      Duis quam lacus
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      class="mr-2"
                      type="checkbox"
                      value=""
                      id=""
                      data-config-id="auto-input-12-2"
                    />
                    <label
                      class="font-medium"
                      for=""
                      data-config-id="auto-txt-16-2"
                    >
                      Vestibulum magna
                    </label>
                  </div>
                </div>
                <div class="w-full sm:w-1/2 lg:w-full px-4 mb-8">
                  <h4
                    class="text-2xl font-bold mb-4"
                    data-config-id="auto-txt-17-2"
                  >
                    Price
                  </h4>
                  <div class="relative h-4 mb-2">
                    <div class="absolute top-1/2 left-0 w-full h-1 transform -translate-y-1/2">
                      <div class="h-1/2 w-full bg-black"></div>
                    </div>
                    <input
                      className="relative w-full bg-transparent appearance-none cursor-pointer"
                      type="range"
                      min="10"
                      max="500"
                      value="250"
                    />
                  </div>
                  <div class="flex items-center justify-between mb-8">
                    <span class="font-medium" data-config-id="auto-txt-18-2">
                      $10
                    </span>
                    <span class="font-medium" id="numberRange"></span>
                  </div>
                </div>
                <div class="w-full sm:w-1/2 lg:w-full px-4 mb-8">
                  <h4
                    class="text-2xl font-bold mb-3"
                    data-config-id="auto-txt-19-2"
                  >
                    Size
                  </h4>
                  <div class="flex flex-wrap -mx-1 -mb-1">
                    <div class="p-1">
                      <button
                        class="flex w-10 h-9 items-center justify-around text-sm font-bold border-2 border-black hover:bg-green-500 rounded-md"
                        data-config-id="auto-txt-20-2"
                      >
                        38
                      </button>
                    </div>
                    <div class="p-1">
                      <button
                        class="flex w-10 h-9 items-center justify-around text-sm font-bold border-2 border-black hover:bg-green-500 rounded-md"
                        data-config-id="auto-txt-21-2"
                      >
                        39
                      </button>
                    </div>
                    <div class="p-1">
                      <button
                        class="flex w-10 h-9 items-center justify-around text-sm font-bold border-2 border-black hover:bg-green-500 rounded-md"
                        data-config-id="auto-txt-22-2"
                      >
                        40
                      </button>
                    </div>
                    <div class="p-1">
                      <button
                        class="flex w-10 h-9 items-center justify-around text-sm font-bold border-2 border-black hover:bg-green-500 rounded-md"
                        data-config-id="auto-txt-23-2"
                      >
                        41
                      </button>
                    </div>
                    <div class="p-1">
                      <button
                        class="flex w-10 h-9 items-center justify-around text-sm font-bold border-2 border-black hover:bg-green-500 rounded-md"
                        data-config-id="auto-txt-24-2"
                      >
                        42
                      </button>
                    </div>
                    <div class="p-1">
                      <button
                        class="flex w-10 h-9 items-center justify-around text-sm font-bold border-2 border-black hover:bg-green-500 rounded-md"
                        data-config-id="auto-txt-25-2"
                      >
                        43
                      </button>
                    </div>
                    <div class="p-1">
                      <button
                        class="flex w-10 h-9 items-center justify-around text-sm font-bold border-2 border-black hover:bg-green-500 rounded-md"
                        data-config-id="auto-txt-26-2"
                      >
                        44
                      </button>
                    </div>
                    <div class="p-1">
                      <button
                        class="flex w-10 h-9 items-center justify-around text-sm font-bold border-2 border-black hover:bg-green-500 rounded-md"
                        data-config-id="auto-txt-27-2"
                      >
                        45
                      </button>
                    </div>
                    <div class="p-1">
                      <button
                        class="flex w-10 h-9 items-center justify-around text-sm font-bold border-2 border-black hover:bg-green-500 rounded-md"
                        data-config-id="auto-txt-28-2"
                      >
                        46
                      </button>
                    </div>
                  </div>
                </div>
                <div class="w-full sm:w-1/2 lg:w-full px-4 mb-8">
                  <h4
                    class="text-2xl font-bold mb-4"
                    data-config-id="auto-txt-29-2"
                  >
                    Localization
                  </h4>
                  <input
                    class="h-12 w-full px-4 py-2 mb-4 text-sm focus:outline-indigo placeholder-black font-bold border-2 border-black rounded-md"
                    type="text"
                    placeholder="City"
                    data-config-id="auto-input-14-2"
                  />
                  <div class="group relative h-12 border-2 border-black rounded-md overflow-hidden">
                    <select
                      class="w-full h-full px-4 text-sm font-bold appearance-none outline-none"
                      name=""
                      id=""
                      data-config-id="auto-input-15-2"
                    >
                      <option value="1">Region</option>
                      <option value="1">South</option>
                      <option value="1">North</option>
                    </select>
                    <span class="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 text-black group-hover:text-indigo-500">
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-config-id="auto-svg-4-2"
                      >
                        <path
                          d="M8.94667 0.453308H4.79333H1.05333C0.413333 0.453308 0.0933335 1.22664 0.546667 1.67997L4 5.13331C4.55333 5.68664 5.45333 5.68664 6.00667 5.13331L7.32 3.81997L9.46 1.67997C9.90667 1.22664 9.58667 0.453308 8.94667 0.453308Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-3/4 px-4">
              <div class="flex flex-wrap -mx-4 -mb-8">
                <div class="w-full md:w-1/2 lg:w-full cursor-pointer px-4 mb-8">
                  <div class="flex flex-wrap items-center -mx-4">
                    <div class="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
                      <div class="h-60 w-60 lg:w-full bg-black rounded-md">
                        <img
                          class="img-fluid w-full h-full transform -translate-x-1 -translate-y-1 object-cover border-2 border-black rounded-md"
                          src="https://shuffle.dev/shopal-assets/products/product-square1.png"
                          alt=""
                          data-config-id="auto-img-1-2"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-2/3 px-4">
                      <div>
                        <h4
                          class=" text-2xl  font-bold text-black mb-1"
                          data-config-id="auto-txt-30-2"
                        >
                          Concept of Physics Hc Verma Part 2
                        </h4>
                        <span
                          class="block font-bold  text-xl text-green-500 mb-8"
                          data-config-id="auto-txt-31-2"
                        >
                          $ 2.00
                        </span>

                        <ul class="font-bold md:w-[87%] w-full list-disc list-inside text-black mb-4">
                          <li data-config-id="auto-txt-32-2">
                            Is in Good condition
                          </li>
                          <li data-config-id="auto-txt-33-2">
                            {" "}
                            For class 12 , JEE , NEET aspirants
                          </li>
                          <li data-config-id="auto-txt-34-2">
                            Deliver within 12 hours
                          </li>
                        </ul>
                        <div class="flex flex-nowrap sm:flex-nowrap items-center -mx-2 -mb-4">
                          <div class="w-full sm:w-auto px-2 mb-4">
                            <a
                              class="group relative inline-block h-12 w-full sm:w-52 -mb-2 bg-black rounded-md"
                              href="https://shuffle.dev/#"
                            >
                              <div class="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                                <div
                                  class={`flex h-full w-full items-center justify-center ${styles.greenBg} border-2 border-black rounded-md`}
                                >
                                  <span
                                    class="text-base font-black text-black"
                                    data-config-id="auto-txt-35-2"
                                  >
                                    Add to Bag
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-black "></div>

                <div class="w-full md:w-1/2 lg:w-full cursor-pointer px-4 mb-8">
                  <div class="flex flex-wrap items-center -mx-4">
                    <div class="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
                      <div class="h-60 w-60 lg:w-full bg-black rounded-md">
                        <img
                          class="img-fluid w-full h-full transform -translate-x-1 -translate-y-1 object-cover border-2 border-black rounded-md"
                          src="https://shuffle.dev/shopal-assets/products/product-square1.png"
                          alt=""
                          data-config-id="auto-img-1-2"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-2/3 px-4">
                      <div>
                        <h4
                          class=" text-2xl  font-bold text-black mb-1"
                          data-config-id="auto-txt-30-2"
                        >
                          Concept of Physics Hc Verma Part 2
                        </h4>
                        <span
                          class="block font-bold  text-xl text-green-500 mb-8"
                          data-config-id="auto-txt-31-2"
                        >
                          $ 2.00
                        </span>

                        <ul class="font-bold md:w-[87%] w-full list-disc list-inside text-black mb-4">
                          <li data-config-id="auto-txt-32-2">
                            Is in Good condition
                          </li>
                          <li data-config-id="auto-txt-33-2">
                            {" "}
                            For class 12 , JEE , NEET aspirants
                          </li>
                          <li data-config-id="auto-txt-34-2">
                            Deliver within 12 hours
                          </li>
                        </ul>
                        <div class="flex flex-nowrap sm:flex-nowrap items-center -mx-2 -mb-4">
                          <div class="w-full sm:w-auto px-2 mb-4">
                            <a
                              class="group relative inline-block h-12 w-full sm:w-52 -mb-2 bg-black rounded-md"
                              href="https://shuffle.dev/#"
                            >
                              <div class="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                                <div
                                  class={`flex h-full w-full items-center justify-center ${styles.greenBg} border-2 border-black rounded-md`}
                                >
                                  <span
                                    class="text-base font-black text-black"
                                    data-config-id="auto-txt-35-2"
                                  >
                                    Add to Bag
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 lg:w-full cursor-pointer px-4 mb-8">
                  <div class="flex flex-wrap items-center -mx-4">
                    <div class="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
                      <div class="h-60 w-60 lg:w-full bg-black rounded-md">
                        <img
                          class="img-fluid w-full h-full transform -translate-x-1 -translate-y-1 object-cover border-2 border-black rounded-md"
                          src="https://shuffle.dev/shopal-assets/products/product-square1.png"
                          alt=""
                          data-config-id="auto-img-1-2"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-2/3 px-4">
                      <div>
                        <h4
                          class=" text-2xl  font-bold text-black mb-1"
                          data-config-id="auto-txt-30-2"
                        >
                          Concept of Physics Hc Verma Part 2
                        </h4>
                        <span
                          class="block font-bold  text-xl text-green-500 mb-8"
                          data-config-id="auto-txt-31-2"
                        >
                          $ 2.00
                        </span>

                        <ul class="font-bold md:w-[87%] w-full list-disc list-inside text-black mb-4">
                          <li data-config-id="auto-txt-32-2">
                            Is in Good condition
                          </li>
                          <li data-config-id="auto-txt-33-2">
                            {" "}
                            For class 12 , JEE , NEET aspirants
                          </li>
                          <li data-config-id="auto-txt-34-2">
                            Deliver within 12 hours
                          </li>
                        </ul>
                        <div class="flex flex-nowrap sm:flex-nowrap items-center -mx-2 -mb-4">
                          <div class="w-full sm:w-auto px-2 mb-4">
                            <a
                              class="group relative inline-block h-12 w-full sm:w-52 -mb-2 bg-black rounded-md"
                              href="https://shuffle.dev/#"
                            >
                              <div class="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                                <div
                                  class={`flex h-full w-full items-center justify-center ${styles.greenBg} border-2 border-black rounded-md`}
                                >
                                  <span
                                    class="text-base font-black text-black"
                                    data-config-id="auto-txt-35-2"
                                  >
                                    Add to Bag
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-20 text-center">
                <ShowMoreButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
