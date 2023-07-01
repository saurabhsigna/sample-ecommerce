import styles from "@styles/cart/cart.module.css";
export default function App() {
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
            <span className="text-sm font-black">$390.00</span>
            <div className="absolute bottom-0 left-0 py-px bg-black w-11/12"></div>
          </div>
          <div className="relative flex px-5 pt-5 pb-6 items-center justify-between">
            <span className="text-sm font-bold">Shipping and handling</span>
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
  );
}
