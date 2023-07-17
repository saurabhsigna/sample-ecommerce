"use client";
import { useState } from "react";
import OrderSuccess from "@components/orders/PurchasedOrdersList/OrderListComponent";
import AddressPage from "@components/checkoutPage/addressPageCheckout/AddressFormPage";
import PaymentPage from "@components/checkoutPage/paymentPageCheckout/PaymentPage";
import OrderSummary from "@components/checkoutPage/orderSummaryPageCheckout/OrderSummaryPage";
import ErrorFix from "@components/checkoutPage/addressPageCheckout/ErrorFix";
export default function App() {
  const [addressSubmitted, setAddressSubmitted] = useState(false);
  const [paymentPageConfirmed, setPaymentPageConfirmed] = useState(false);
  const [orderSummaryConfirmed, setOrderSummaryConfirmed] = useState(false);
  const [addressId, setAddressId] = useState("");
  return (
    <>
      <ErrorFix />
      {/* <OrderSuccess /> */}
      {!addressSubmitted && (
        <AddressPage
          setOk={setAddressSubmitted}
          setAddressId={setAddressId}
          addressId={addressId}
        />
      )}
      {addressSubmitted && !orderSummaryConfirmed && (
        <OrderSummary setOk={setOrderSummaryConfirmed} />
      )}
      {orderSummaryConfirmed && <PaymentPage setOk={paymentPageConfirmed} />}
    </>
  );
}
