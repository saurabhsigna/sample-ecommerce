"use client";
import styles from "../../styles/product/product.module.css";
import AddToBag from "@components/product/CartButton";
export default function App({ product }) {
  return (
    <div className="w-full md:w-1/2 lg:w-full cursor-pointer px-4 mb-8">
      <div className="flex flex-wrap items-center -mx-4">
        <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
          <div className="h-60 w-60 lg:w-full bg-black rounded-md">
            <img
              className="img-fluid w-full h-full transform -translate-x-1 -translate-y-1 object-cover border-2 border-black rounded-md"
              src={product?.imgUri[0]}
              alt=""
              data-config-id="auto-img-1-2"
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3 px-4">
          <div>
            <h4
              className=" text-2xl  font-bold text-black mb-1"
              data-config-id="auto-txt-30-2"
            >
              {product?.name}
            </h4>
            <span
              className="block font-bold  text-xl text-green-500 mb-8"
              data-config-id="auto-txt-31-2"
            >
              ₹ {product?.price}
            </span>

            <ul className="font-bold md:w-[87%] w-full list-disc list-inside text-black mb-4">
              <li data-config-id="auto-txt-32-2">{product?.label}</li>
              <li data-config-id="auto-txt-33-2">
                {" "}
                For {product?.category} students
              </li>
              <li data-config-id="auto-txt-34-2">Deliver within 8 hours</li>
            </ul>
            <AddToBag pid={product?.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
