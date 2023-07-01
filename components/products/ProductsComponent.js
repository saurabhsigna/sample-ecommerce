import ShowMoreButton from "@components/product/ShowMoreButton";
import styles from "@styles/product/product.module.css";
import SingleProduct from "@components/product/SingleProduct";
import FilterModal from "@components/products/subcomponent/FilterModal";
import GridChangeButton from "@components/products/subcomponent/GridChangeButton";
import ProductsQuantityStatus from "@components/products/subcomponent/ProductsQuantityStatus";
export default function App({ products }) {
  return (
    <section class="py-16">
      <div class="container px-4 mx-auto">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-wrap items-center justify-between mb-10">
            <ProductsQuantityStatus products={products} />
            <div class="w-full lg:w-auto inline-flex items-center mt-6 lg:mt-0">
              <FilterModal />
              <GridChangeButton />
            </div>
          </div>
          <div class="flex flex-wrap -mx-4 justify-content">
            <div class="w-full lg:w-1/4 px-4 mb-12 lg:mb-0"></div>
            <div class="w-full lg:w-3/4 px-4">
              <div class="flex flex-wrap -mx-4 -mb-8">
                {products.map((product, index) => (
                  <SingleProduct key={index} product={product} />
                ))}
              </div>
              <div class="mt-20 text-center">
                <ShowMoreButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
