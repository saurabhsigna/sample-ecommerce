"use client";
import useSWR from "swr";
import { useRecoilValue } from "recoil";
import { cartItemsAtom } from "@atoms/CartAtoms";
import styles from "../../styles/cart/cart.module.css";
import PriceBoard from "@components/cart/subcomponent/PriceBoard";
import QntyBtn from "@components/cart/subcomponent/QuantityBtn";
import ProductDiv from "@components/cart/subcomponent/ProductDiv";
import PromoCode from "@components/cart/subcomponent/PromoCodeSection";
export default function App() {
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
  console.log("len", cartItems);
  let body = JSON.stringify({ cartItems: cartItems });
  console.log("body is ", body);

  const { data, error } = useSWR(
    cartItems && cartItems.length > 0
      ? `${process.env.NEXT_PUBLIC_BACKEND_URI}/fetchcart`
      : null,
    (url) => fetcher(url, body),
    {
      errorRetryCount: 0,
      shouldRetryOnError: false,
    }
  );

  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-[98%] sm:max-w-[94%] lg:max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold">Cart</h3>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-2/3 px-0 mb-12 lg:mb-0">
              <div className="pt-12">
                {cartItems.length > 0 &&
                  data &&
                  data.map((product, index) => (
                    <ProductDiv
                      key={index}
                      product={product.product}
                      quantity={product.quantity}
                    />
                  ))}

                {data && <PromoCode />}
              </div>
            </div>
            {data && <PriceBoard />}
          </div>
        </div>
      </div>
    </section>
  );
}
