import { useRecoilValue, useSetRecoilState } from "recoil";
import { removeItemFromCartSelector, cartItemsAtom } from "@atoms/CartAtoms";
import styles from "@styles/cart/cart.module.css";
export default function App({ productId, onRemove, showShadow }) {
  const removeFromCart = useSetRecoilState(
    removeItemFromCartSelector(productId)
  );

  const handleRemoveItem = () => {
    onRemove();
    removeFromCart();
  };
  return (
    <button
      onClick={handleRemoveItem}
      className={` py-2 px-4  font-bold border-2 border-gray-900 rounded-md ${
        showShadow && styles.shadowBlack
      } text-gray-900 ${styles.greenBg}`}
      data-config-id="auto-txt-26-1"
    >
      Remove
    </button>
  );
}
