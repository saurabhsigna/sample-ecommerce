import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"], weight: "400", style: "normal" });
import styles from "@styles/components/animation/slider.module.css";
export default function App() {
  return (
    <section className={sora.className}>
      <div
        className={`w-[20rem]  p-[20px] bg-[whitesmoke] mr-10 md:mr-14 h-auto`}
      >
        <div className="relative">
          <img
            src={`https://freeschooool.sgp1.cdn.digitaloceanspaces.com/silverCoin.jpeg`}
            className={`rounded-lg`}
          />
          <h2
            className={`text-base flex items-center justify-center absolute bottom-0 h-[40px] w-[40%]  ${styles.price}`}
          >
            ₹ 399
          </h2>
        </div>
        <div className="mt-2">
          <h1 className="text-lg">Product some title</h1>
          <h2 className="text-sm">label</h2>
          <button className=" text-sm py-3 px-7 items-center justify-center leading-none font-medium text-black hover:text-white border border-black rounded-full hover:bg-black transition duration-200">
            Add to bag
          </button>
        </div>
      </div>
    </section>
  );
}
