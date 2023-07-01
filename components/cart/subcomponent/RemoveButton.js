import {useSetRecoilState} from "recoil"
import {} from "@atoms/CartAtoms"

export default function App({productId}){
    const removeFromCart = useSetRecoilState(removeItemFromCartSelector);

    const handleRemoveItem = productId => {
      removeFromCart(productId);
    };
    return (
        <button
        onClick={handleRemoveItem}
        className={` py-2 px-4  font-bold border-2 border-gray-900 rounded-md ${styles.shadowBlack} text-gray-900 ${styles.greenBg}`}
        data-config-id="auto-txt-26-1"
      >
        Remove
      </button>
    )
}