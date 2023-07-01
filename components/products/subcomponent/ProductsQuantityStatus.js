import styles from "@styles/product/product.module.css";
export default function App({ products }) {
  let productsQnty = products.length;
  return (
    <h2 class="text-2xl sm:text-3xl font-[600]">
      <span class="text-black" data-config-id="auto-txt-1-2">
        Found {productsQnty} results for
      </span>
      <span
        class={`block lg:inline ${styles.textGreen} `}
        data-config-id="auto-txt-2-2"
      >
        {" "}
        Lorem Ipsum
      </span>
    </h2>
  );
}
