"use client";
import useSWR from "swr";
import PriceBox from "@components/checkoutPage/subcomponent/PriceBox";
import styles from "@styles/components/checkout/AddressPage.module.css";
import Product from "@components/checkoutPage/orderSummaryPageCheckout/Product";
import WhatsInTheBag from "@components/checkoutPage/orderSummaryPageCheckout/WhatsInTheBag";
import { cartItemsAtom } from "@/atoms/CartAtoms";
import { useRecoilValue } from "recoil";
export default function App({ setOk }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setOk(true);
  };

  const fetcher = async (url, body) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    return response.json();
  };

  const cartItems = useRecoilValue(cartItemsAtom);
  let body = JSON.stringify({ cartItems: cartItems });
  const { data, error, isLoading } = useSWR(
    cartItems && cartItems.length > 0
      ? `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/cart/fetchcart`
      : null,
    (url) =>
      fetcher(url, body).then((response) => {
        return response;
      }),
    {
      errorRetryCount: 0,
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );

  return (
    <div className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl lg:max-w-6xl mx-auto">
          <h3 className={` ${styles.satoshi} text-3xl font-bold mb-6`}>
            Order Summary
          </h3>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-2/3 px-4 mb-12 lg:mb-0">
              {isLoading && <h2>Loading ...</h2>}
              {data &&
                data.map((product, index) => (
                  <Product
                    key={index}
                    product={product?.product}
                    quantity={product.quantity}
                  />
                ))}
              {/* <Product /> */}
              {data && <WhatsInTheBag products={data} />}
              <form onSubmit={handleSubmit}>
                <button
                  className="group relative inline-block h-12 w-full bg-black rounded-md"
                  type="submit"
                >
                  <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0  group-hover:translate-x-0 transition duration-300">
                    <div
                      className={`flex h-full w-full items-center justify-center active:bg-blue-500 ${styles.greenBg} border-2 border-black rounded-md`}
                    >
                      <span
                        className={`text-base font-black text-black ${styles.satoshi}`}
                      >
                        Continue to Payment
                      </span>
                    </div>
                  </div>
                </button>
              </form>
            </div>
            <PriceBox />
          </div>
        </div>
      </div>
    </div>
  );
}
