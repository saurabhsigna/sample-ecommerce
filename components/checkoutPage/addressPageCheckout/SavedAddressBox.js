"use client";
import styles from "@styles/components/checkout/AddressPage.module.css";

import { useState, useCallback } from "react";
export default function App({ addresses, setAddressId, loading }) {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleSelectAddress = useCallback(
    (index, id) => {
      setSelectedAddress(index);
      setAddressId(id);
    },
    [setAddressId, setSelectedAddress]
  );

  return (
    <div className={``}>
      <h2 className={`text-2xl 2xl:text-3xl font-bold mb-2 ${styles.satoshi}`}>
        Saved Addresses {addresses && addresses.length} :
      </h2>
      <p className="mb-4">
        {" "}
        <span className="text-xl ">࿋ </span>Click The final address
      </p>
      {loading && <h2>Loading...</h2>}
      {addresses &&
        addresses.map((address, index) => (
          <div
            key={index}
            onClick={() => handleSelectAddress(index, address.id)}
            className={`rounded-md border-2 cursor-pointer transition duration-300  my-5 relative border-black p-3 lg:p-5 flex flex-col items-start lg:w-[65%] ${
              styles.shadowBlack
            } ${selectedAddress === index ? styles.greenBg : "bg-white"}`}
          >
            <div
              className={`absolute top-[15px] right-[20px] border-2 border-black bg-white rounded-full md:w-[30px] md:h-[30px] w-[25px] h-[25px]`}
            ></div>
            <h2
              className={`${styles.satoshi} font-semibold text-xl lg:text-[1.63rem]`}
            >
              {address.fullName}
            </h2>
            <h2
              className={`${styles.satoshi} font-[500] ml-[5px]  lg:text-xl  my-2`}
            >
              {address.phoneNumber}
            </h2>
            <p className={`${styles.satoshi} mb-2 lg:text-xl`}>
              {address.address}
            </p>
            <div className="flex  w-full justify-between items-center">
              <h2
                className={`${styles.satoshi}  lg:text-xl text-md font-[500] `}
              >
                locality: {address.locality}
              </h2>
              <h2
                className={`${styles.satoshi} lg:text-xl text-md font-[500] `}
              >
                {address.pinCode}
              </h2>
            </div>
          </div>
        ))}
    </div>
  );
}
