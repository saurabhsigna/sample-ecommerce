import styles from "@styles/cart/cart.module.css";
export default function App() {
  return (
    <div name="PromoCode" className="max-w-sm">
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
              <span className="text-base font-black text-black">Apply</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
