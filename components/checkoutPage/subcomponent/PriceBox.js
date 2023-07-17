import styles from "@styles/components/checkout/AddressPage.module.css";
export default function App() {
  return (
    <div className="w-full lg:w-1/3 px-4">
      <div
        className={`${styles.greenBg} border-2 border-black rounded-md ${styles.shadowBlack} `}
      >
        <div className="pt-8 pb-6 px-6 border-b-2 border-black">
          <h4 className={`font-bold mb-3 ${styles.satoshi}`}>ORDER SUMMARY</h4>

          <div className="border-2 border-black bg-white rounded-md">
            <div className="relative flex px-5 pt-5 pb-6 items-center justify-between">
              <span className={`text-sm font-bold ${styles.satoshi}`}>
                Order Subtotal
              </span>
              <span className="text-sm font-black">$390.00</span>
              <div className="absolute bottom-0 left-0 py-px bg-black w-11/12"></div>
            </div>
            <div className="relative flex px-5 pt-5 pb-6 items-center justify-between">
              <span className={`${styles.satoshi} text-sm font-bold`}>
                Shipping and handling
              </span>
              <span className="text-sm font-black">$10.00</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 py-px bg-black w-10/12"></div>
            </div>
            <div className="relative flex px-5 pt-5 pb-6 items-center justify-between">
              <span className={`text-sm font-bold ${styles.satoshi}`}>Tax</span>
              <span className="text-sm font-black">$0.00</span>
              <div className="absolute bottom-0 left-0 py-px bg-black w-full"></div>
            </div>
            <div className="flex px-5 py-5 items-center justify-between">
              <span className="text-lg font-bold">Total</span>
              <span className="text-lg font-black text-green-600">$400.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
