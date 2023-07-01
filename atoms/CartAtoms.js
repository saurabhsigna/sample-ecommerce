import { recoilPersist } from "recoil-persist";
import { atom ,selectorFamily} from "recoil";
const { persistAtom } = recoilPersist();
export const cartItemsAtom = atom({
  key: "cartItemsAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});


export const removeItemFromCartSelector = selectorFamily({
  key: 'removeItemFromCart',
  get: productId => ({ get }) => get(cartItemsAtom),
  set: productId => ({ get, set }) => {
    const cartItems = get(cartItemsAtom);
    const updatedCart = cartItems.filter(item => item.pid !== productId);
    set(cartItemsAtom, updatedCart);
  },
});