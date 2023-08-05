"use client";
import { useState } from "react";
import { cartItemsAtom } from "@atoms/CartAtoms";
import { changeItemQntySelector } from "@atoms/CartAtoms";
import { useSetRecoilState } from "recoil";
export default function App({ quantity, productId, addQnty, lessQnty }) {
  const [newQuantity, setNewQuantity] = useState(quantity);
  const setItemQuantity = useSetRecoilState(changeItemQntySelector(productId));

  const addQuantityBtn = (quantity) => {
    setNewQuantity(newQuantity + 1);
    setItemQuantity(newQuantity + 1);
    addQnty(productId, 1);
  };

  const lessQuantityBtn = (quantity) => {
    setNewQuantity(newQuantity - 1);
    setItemQuantity(newQuantity - 1);
    lessQnty(productId, 1);
  };

  return (
    <div className="flex md:mb-[26px] h-full items-center justify-center">
      <div className="flex h-[2rem] md:h-10 w-[5rem] md:w-[7rem] px-2 items-center justify-center md:justify-between bg-white border-2 border-black rounded-md">
        <div className="flex w-full items-center justify-between">
          {newQuantity > 1 ? (
            <button onClick={() => lessQuantityBtn(quantity)}>
              {" "}
              <p className="border h-[1.1rem] w-[1.1rem]  md:h-6 md:w-6 flex items-center justify-center sm:text-lg md:text-xl lg:tex-2xl border-black p-1 rounded-full">
                -
              </p>
            </button>
          ) : (
            <img
              src={`https://em-content.zobj.net/thumbs/120/noto-emoji/343/person-gesturing-no_1f645.jpg`}
              className="  md:h-6 md:w-6 h-[1.1rem] w-[1.1rem]"
            />
          )}
          <div className="w-[36px] flex items-center justify-center md:w-[48px]  sm:text-lg md:text-xl lg:tex-2xl ">
            {newQuantity}
          </div>
          {newQuantity <= 3 ? (
            <button onClick={() => addQuantityBtn(quantity)}>
              <p className="border h-[1.1rem] w-[1.1rem] md:h-6 md:w-6 flex items-center justify-center sm:text-lg md:text-xl lg:tex-2xl border-black p-1 rounded-full">
                +
              </p>
            </button>
          ) : (
            <img
              src={`https://em-content.zobj.net/thumbs/120/noto-emoji/343/person-gesturing-no_1f645.jpg`}
              className="  md:h-6 md:w-6 h-[1.1rem] w-[1.1rem]"
            />
          )}
        </div>
      </div>
    </div>
  );
}
