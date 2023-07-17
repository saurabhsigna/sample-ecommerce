"use client";
import styles from "@styles/components/checkout/AddressPage.module.css";
import PriceBox from "@components/checkoutPage/subcomponent/PriceBox";
import { createAddress } from "@requests/createAddress";
import SavedAddress from "@components/checkoutPage/addressPageCheckout/SavedAddressBox";
import UseFetchAllAddress from "@hooks/UseFetchAllAddress";
import { useState, useCallback, useEffect, useMemo } from "react";
import ButtonSpinner from "@components/minicomponents/Spinners/InsideButtonSpinner";
export default function App({ setOk, setAddressId, addressId }) {
  const [disableBtn, setDisableBtn] = useState(false);
  const [btnText, setBtnText] = useState("Confirm Address");
  const [showAddressForm, setShowAddressForm] = useState(false);

  const [addressResponse, setAddressResponse] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const locality = "Derapur";
  const pinCode = "209301";

  const { loading, address, error } = UseFetchAllAddress();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setDisableBtn(true);
    setBtnText("Loading");
    try {
      const response = await createAddress({
        fullName,
        address: addressResponse,
        locality,
        pinCode,
        phoneNumber,
      });
      const addressIdResponse = response.message.id;
      setAddressId(addressIdResponse);

      setDisableBtn(false);
      setBtnText("Address Saved, Please dont refresh");
      setTimeout(() => {
        setOk(true);
      }, 1200);
    } catch (error) {
      const errorMessage = error.message || "An error occurred";
      console.log(errorMessage);
      alert(errorMessage);
      setDisableBtn(false);
      setErrorMsg(errorMessage);
      setBtnText("Try Again after some time or try logging again");
      // You can store the error message in state for displaying it in your UI
      // setError(errorMessage);
    }
  };

  const handleChangeFormFullName = useMemo(() => {
    return (value) => {
      setFullName(value);
    };
  }, [setFullName]);

  const handleFormShowing = useCallback(() => {
    setShowAddressForm(true);
  }, [setShowAddressForm]);

  const handleFormShowingClosed = useCallback(() => {
    setShowAddressForm(false);
  }, [setShowAddressForm]);
  const handleAddressOfSaved = useCallback(() => {
    setOk(true);
  }, [setOk]);
  return (
    <div className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl lg:max-w-6xl mx-auto">
          {/* <h3
            className={` ${styles.satoshi} text-center text-3xl font-bold mb-6`}
          >
            Billing address
          </h3>
          {errorMsg && (
            <h2
              className={`font-heading text-xl lg:text-3xl font-bold text-red-400 mb-6`}
            >
              Error: {errorMsg}
            </h2>
          )} */}
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-2/3 px-4 mb-12 lg:mb-0">
              {/* <h3
                className={` ${styles.satoshi} text-center text-3xl font-bold mb-6`}
              >
                Billing address
              </h3> */}
              {errorMsg && (
                <h2
                  className={`font-heading text-xl lg:text-3xl font-bold text-red-400 mb-6`}
                >
                  Error: {errorMsg}
                </h2>
              )}
              {showAddressForm && (
                <button onClick={handleFormShowingClosed}>
                  {"<- "} Select Saved Address
                </button>
              )}
              <h3
                className={` ${styles.satoshi} text-2xl 2xl:text-3xl font-bold mb-6`}
              >
                Add New Address :
              </h3>
              {!showAddressForm && (
                <button onClick={handleFormShowing}>
                  Click Here for new Address
                </button>
              )}
              {showAddressForm && (
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap -mx-4 mb-6">
                    <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                      <label
                        className={`${styles.satoshi} block text-sm font-bold mb-2`}
                        htmlFor="full-name"
                      >
                        full Name
                      </label>
                      <input
                        className={`w-full h-12 py-3 px-4 text-sm placeholder-black font-bold border-2 border-black rounded-md focus:outline-indigo ${styles.satoshi}`}
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) =>
                          handleChangeFormFullName(e.target.value)
                        }
                        id="full-name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                      <label
                        className={`block text-sm font-bold mb-2 ${styles.satoshi}`}
                        htmlFor="last-name"
                      >
                        Phone Number
                      </label>
                      {/* <input
                      className={`w-full h-12 py-3 px-4 text-sm placeholder-black font-bold border-2 border-black rounded-md focus:outline-indigo ${styles.satoshi}`}
                      type="text"
                      id="last-name"
                      placeholder="Lorem Ipsum dolor sit amet"
                    /> */}
                      <input
                        required
                        value={phoneNumber}
                        className={`w-full mb-4 py-3 px-6 h-12 text-sm font-bold placeholder-black border-2 border-black rounded-md focus:outline-indigo  ${styles.satoshi}`}
                        type="tel"
                        placeholder="Phone Number"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        maxLength="10"
                        minLength={10}
                        pattern="[0-9]{10}"
                        inputMode="numeric"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      className={`block text-sm font-bold mb-2 ${styles.satoshi}`}
                      htmlFor="address"
                    >
                      Address
                    </label>
                    <input
                      className={`w-full h-12 py-3 px-4 text-sm placeholder-black font-bold border-2 border-black rounded-md focus:outline-indigo ${styles.satoshi}`}
                      type="text"
                      id="address"
                      required
                      value={addressResponse}
                      onChange={(e) => setAddressResponse(e.target.value)}
                      placeholder="Enter Your Address"
                    />
                  </div>

                  <div className="flex flex-wrap -mx-4 mb-6">
                    <div className="w-full md:w-1/3 px-4">
                      <label
                        className={`block text-sm font-bold mb-2 ${styles.satoshi}`}
                        htmlFor="pin-code"
                      >
                        Pin Code
                      </label>
                      <input
                        className={`bg-[#efefef] w-full h-12 py-3 px-4 text-sm placeholder-black font-bold border-2 border-black rounded-md focus:outline-indigo ${styles.satoshi}`}
                        type="text"
                        disabled={true}
                        value={"209301"}
                        id="pin-code"
                      />
                    </div>
                    <div className="w-full md:w-1/3 px-4">
                      <label
                        className={`block text-sm font-bold mb-2 ${styles.satoshi}`}
                        htmlFor="locality"
                      >
                        Locality
                      </label>
                      <input
                        className={` bg-[#efefef] w-full h-12 py-3 px-4 text-sm placeholder-black font-bold border-2 border-black rounded-md focus:outline-indigo ${styles.satoshi}`}
                        type="text"
                        value={"Derapur"}
                        disabled={true}
                        id="locality"
                      />
                    </div>
                  </div>

                  <button
                    className="group relative inline-block h-12 w-full bg-black rounded-md"
                    type="submit"
                  >
                    <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0  group-hover:translate-x-0 transition duration-300">
                      <div
                        className={`flex h-full w-full items-center justify-center active:bg-blue-500 ${styles.greenBg} border-2 border-black rounded-md`}
                      >
                        {btnText == "Loading" && (
                          <ButtonSpinner color={"black"} />
                        )}{" "}
                        <span
                          className={`text-base font-black text-black ${styles.satoshi}`}
                        >
                          {btnText}
                        </span>
                      </div>
                    </div>
                  </button>
                </form>
              )}

              {!showAddressForm && (
                <h2
                  className={`text-center text-xl  my-8 font-black text-black ${styles.satoshi}`}
                >
                  OR
                </h2>
              )}
              {!showAddressForm && (
                <>
                  <SavedAddress
                    setAddressId={setAddressId}
                    addresses={address}
                    loading={loading}
                  />
                  <button
                    onClick={handleAddressOfSaved}
                    className="group mt-10 relative inline-block h-12 w-full bg-black rounded-md"
                  >
                    <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0  group-hover:translate-x-0 transition duration-300">
                      <div
                        className={`flex h-full w-full items-center justify-center active:bg-blue-500 bg-white  border-2 border-black rounded-md`}
                      >
                        {btnText == "Loading" && (
                          <ButtonSpinner color={"black"} />
                        )}{" "}
                        <span
                          className={`text-base font-black text-black ${styles.satoshi}`}
                        >
                          {btnText}
                        </span>
                      </div>
                    </div>
                  </button>
                </>
              )}
            </div>
            <PriceBox />
          </div>
        </div>
      </div>
    </div>

    // <div>hello billing</div>
  );
}
