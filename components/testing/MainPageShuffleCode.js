export default function App() {
  return (
    <section className="relative pb-32 overflow-hidden">
      <nav className="relative z-10">
        <div className="flex h-20 py-6 px-6 items-center justify-between bg-transparent relative">
          <a className="inline-block text-2xl font-bold mr-10" href="#">
            <img
              src="https://shuffle.dev/shopal-assets/logos/shopal-logo.svg"
              alt=""
            />
          </a>
          <ul className="hidden lg:flex items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <li className="mr-6">
              <button className="relative group inline-flex items-center text-left text-base font-bold text-black hover:text-indigo-500">
                <span className="mr-2">Category</span>
                <svg
                  width="8"
                  height="6"
                  viewbox="0 0 8 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.99999 5.08071C3.91243 5.08081 3.82572 5.06361 3.74483 5.03009C3.66394 4.99657 3.59048 4.94739 3.52866 4.88538L0.700184 2.05728C0.575173 1.93227 0.504943 1.76272 0.504944 1.58593C0.504944 1.40913 0.575175 1.23958 0.700187 1.11457C0.825199 0.989561 0.99475 0.919331 1.17154 0.919331C1.34834 0.919332 1.51789 0.989563 1.6429 1.11457L3.99999 3.47132L6.35708 1.11455C6.48209 0.989543 6.65165 0.919312 6.82844 0.919312C7.00523 0.919311 7.17478 0.989541 7.29979 1.11455C7.42481 1.23956 7.49504 1.40911 7.49504 1.58591C7.49504 1.7627 7.42481 1.93225 7.2998 2.05726L4.47132 4.8854C4.4095 4.9474 4.33604 4.99658 4.25515 5.0301C4.17426 5.06361 4.08755 5.08082 3.99999 5.08071V5.08071Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="hidden group-hover:block absolute z-50 bottom-0 left-0 transform translate-y-full w-56 pt-6">
                  <div className="p-2 bg-white border-2 border-black rounded-md shadow">
                    <a
                      className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                      href="#"
                    >
                      Category 1
                    </a>
                    <a
                      className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                      href="#"
                    >
                      Category 1
                    </a>
                    <a
                      className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                      href="#"
                    >
                      Category 1
                    </a>
                  </div>
                </div>
              </button>
            </li>
            <li className="mr-6">
              <button className="relative group inline-flex items-center text-left text-base font-bold text-black hover:text-indigo-500">
                <span className="mr-2">Collection</span>
                <svg
                  width="8"
                  height="6"
                  viewbox="0 0 8 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.99999 5.08071C3.91243 5.08081 3.82572 5.06361 3.74483 5.03009C3.66394 4.99657 3.59048 4.94739 3.52866 4.88538L0.700184 2.05728C0.575173 1.93227 0.504943 1.76272 0.504944 1.58593C0.504944 1.40913 0.575175 1.23958 0.700187 1.11457C0.825199 0.989561 0.99475 0.919331 1.17154 0.919331C1.34834 0.919332 1.51789 0.989563 1.6429 1.11457L3.99999 3.47132L6.35708 1.11455C6.48209 0.989543 6.65165 0.919312 6.82844 0.919312C7.00523 0.919311 7.17478 0.989541 7.29979 1.11455C7.42481 1.23956 7.49504 1.40911 7.49504 1.58591C7.49504 1.7627 7.42481 1.93225 7.2998 2.05726L4.47132 4.8854C4.4095 4.9474 4.33604 4.99658 4.25515 5.0301C4.17426 5.06361 4.08755 5.08082 3.99999 5.08071V5.08071Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="hidden group-hover:block absolute z-50 bottom-0 left-0 transform translate-y-full w-56 pt-6">
                  <div className="p-2 bg-white border-2 border-black rounded-md shadow">
                    <a
                      className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                      href="#"
                    >
                      Category 1
                    </a>
                    <a
                      className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                      href="#"
                    >
                      Category 1
                    </a>
                    <a
                      className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                      href="#"
                    >
                      Category 1
                    </a>
                  </div>
                </div>
              </button>
            </li>
            <li className="mr-6">
              <a
                className="inline-block font-bold text-gray-900 hover:text-indigo-500"
                href="#"
              >
                Story
              </a>
            </li>
            <li>
              <a
                className="inline-block font-bold text-gray-900 hover:text-indigo-500"
                href="#"
              >
                Brand
              </a>
            </li>
          </ul>
          <div className="inline-flex items-center">
            <div className="hidden lg:flex">
              <a
                className="inline-block mr-6 text-green-500 hover:text-orange-500 transition duration-200"
                href="#"
              >
                <svg
                  width="20"
                  height="24"
                  viewbox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.44 0.100006C12.63 0.100006 11.01 0.980006 10 2.33001C8.99 0.980006 7.37 0.100006 5.56 0.100006C2.49 0.100006 0 2.60001 0 5.69001C0 6.88001 0.19 7.98001 0.52 9.00001C2.1 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 9.00001C19.81 7.98001 20 6.88001 20 5.69001C20 2.60001 17.51 0.100006 14.44 0.100006Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                className="inline-block mr-6 text-green-500 hover:text-orange-500 transition duration-200"
                href="#"
              >
                <svg
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
              </a>
              <a
                className="inline-block mr-6 text-green-500 hover:text-orange-500 transition duration-200"
                href="#"
              >
                <svg
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.01 20.02C15.9861 20.02 20.02 15.9861 20.02 11.01C20.02 6.03391 15.9861 2 11.01 2C6.03391 2 2 6.03391 2 11.01C2 15.9861 6.03391 20.02 11.01 20.02Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M21.9901 18.95C21.6601 18.34 20.9601 18 20.0201 18C19.3101 18 18.7001 18.29 18.3401 18.79C17.9801 19.29 17.9001 19.96 18.1201 20.63C18.5501 21.93 19.3001 22.22 19.7101 22.27C19.7701 22.28 19.8301 22.28 19.9001 22.28C20.3401 22.28 21.0201 22.09 21.6801 21.1C22.2101 20.33 22.3101 19.56 21.9901 18.95Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                className="inline-block mr-6 text-green-500 hover:text-orange-500 transition duration-200"
                href="#"
              >
                <svg
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M11.9999 14.5C6.98991 14.5 2.90991 17.86 2.90991 22C2.90991 22.28 3.12991 22.5 3.40991 22.5H20.5899C20.8699 22.5 21.0899 22.28 21.0899 22C21.0899 17.86 17.0099 14.5 11.9999 14.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
            <button className="navbar-burger flex p-1 items-center lg:text-green-500 hover:text-orange-500">
              <svg
                width="24"
                height="24"
                viewbox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
      <div className="hidden lg:block absolute bottom-0 left-0 max-w-2xs lg:max-w-sm">
        <img
          className="relative img-fluid w-64 xl:w-96 2xl:w-112"
          src="https://shuffle.dev/shopal-assets/background/purple-bg-shape2.png"
          alt=""
        />
        <img
          className="absolute top-0 left-0 w-64 2xl:w-80 -mt-16 ml-6 img-fluid"
          src="https://shuffle.dev/shopal-assets/images/placeholder-photo1.png"
          alt=""
        />
      </div>
      <div className="hidden lg:block max-w-2xs lg:max-w-md absolute top-0 right-0">
        <img
          className="relative img-fluid w-72 xl:w-96 2xl:w-112"
          src="https://shuffle.dev/shopal-assets/background/purple-bg-shape.png"
          alt=""
        />
        <img
          className="absolute bottom-0 right-0 w-64 2xl:w-88 mr-6 -mb-24 img-fluid"
          src="https://shuffle.dev/shopal-assets/images/placeholder-photo2.png"
          alt=""
        />
      </div>
      <div className="container px-4 pt-20 lg:pt-40 mx-auto relative">
        <div className="max-w-md xl:max-w-lg 2xl:max-w-xl mx-auto text-center">
          <h1 className="font-heading text-3xl xs:text-4xl 2xl:text-5xl font-black mb-6">
            Take care of your performance every day.
          </h1>
          <p className="max-w-md mx-auto text-lg font-bold mb-12">
            Build a well-presented brand that everyone will love. Take care to
            develop resources continually and integrity them with previous
            projects.
          </p>
          <div className="sm:flex mb-24 items-center justify-center">
            <a
              className="group relative inline-block h-12 w-full sm:w-48 mb-2 sm:mb-0 sm:mr-6 bg-blueGray-900 rounded-md"
              href="#"
            >
              <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                <div className="flex h-full w-full items-center justify-center bg-green-600 border-2 border-black rounded-md">
                  <span className="text-base font-black text-black">
                    Check our Catalog
                  </span>
                </div>
              </div>
            </a>
            <a
              className="group relative inline-block h-12 w-full sm:w-36 bg-blueGray-900 rounded-md"
              href="#"
            >
              <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                <div className="flex h-full w-full items-center justify-center bg-orange-500 border-2 border-black rounded-md">
                  <span className="text-base font-black text-white">
                    Start Buying
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="flex items-center justify-center">
            <button className="inline-block mr-3 w-2 h-2 border-2 border-black rounded-full bg-green-500"></button>
            <button className="inline-block mr-3 w-2 h-2 border-2 border-black rounded-full hover:bg-green-500"></button>
            <button className="inline-block mr-3 w-2 h-2 border-2 border-black rounded-full hover:bg-green-500"></button>
            <button className="inline-block mr-3 w-2 h-2 border-2 border-black rounded-full hover:bg-green-500"></button>
            <button className="inline-block mr-3 w-2 h-2 border-2 border-black rounded-full hover:bg-green-500"></button>
            <button className="inline-block mr-3 w-2 h-2 border-2 border-black rounded-full hover:bg-green-500"></button>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex flex-wrap justify-between mt-32">
        <div className="w-full md:w-1/2 lg:w-1/3 mb-8 sm:mb-0">
          <div className="relative max-w-xs">
            <img
              className="relative img-fluid w-full"
              src="https://shuffle.dev/shopal-assets/background/purple-bg-shape2.png"
              alt=""
            />
            <img
              className="absolute top-0 left-0 -mt-16 px-4 md:ml-6 img-fluid"
              src="https://shuffle.dev/shopal-assets/images/placeholder-photo1.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="relative max-w-xs ml-auto">
            <img
              className="relative img-fluid w-full"
              src="https://shuffle.dev/shopal-assets/background/purple-bg-shape.png"
              alt=""
            />
            <img
              className="absolute bottom-0 right-0 px-4 md:mr-6 -mb-24 img-fluid"
              src="https://shuffle.dev/shopal-assets/images/placeholder-photo2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div className="navbar-backdrop fixed inset-0 backdrop-blur-xl backdrop-filter bg-gray-900 bg-opacity-80"></div>
        <nav className="relative pt-7 pb-8 bg-white h-full overflow-y-auto">
          <div className="flex flex-col px-6 h-full">
            <a className="inline-block ml-4 mb-7" href="#">
              <img
                src="https://shuffle.dev/shopal-assets/logos/shopal-logo.svg"
                alt=""
              />
            </a>
            <ul className="w-full mb-auto pb-16">
              <li className="mb-6">
                <button className="relative group inline-flex flex-wrap items-center text-left text-base font-bold text-black">
                  <span className="mr-2">Category</span>
                  <svg
                    width="8"
                    height="6"
                    viewbox="0 0 8 6"
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
                      href="#"
                    >
                      Category 1
                    </a>
                    <a
                      className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                      href="#"
                    >
                      Category 1
                    </a>
                    <a
                      className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                      href="#"
                    >
                      Category 1
                    </a>
                  </div>
                </button>
              </li>
              <li className="mb-6">
                <button className="relative group inline-flex flex-wrap items-center text-left text-base font-bold text-black">
                  <span className="mr-2">Pages</span>
                  <svg
                    width="8"
                    height="6"
                    viewbox="0 0 8 6"
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
                      href="#"
                    >
                      Category 1
                    </a>
                    <a
                      className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                      href="#"
                    >
                      Category 1
                    </a>
                    <a
                      className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                      href="#"
                    >
                      Category 1
                    </a>
                  </div>
                </button>
              </li>
              <li className="mb-6">
                <button className="relative group inline-flex flex-wrap items-center text-left text-base font-bold text-black">
                  <span className="mr-2">Products</span>
                  <svg
                    width="8"
                    height="6"
                    viewbox="0 0 8 6"
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
                      href="#"
                    >
                      Category 1
                    </a>
                    <a
                      className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                      href="#"
                    >
                      Category 1
                    </a>
                    <a
                      className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                      href="#"
                    >
                      Category 1
                    </a>
                  </div>
                </button>
              </li>
              <li className="mb-6">
                <a className="inline-block pl-1 font-bold" href="#">
                  Blog
                </a>
              </li>
              <li className="mb-6">
                <a className="inline-block pl-1 font-bold" href="#">
                  Shop
                </a>
              </li>
              <li>
                <a className="inline-block pl-1 font-bold" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="w-full">
              <button className="block w-full py-4 px-4 mb-4 font-bold border-2 border-gray-900 rounded-md shadow">
                Log in
              </button>
              <button className="block w-full py-4 px-4 mb-8 font-bold border-2 border-gray-900 rounded-md shadow text-gray-900 bg-green-500">
                Sign up
              </button>
              <p className="pl-2 text-sm">2022 &copy; Shuffle</p>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
