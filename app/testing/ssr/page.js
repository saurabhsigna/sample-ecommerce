import ProductsComponent from "@components/products/ProductsComponent";
import NotFound from "@components/errorPage/NotFound";
import ErrorFix from "@components/checkoutPage/addressPageCheckout/ErrorFix";
export const runtime = "edge";
export default async function App() {
  let isErrorPresent = false;
  async function getProducts() {
    try {
      const body = JSON.stringify({ bookCategory: "11" });
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/products/fetchproducts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Ensure correct content type
          },
          body,
          cache: "no-store",
        }
      );

      if (!res.ok) {
        isErrorPresent = true;
      }

      return res.json();
    } catch (error) {
      isErrorPresent = true;
      throw error;
    }
  }
  const products = await getProducts();

  return (
    <>
      <ErrorFix /> <div className="mt-[50px]">{JSON.stringify(products)}</div>
    </>
  );
}
