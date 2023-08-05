import OrderSuccess from "@components/orders/PurchasedOrdersList/OrderListComponent";
import CheckoutPageComponent from "@components/checkoutPage/CheckoutPageComponent";
import NotAuthorized from "@components/errorPage/NotAuthorized";
import { cookies } from "next/headers";

export default async function App() {
  const accessToken = cookies().get("accessToken");
  let isErrorPresent = false;
  console.log("accessteocken is ");
  console.log(accessToken);
  async function checkUser(accessToken) {
    try {
      if (!accessToken) {
        isErrorPresent = true;
        console.log("there is no accessToken present");
      } else {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/user/me`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json", // Ensure correct content type
              Authorization: `bearer ${accessToken.value}`,
            },
            cache: "no-store",
          }
        );

        if (!res.ok) {
          console.log(res);
          // console.log("kuch thik nahi hai ");
          isErrorPresent = true;
          return null;
        }

        return res.json();
      }
    } catch (error) {
      isErrorPresent = true;
      console.log("throwing error here");
      throw error;
    }
  }

  const userStatus = await checkUser(accessToken);

  return userStatus && !isErrorPresent ? (
    <div>
      <CheckoutPageComponent />
      <div>{/* <Skeleton/> */}</div>
    </div>
  ) : (
    isErrorPresent && <NotAuthorized />
  );
}
