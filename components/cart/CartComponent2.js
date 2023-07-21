"use client";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartItemsAtom, removeItemFromCartSelector } from "@atoms/CartAtoms";
import styles from "../../styles/cart/cart.module.css";
import PriceBoard from "@components/cart/subcomponent/PriceBoard";
import Loader from "@components/minicomponents/Loaders/SimpleLoader";
import QntyBtn from "@components/cart/subcomponent/QuantityBtn";
import ProductDiv from "@components/cart/subcomponent/ProductDiv";
import PromoCode from "@components/cart/subcomponent/PromoCodeSection";
import Lottie from "lottie-react";
import EmptyCartLottie from "@public/lottie/empty_cart.json";
export default function App() {
  const [cartData, setCartData] = useState(null);
  const [isCartLoading, setIsCartLoading] = useState(null);

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
  console.log("cartItems");
  console.log(cartItems);
  let body = JSON.stringify({ cartItems: cartItems });
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/cart/fetchcart`,
    (url) =>
      fetcher(url, body).then((response) => {
        setCartData(response);
        return response;
      }),
    {
      errorRetryCount: 0,
      shouldRetryOnError: false,
    }
  );

  useEffect(() => {
    if (isLoading) {
      setIsCartLoading(true);
    } else {
      setIsCartLoading(false);
    }
  }, [isLoading]);

  const handleRemoveItem = (productId) => {
    const updatedCartData = cartData.filter(
      (item) => item.product.id !== productId
    );
    setCartData(updatedCartData);
  };

  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-[98%] sm:max-w-[94%] lg:max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold">Cart</h3>
          <div className="flex flex-wrap -mx-4">
            {isCartLoading && (
              <div className="flex items-center justify-center w-full h-[65vh]">
                <Loader />
              </div>
            )}
            {cartItems &&
              cartItems.length == 0 &&
              !isCartLoading &&
              !isLoading && (
                <div className="flex items-center justify-center w-full h-[65vh]">
                  {" "}
                  {/* <img
                    src={"/components/cart/empty_cart.svg"}
                    width={100}
                    height={100}
                  /> */}
                  <div className="flex items-center flex-col gap-3">
                    <Lottie
                      className="h-[230px]"
                      animationData={EmptyCartLottie}
                    />
                    <h2> Add Some Items</h2>
                  </div>
                </div>
              )}

            <div className="w-full lg:w-2/3 px-0 mb-12 lg:mb-0">
              <div className="pt-12">
                {cartItems.length > 0 &&
                  data &&
                  cartData &&
                  cartData.map((product, index) => (
                    <ProductDiv
                      key={index}
                      product={product.product}
                      quantity={product.quantity}
                      onRemove={() => handleRemoveItem(product.product.id)} // Pass the product ID to handleRemoveItem
                    />
                  ))}

                {cartData && cartData.length > 0 && <PromoCode />}
              </div>
            </div>
            {cartData && cartData.length > 0 && <PriceBoard />}
          </div>
        </div>
      </div>
    </section>
  );
}
