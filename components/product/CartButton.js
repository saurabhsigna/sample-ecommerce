"use client";
import styles from "../../styles/product/product.module.css";
import { useSetRecoilState } from "recoil";
import { cartItemsAtom } from "@atoms/CartAtoms";
export default function App({ pid }) {
  const setCartItems = useSetRecoilState(cartItemsAtom);
  const handleAddToCart = () => {
    const newItem = { pid, quantity: 1 };
    const cartItems = setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.pid === pid);
      if (existingItem) {
        // If item already exists, update the quantity instead of duplicating
        return prevCartItems.map((item) => {
          if (item.pid === pid) {
            return { ...item };
          }
          return item;
        });
      } else {
        // If item doesn't exist, add it to the cart
        return [...prevCartItems, newItem];
      }
    });
  };

  return (
    // <div class="flex flex-nowrap sm:flex-nowrap items-center -mx-2 -mb-4">
    <button
      onClick={handleAddToCart}
      class="cursor-copy w-full sm:w-auto px-2 mb-4"
    >
      <div class="group relative inline-block h-12 w-full sm:w-52 -mb-2 bg-black rounded-md">
        <div class="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
          <div
            class={`flex h-full w-full items-center justify-center ${styles.greenBg} border-2 border-black rounded-md`}
          >
            <span
              class="text-base font-black text-black"
              data-config-id="auto-txt-35-2"
            >
              Add to Bag
            </span>
          </div>
        </div>
      </div>
    </button>
    // </div>
  );
}
