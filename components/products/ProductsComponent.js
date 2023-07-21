import ShowMoreButton from "@components/product/ShowMoreButton";
import styles from "@styles/product/product.module.css";
import SingleProduct from "@components/product/SingleProduct";
import FilterModal from "@components/products/subcomponent/FilterModal";
import GridChangeButton from "@components/products/subcomponent/GridChangeButton";
import ProductsQuantityStatus from "@components/products/subcomponent/ProductsQuantityStatus";
export default function App({ products }) {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between mb-10">
            <ProductsQuantityStatus products={products} />
            <div className="w-full lg:w-auto inline-flex items-center mt-6 lg:mt-0">
              <FilterModal />
              <GridChangeButton />
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 justify-content">
            <div className="w-full lg:w-1/4 px-4 mb-12 lg:mb-0"></div>
            <div className="w-full lg:w-3/4 px-4">
              <div className="flex flex-wrap -mx-4 -mb-8">
                {products.map((product, index) => (
                  <SingleProduct key={index} product={product} />
                ))}
              </div>
              <div className="mt-20 text-center">
                <ShowMoreButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
