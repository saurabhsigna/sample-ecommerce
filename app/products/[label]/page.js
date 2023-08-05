import ProductsComponent from "@components/products/ProductsComponent";
import NotFound from "@components/errorPage/NotFound";
import Skeleton from "@components/products/loading/GallerySkeleton"
export const runtime = 'edge';
export default async function App({ params: { label } }) {
  let isErrorPresent = false;
  async function getProducts() {
    try {
      let bookCategory;

  // Map label to bookCategory based on your defined categories
  const categoryMappings = {
    class_9: "9",
    class_10: "10",
    class_11: "11",
    class_12: "12",
    reference_board: "reference_board",
    jee_neet: "jee_neet"
  };

  // Check if label is in the categoryMappings, set bookCategory and isErrorPresent
  if (categoryMappings[label]) {
    bookCategory = categoryMappings[label];
  } else {
    isErrorPresent = true;
  }    
      const body = JSON.stringify({ bookCategory });
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
