"use client";
import SingleOffer from "@components/cart/subcomponent/SingleOffer";
import { useEffect, useState } from "react";
export default function App({ products }) {
  const [totalQnty, setTotalQnty] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const shippingChargeLimit = 249;
  const discountQntyLimit = 3;

  useEffect(() => {
    const ProductNet = products.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );

    const totalProductQnty = products.reduce(
      (total, item) => total + item.quantity,
      0
    );

    setTotalQnty(totalProductQnty);
    setProductPrice(ProductNet);
  }, [products]);
  return (
    <div>
      <h2 className="text-xl  md:text-2xl my-3 font-semibold">Offers:</h2>
      <SingleOffer
        imgUri="/components/cart/discount.svg"
        offer={`Add atleast ${
          discountQntyLimit - totalQnty <= 0 ? 3 : discountQntyLimit - totalQnty
        } items to 25₹ OFF on shipping charges !`}
        applied={discountQntyLimit - totalQnty <= 0 ? true : false}
      />
      <SingleOffer
        imgUri="/components/cart/free_shipping.svg"
        offer={`Add ${
          shippingChargeLimit - productPrice <= 0
            ? 249
            : shippingChargeLimit - productPrice
        } ₹ worth of product more to get FREE shipping ! `}
        applied={shippingChargeLimit - productPrice <= 0 ? true : false}
      />
      <div className="mb-8"></div>
    </div>
  );
}
