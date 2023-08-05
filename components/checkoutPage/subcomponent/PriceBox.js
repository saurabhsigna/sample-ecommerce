// import styles from "@styles/components/checkout/AddressPage.module.css";
// export default function App() {
//   return (
//     <div className="w-full lg:w-1/3 px-4">
//       <div
//         className={`${styles.greenBg} border-2 border-black rounded-md ${styles.shadowBlack} `}
//       >
//         <div className="pt-8 pb-6 px-6 border-b-2 border-black">
//           <h4 className={`font-bold mb-3 ${styles.satoshi}`}>ORDER SUMMARY</h4>

//           <div className="border-2 border-black bg-white rounded-md">
//             <div className="relative flex px-5 pt-5 pb-6 items-center justify-between">
//               <span className={`text-sm font-bold ${styles.satoshi}`}>
//                 Order Subtotal
//               </span>
//               <span className="text-sm font-black">$390.00</span>
//               <div className="absolute bottom-0 left-0 py-px bg-black w-11/12"></div>
//             </div>
//             <div className="relative flex px-5 pt-5 pb-6 items-center justify-between">
//               <span className={`${styles.satoshi} text-sm font-bold`}>
//                 Shipping and handling
//               </span>
//               <span className="text-sm font-black">$10.00</span>
//               <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 py-px bg-black w-10/12"></div>
//             </div>
//             <div className="relative flex px-5 pt-5 pb-6 items-center justify-between">
//               <span className={`text-sm font-bold ${styles.satoshi}`}>Tax</span>
//               <span className="text-sm font-black">$0.00</span>
//               <div className="absolute bottom-0 left-0 py-px bg-black w-full"></div>
//             </div>
//             <div className="flex px-5 py-5 items-center justify-between">
//               <span className="text-lg font-bold">Total</span>
//               <span className="text-lg font-black text-green-600">$400.00</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import styles from "@styles/components/checkout/AddressPage.module.css";
import { userInfoAtom } from "@atoms/UserInfoAtom";
import { useRecoilValue } from "recoil";
import { useEffect, useMemo, useState } from "react";
export default function App({ products }) {
  const [productPrice, setProductPrice] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(0);
  const [netPrice, setNetPrice] = useState(0);
  const [taxPrice, setTaxPrice] = useState(0);
  const userInfo = useRecoilValue(userInfoAtom);
  const [isUserVerified, setIsUserVerified] = useState("Loading");
  const [totalQuantity, setTotalQuantity] = useState(0);
  const shippingLimitPrice = 249;

  useEffect(() => {
    const ProductNet = products.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
    const shippingChargeNet = products.reduce(
      (total, item) => total + 15 * item.quantity,
      0
    );

    const totalProductQnty = products.reduce(
      (total, item) => total + item.quantity,
      0
    );

    setShippingCharge(shippingChargeNet);
    setTotalQuantity(totalProductQnty);
    setProductPrice(ProductNet);
  }, [products]);

  useEffect(() => {
    if (totalQuantity >= 3) {
      let shippedCharge = shippingCharge - 25;
      if (shippedCharge <= 0) {
        shippedCharge = 0;
      }
      console.log(shippedCharge, totalQuantity);
      setShippingCharge(shippedCharge);
    }

    if (productPrice > shippingLimitPrice) {
      setShippingCharge(0);
      console.log("shipped up above anti");
    }
  }, [productPrice, totalQuantity]);

  useEffect(() => {
    setNetPrice(productPrice + shippingCharge);
  }, [productPrice, shippingCharge]);

  useEffect(() => {
    if (userInfo) {
      setIsUserVerified(true);
    } else {
      setIsUserVerified(false);
    }
  }, [userInfo]);

  return (
    <div className="w-[98%] largeMobile:w-[90%] md:w-[76%] lg:w-1/3 px-4">
      <div
        className={`pt-8 pb-6 px-6 ${styles.greenBg} border-2 border-black rounded-md ${styles.shadowBlack} `}
      >
        <h4 className={`font-bold mb-3 ${styles.satoshi}`}>Cart totals</h4>

        <div className="mb-6 border-2 border-black bg-white rounded-md">
          <div className="relative flex px-5 pt-5 pb-6 items-center justify-between">
            <span className={`text-sm font-bold ${styles.satoshi}`}>
              Order Subtotal
            </span>
            <span className={`text-sm font-black ${styles.satoshi}`}>
              ₹ {productPrice}
            </span>
            <div className="absolute bottom-0 left-0 py-px bg-black w-11/12"></div>
          </div>
          <div className="relative flex px-5 pt-5 pb-6 items-center justify-between">
            <span className={`text-sm font-bold ${styles.satoshi}`}>
              Shipping and handling
            </span>
            <span className={`text-sm font-black ${styles.satoshi}`}>
              {shippingCharge == 0 ? (
                <span className={`${styles.textGreen}`}>FREE</span>
              ) : (
                " ₹ " + shippingCharge
              )}
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 py-px bg-black w-10/12"></div>
          </div>
          <div className="relative flex px-5 pt-5 pb-6 items-center justify-between">
            <span className={`text-sm font-bold ${styles.satoshi}`}>Tax</span>
            <span className={`text-sm font-black ${styles.satoshi}`}>
              ₹ 0.00
            </span>
            <div className="absolute bottom-0 left-0 py-px bg-black w-full"></div>
          </div>
          <div className="flex px-5 py-5 items-center justify-between">
            <span className={`text-lg font-bold  ${styles.satoshi}`}>
              Total
            </span>
            <span
              className={`text-lg font-black ${styles.satoshi}  ${styles.textGreen}`}
            >
              ₹ {netPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
