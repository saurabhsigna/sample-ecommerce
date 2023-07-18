import ProductsComponent from "@components/products/ProductsComponent";
import NotFound from "@components/errorPage/NotFound";
import ErrorFix from "@components/checkoutPage/addressPageCheckout/ErrorFix";
export default async function App({ params: { label } }) {
  let isErrorPresent = false;
  async function getProducts() {
    try {
      const res = await fetch("https://m0wg74-3000.csb.app", {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Ensure correct content type
        },
      });

      if (!res.ok) {
        isErrorPresent = true;
      }

      return res.text();
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
