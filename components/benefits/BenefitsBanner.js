

const BenefitsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-xs md:max-w-xl xl:max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-2 -mb-12">
            <div className="w-full md:w-1/2 xl:w-auto px-2 mb-12">
              <div className="flex items-center">
                <span className="inline-flex w-12 h-12 items-center justify-center rounded-full greenBg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5 15.5C21.78 15.5 22 15.72 22 16V17C22 18.66 20.66 20 19 20C19 18.35 17.65 17 16 17C14.35 17 13 18.35 13 20H11C11 18.35 9.65 17 8 17C6.35 17 5 18.35 5 20C3.34 20 2 18.66 2 17V15C2 14.45 2.45 14 3 14H12.5C13.88 14 15 12.88 15 11.5V6C15 5.45 15.45 5 16 5H16.84C17.56 5 18.22 5.39 18.58 6.01L19.22 7.13C19.31 7.29 19.19 7.5 19 7.5C17.62 7.5 16.5 8.62 16.5 10V13C16.5 14.38 17.62 15.5 19 15.5H21.5Z"
                      fill="#474BC5"
                    ></path>
                    <path
                      d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                      fill="#474BC5"
                    ></path>
                    <path
                      d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                      fill="#474BC5"
                    ></path>
                    <path
                      d="M22 12.53V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L21.74 11.54C21.91 11.84 22 12.18 22 12.53Z"
                      fill="#474BC5"
                    ></path>
                    <path
                      d="M13.08 2H5.69C3.65 2 2 3.65 2 5.69V12.07C2 12.62 2.45 13.07 3 13.07H12.15C13.17 13.07 14 12.24 14 11.22V2.92C14 2.41 13.59 2 13.08 2ZM10.07 7.07L7.98 9.09C7.83 9.23 7.64 9.3 7.46 9.3C7.27 9.3 7.08 9.23 6.94 9.09L5.93 8.13C5.63 7.84 5.62 7.36 5.91 7.06C6.19 6.76 6.67 6.76 6.97 7.04L7.46 7.51L9.03 5.99C9.33 5.7 9.8 5.71 10.09 6.01C10.38 6.31 10.37 6.78 10.07 7.07Z"
                      fill="#474BC5"
                    ></path>
                  </svg>
                </span>
                <div className="ml-4">
                  <h4 className="text-xl font-black mb-1">Free Shipping</h4>
                  <span className="text-lg font-bold">From $45</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-auto px-2 mb-12">
              <div className="flex items-center">
                <span className="inline-flex w-12 h-12 items-center justify-center rounded-full greenBg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.75 8V10.1C18.31 10.04 17.81 10.01 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.19 10.01 5.69 10.04 5.25 10.1V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8Z"
                      fill="#474BC5"
                    ></path>
                    <path
                      d="M18.75 10.1C18.31 10.04 17.81 10.01 17.25 10H6.75C6.19 10.01 5.69 10.04 5.25 10.1C2.7 10.41 2 11.66 2 15V17C2 21 3 22 7 22H17C21 22 22 21 22 17V15C22 11.66 21.3 10.41 18.75 10.1ZM8.71 16.71C8.52 16.89 8.26 17 8 17C7.87 17 7.74 16.97 7.62 16.92C7.49 16.87 7.39 16.8 7.29 16.71C7.11 16.52 7 16.26 7 16C7 15.87 7.03 15.74 7.08 15.62C7.13 15.5 7.2 15.39 7.29 15.29C7.39 15.2 7.49 15.13 7.62 15.08C7.99 14.92 8.43 15.01 8.71 15.29C8.8 15.39 8.87 15.5 8.92 15.62C8.97 15.74 9 15.87 9 16C9 16.26 8.89 16.52 8.71 16.71ZM12.92 16.38C12.87 16.5 12.8 16.61 12.71 16.71C12.52 16.89 12.26 17 12 17C11.73 17 11.48 16.89 11.29 16.71C11.2 16.61 11.13 16.5 11.08 16.38C11.03 16.26 11 16.13 11 16C11 15.73 11.11 15.48 11.29 15.29C11.66 14.92 12.33 14.92 12.71 15.29C12.89 15.48 13 15.73 13 16C13 16.13 12.97 16.26 12.92 16.38ZM16.71 16.71C16.52 16.89 16.26 17 16 17C15.74 17 15.48 16.89 15.29 16.71C15.11 16.52 15 16.27 15 16C15 15.73 15.11 15.48 15.29 15.29C15.67 14.92 16.34 14.92 16.71 15.29C16.75 15.34 16.79 15.39 16.83 15.45C16.87 15.5 16.9 15.56 16.92 15.62C16.95 15.68 16.97 15.74 16.98 15.8C16.99 15.87 17 15.94 17 16C17 16.26 16.89 16.52 16.71 16.71Z"
                      fill="#474BC5"
                    ></path>
                  </svg>
                </span>
                <div className="ml-4">
                  <h4 className="text-xl font-black mb-1">Secure Shopping</h4>
                  <span className="text-lg font-bold">100% Guarantee</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-auto px-2 mb-12">
              <div className="flex items-center">
                <span className="inline-flex w-12 h-12 items-center justify-center rounded-full greenBg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.38989 18.49V8.32998C8.38989 7.92998 8.50989 7.53998 8.72989 7.20998L11.4599 3.14998C11.8899 2.49998 12.9599 2.03998 13.8699 2.37998C14.8499 2.70998 15.4999 3.80997 15.2899 4.78997L14.7699 8.05998C14.7299 8.35998 14.8099 8.62998 14.9799 8.83998C15.1499 9.02998 15.3999 9.14997 15.6699 9.14997H19.7799C20.5699 9.14997 21.2499 9.46997 21.6499 10.03C22.0299 10.57 22.0999 11.27 21.8499 11.98L19.3899 19.47C19.0799 20.71 17.7299 21.72 16.3899 21.72H12.4899C11.8199 21.72 10.8799 21.49 10.4499 21.06L9.16989 20.07C8.67989 19.7 8.38989 19.11 8.38989 18.49Z"
                      fill="#474BC5"
                    ></path>
                    <path
                      d="M5.21 6.37988H4.18C2.63 6.37988 2 6.97988 2 8.45988V18.5199C2 19.9999 2.63 20.5999 4.18 20.5999H5.21C6.76 20.5999 7.39 19.9999 7.39 18.5199V8.45988C7.39 6.97988 6.76 6.37988 5.21 6.37988Z"
                      fill="#474BC5"
                    ></path>
                  </svg>
                </span>
                <div className="ml-4">
                  <h4 className="text-xl font-black mb-1">Customer Satisfaction</h4>
                  <span className="text-lg font-bold">100% Positive Feedbacks</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-auto px-2 mb-12">
              <div className="flex items-center">
                <span className="inline-flex w-12 h-12 items-center justify-center rounded-full greenBg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6.75C21.5188 6.75 22.75 5.51878 22.75 4C22.75 2.48122 21.5188 1.25 20 1.25C18.4812 1.25 17.25 2.48122 17.25 4C17.25 5.51878 18.4812 6.75 20 6.75Z"
                      fill="#474BC5"
                    ></path>
                    <path
                      d="M19.04 8.15C17.47 7.81 16.19 6.53 15.85 4.96C15.72 4.35 15.71 3.76 15.82 3.2C15.95 2.58 15.49 2 14.85 2H7C4.24 2 2 4.24 2 7V13.95C2 16.71 4.24 18.95 7 18.95H8.5C8.78 18.95 9.14 19.13 9.3 19.35L10.8 21.34C11.46 22.22 12.54 22.22 13.2 21.34L14.7 19.35C14.89 19.1 15.18 18.95 15.5 18.95H17.01C19.77 18.95 22 16.72 22 13.96V9.15C22 8.52 21.42 8.06 20.8 8.18C20.24 8.28 19.65 8.28 19.04 8.15ZM8 12C7.44 12 7 11.55 7 11C7 10.45 7.44 10 8 10C8.55 10 9 10.45 9 11C9 11.55 8.56 12 8 12ZM12 12C11.44 12 11 11.55 11 11C11 10.45 11.44 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.56 12 12 12ZM16 12C15.44 12 15 11.55 15 11C15 10.45 15.44 10 16 10C16.55 10 17 10.45 17 11C17 11.55 16.56 12 16 12Z"
                      fill="#474BC5"
                    ></path>
                  </svg>
                </span>
                <div className="ml-4">
                  <h4 className="text-xl font-black mb-1">Support</h4>
                  <span className="text-lg font-bold">Online Support 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
