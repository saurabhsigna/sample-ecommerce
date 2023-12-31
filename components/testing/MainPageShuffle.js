import Navbar from "@components/navbar/Navbar";
import ProfileDropDown from "@components/dropdown/navbar/Profile";
import styles from "@styles/components/navbar.module.css";
export default function App() {
  return (
    <>
    
      <section
        data-section-id="1"
        data-share=""
        data-category="headers"
        data-component-id="44d0b9e2_01_awz"
        class="relative pb-32 overflow-hidden"
      >
        <div class="hidden lg:block absolute bottom-0 pt-[-22rem] top-[256px]  left-0 max-w-2xs lg:max-w-sm">
          <img
            class="relative img-fluid w-64 xl:w-96 2xl:w-112"
            src="https://shuffle.dev/shopal-assets/background/purple-bg-shape2.png"
            alt=""
          />
          <img
            class="absolute top-0 left-0 w-64 2xl:w-80 -mt-16 ml-6 img-fluid"
            src="https://shuffle.dev/shopal-assets/images/placeholder-photo1.png"
            alt=""
          />
        </div>
        <div class="hidden lg:block max-w-2xs lg:max-w-md absolute top-0 mt-[4rem] right-0">
          <img
            class="relative img-fluid w-72 xl:w-96 2xl:w-112"
            src="https://shuffle.dev/shopal-assets/background/purple-bg-shape.png"
            alt=""
            data-config-id="auto-img-4-1"
          />
          <img
            class="absolute bottom-0 right-0 w-64 2xl:w-88 mr-6 -mb-24 img-fluid"
            src="https://shuffle.dev/shopal-assets/images/placeholder-photo2.png"
            alt=""
            data-config-id="auto-img-5-1"
          />
        </div>
        <div class="container px-4 pt-20 lg:pt-40 mx-auto relative pt-[13rem]">
          <div class="max-w-md xl:max-w-lg 2xl:max-w-xl mx-auto text-center">
            <h1
              class="font-heading text-3xl xs:text-4xl 2xl:text-5xl font-[600] mb-6"
              data-config-id="auto-txt-9-1"
            >
              Take care of your performance every day.
            </h1>
            <p
              class="max-w-md mx-auto text-lg font-semibold mb-12"
              data-config-id="auto-txt-10-1"
            >
              Build a well-presented brand that everyone will love. Take care to
              develop resources continually and integrity them with previous
              projects.
            </p>
            <div class="sm:flex mb-24 items-center justify-center">
              <a
                class="group relative inline-block h-12 w-full sm:w-48 mb-2 sm:mb-0 sm:mr-6 bg-black rounded-md"
                href="https://shuffle.dev/#"
              >
                <div class="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                  <div
                    className={`flex h-full w-full items-center justify-center ${styles.greenBg} border-2 border-black rounded-md`}
                  >
                    <span
                      class="text-base font-black text-black"
                      data-config-id="auto-txt-11-1"
                    >
                      Check our Catalog
                    </span>
                  </div>
                </div>
              </a>
              <a
                class="group relative inline-block h-12 w-full sm:w-36 bg-black rounded-md"
                href="https://shuffle.dev/#"
              >
                <div class="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                  <div class="flex h-full w-full items-center justify-center bg-orange-500 border-2 border-black rounded-md">
                    <span
                      class="text-base font-black text-white"
                      data-config-id="auto-txt-12-1"
                    >
                      Start Buying
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div class="flex items-center justify-center">
              <button class="inline-block mr-3 w-2 h-2 border-2 border-black rounded-full bg-green-500"></button>
              <button class="inline-block mr-3 w-2 h-2 border-2 border-black rounded-full hover:bg-green-500"></button>
              <button class="inline-block mr-3 w-2 h-2 border-2 border-black rounded-full hover:bg-green-500"></button>
              <button class="inline-block mr-3 w-2 h-2 border-2 border-black rounded-full hover:bg-green-500"></button>
              <button class="inline-block mr-3 w-2 h-2 border-2 border-black rounded-full hover:bg-green-500"></button>
              <button class="inline-block mr-3 w-2 h-2 border-2 border-black rounded-full hover:bg-green-500"></button>
            </div>
          </div>
        </div>
        <div class="lg:hidden flex flex-wrap justify-between mt-32">
          <div class="w-full md:w-1/2 lg:w-1/3 mb-8 sm:mb-0">
            <div class="relative max-w-xs">
              <img
                class="relative img-fluid w-full"
                src="https://shuffle.dev/shopal-assets/background/purple-bg-shape2.png"
                alt=""
                data-config-id="auto-img-6-1"
              />
              <img
                class="absolute top-0 left-0 -mt-16 px-4 md:ml-6 img-fluid"
                src="https://shuffle.dev/shopal-assets/images/placeholder-photo1.png"
                alt=""
                data-config-id="auto-img-7-1"
              />
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3">
            <div class="relative max-w-xs ml-auto">
              <img
                class="relative img-fluid w-full"
                src="https://shuffle.dev/shopal-assets/background/purple-bg-shape.png"
                alt=""
                data-config-id="auto-img-8-1"
              />
              <img
                class="absolute bottom-0 right-0 px-4 md:mr-6 -mb-24 img-fluid"
                src="https://shuffle.dev/shopal-assets/images/placeholder-photo2.png"
                alt=""
                data-config-id="auto-img-9-1"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="h-[200vh]"></div>
    </>
  );
}
