"use client";

import styles from "@styles/cart/cart.module.css";
import RemoveButton from "@components/cart/subcomponent/RemoveButton";
import QntyBtn from "@components/cart/subcomponent/QuantityBtn";
export default function App({
  product,
  quantity,
  onRemove,
  addQuantity,
  lessQuantity,
}) {
  return (
    <div name="productDiv" className="mb-6">
      <div className="w-full overflow-hidden relative border-b-2 border-black">
        <div className="flex gap-3 items-start">
          <div className="flex flex-col gap-1 md:gap-3 items-center max-w-[130px]">
            <div
              name="ImgDiv"
              className={` max-w-[72px] flex items-center justify-center max-h-[72px] md:max-h-[112px] md:h-[112px] h-[72px] md:max-w-[112px] `}
            >
              <img
                src={product?.imgUri}
                className={` max-h-full h-full w-full object-cover  max-w-full rounded-md`}
              />
            </div>
            <QntyBtn
              quantity={quantity}
              addQnty={addQuantity}
              lessQnty={lessQuantity}
              productId={product?.id}
            />
          </div>
          <div name="productInfo" className="">
            <div className={`flex gap-4`}>
              <h2
                className={` lg:text-xl whitespace-nowrap  md:whitespace-normal max-w-full `}
              >
                {" "}
                {product?.name}
              </h2>
              <span
                className={`font text-sm  absolute right-[28px] flex items-center ${styles.hideInSmallDeviceShowInTablet}`}
              >
                Delivery at <b>18 Jul ,at 15 rs</b>
              </span>
            </div>
            <p className="font-light text-sm "> {product?.label}</p>
            <h2
              className={`text-xl lg:text-2xl font-semibold mt-[5px] ml-[10px]`}
            >
              ₹ {product?.price} {quantity > 1 ? " x " + quantity : null}
            </h2>
            <p
              className={`${styles.showInSmallDeviceHideInTablet} font-light text-sm italic`}
            >
              Delivery By 18 Jul , 15 rs
            </p>
            <div
              className={`${styles.hideInSmallDeviceShowInTablet}  my-[25px] absolute right-[28px]  `}
            >
              <RemoveButton
                productId={product?.id}
                onRemove={onRemove}
                showShadow={true}
              />
              {/* <button
                className={` py-2 px-4  font-bold border-2 border-gray-900 rounded-md ${styles.shadowBlack} text-gray-900 ${styles.greenBg}`}
                data-config-id="auto-txt-26-1"
              >
                Remove
              </button> */}
              <button
                className={` text-white py-2 px-4 ml-[25px] font-bold border-2 border-gray-900 rounded-md ${styles.shadowBlack} text-gray-900 bg-orange-500`}
                data-config-id="auto-txt-26-1"
              >
                Buy this now
              </button>
            </div>
          </div>
        </div>
        <div className={`${styles.showInSmallDeviceHideInTablet} `}>
          <div className={`flex items-center justify-end mt-4`}>
            {/* <button
              className={` ml-[20px] py-2 px-4 mb-4 font-bold border-2 border-gray-900 rounded-md text-gray-900 ${styles.greenBg}`}
              data-config-id="auto-txt-26-1"
            >
              Remove
            </button> */}
            <RemoveButton
              productId={product?.id}
              onRemove={onRemove}
              // showShadow={true}
            />

            <button
              className={`mr-[20px] text-white py-2 px-4 mb-4 font-bold border-2 border-gray-900 rounded-md text-gray-900 bg-orange-500`}
              data-config-id="auto-txt-26-1"
            >
              Buy this now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
