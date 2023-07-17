"use client";
import useSWR from "swr";
import { getCookie } from "cookies-next";
import SingleOrder from "@components/orders/PurchasedOrdersList/subcomponent/SinglePurchasedOrder";
const App = () => {
  const fetcher = async (url, accessToken) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    return response.json();
  };

  const accessToken = getCookie("accessToken");

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/purchase/getpurchaseditems`,
    (url) =>
      fetcher(url, accessToken).then((response) => {
        // setCartData(response);
        return response.purchases;
      }),
    {
      errorRetryCount: 0,
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );
  console.log("haramai");
  console.log(data);
  return (
    <section
      data-section-id="1"
      data-share=""
      data-category="order-history"
      data-component-id="cfc459fa_01_awz"
      className="py-20"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-2">Order history</h3>
          <p className="text-sm font-[500] mb-8">
            Recent Purchased Orders dolor sit amet consectutar
          </p>
          {data && data.map((purchase,index)=>(
            <SingleOrder key={index} purchase={purchase}/>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default App;
