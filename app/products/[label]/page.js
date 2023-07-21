import ProductsComponent from "@components/products/ProductsComponent";
import NotFound from "@components/errorPage/NotFound";
import Skeleton from "@components/products/loading/Skeleton"
export const runtime = 'edge';
export default async function App({ params: { label } }) {
  let isErrorPresent = false;
  async function getProducts() {
    try {
      const body = JSON.stringify({ bookCategory: label });
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/products/fetchproducts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure correct content type
        },
        body,
        cache:"no-store"
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
    <div>
    <ProductsComponent products={products} />
    <div>
      {/* <Skeleton/> */}
      </div>
    </div>
  ) : (
    isErrorPresent && <NotFound />
  );
}
