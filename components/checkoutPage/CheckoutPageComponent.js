"use client";
import useSWR from "swr";
import { useState } from "react";
import OrderSuccess from "@components/orders/PurchasedOrdersList/OrderListComponent";
import AddressPage from "@components/checkoutPage/addressPageCheckout/AddressFormPage";
import PaymentPage from "@components/checkoutPage/paymentPageCheckout/PaymentPage";
import OrderSummary from "@components/checkoutPage/orderSummaryPageCheckout/OrderSummaryPage";
import ErrorFix from "@components/checkoutPage/addressPageCheckout/ErrorFix";
import { cartItemsAtom } from "@/atoms/CartAtoms";
import { useRecoilValue } from "recoil";
export default function App() {
  const [addressSubmitted, setAddressSubmitted] = useState(false);
  const [paymentPageConfirmed, setPaymentPageConfirmed] = useState(false);
  const [orderSummaryConfirmed, setOrderSummaryConfirmed] = useState(false);
  const [addressId, setAddressId] = useState("");

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
    <>
      <ErrorFix />
      {/* <OrderSuccess /> */}
      {!addressSubmitted && (
        <AddressPage
          setOk={setAddressSubmitted}
          setAddressId={setAddressId}
          addressId={addressId}
          products={data ? data : []}
        />
      )}

      {addressSubmitted && !orderSummaryConfirmed && (
        <OrderSummary
          setOk={setOrderSummaryConfirmed}
          products={data ? data : []}
        />
      )}
      {orderSummaryConfirmed && (
        <PaymentPage setOk={paymentPageConfirmed} products={data ? data : []} />
      )}
    </>
  );
}
