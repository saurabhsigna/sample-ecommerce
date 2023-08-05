import { recoilPersist } from "recoil-persist";
import { atom, selectorFamily } from "recoil";
const { persistAtom } = recoilPersist();
export const cartItemsAtom = atom({
  key: "cartItemsAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const removeItemFromCartSelector = selectorFamily({
  key: "removeItemFromCartSelector",
  get:
    (productId) =>
    ({ get }) =>
      get(cartItemsAtom),
  set:
    (productId) =>
    ({ get, set }) => {
      const cartItems = get(cartItemsAtom);
      const updatedCart = cartItems.filter((item) => item.pid !== productId);
      set(cartItemsAtom, updatedCart);
    },
});

export const changeItemQntySelector = selectorFamily({
  key: "changeItemQntySelector",
  get:
    (productId) =>
    ({ get }) => {
      const cartItems = get(cartItemsAtom);
      const item = cartItems.find((item) => item.pid === productId);
      return item ? item.quantity : 0;
    },
  set:
    (productId) =>
    ({ get, set },newQuantity) => {
      const cartItems = get(cartItemsAtom);
      const updatedCart = cartItems.map((item) =>
        item.pid === productId ? { ...item, quantity: newQuantity } : item
      );
      set(cartItemsAtom, updatedCart);
    },
});
