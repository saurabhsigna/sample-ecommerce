import ProductsComponent from "@components/products/ProductsComponent";
import NotFound from "@components/errorPage/NotFound";

export default async function App({ params: { label } }) {
  let isErrorPresent = false;
  async function getProducts() {
    try {
      const body = JSON.stringify({ bookCategory: label });
      const res = await fetch("https://m0wg74-3000.csb.app/fetchproducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure correct content type
        },
        body,
      });

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


  return products && !isErrorPresent ? (
    <ProductsComponent products={products} />
  ) : (
    isErrorPresent && <NotFound />
  );
}
