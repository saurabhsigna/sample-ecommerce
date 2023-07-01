import Product from "@components/infiniteScroll/Product";
import styles from "@styles/components/animation/carousel.module.css";
export default function Home() {
  let images = [1];
  return (
    <div className=" flex items-center min-h-screen justify-center">
      {/* 1. */}
      <div className="w-[200%] h-[300px] border-t border-b border-gray-600 overflow-hidden relative">
        {/* 2. */}
        <div
          className={`w-[200%]  h-full flex items-center justify-around absolute left-0 animate gap-20 ${styles.animate}`}
        >
          {/* 3 */}
          {images.map((i, index) => {
            return (
              <div
                key={index}
                className="flex justify-center bg-red-200 rounded-md items-start h-full w-[20rem]"
              >
                <Product />
                {/* <img src={i} /> */}
              </div>
            );
          })}
          {images.map((i, index) => {
            return (
              <div
                key={index}
                className="flex justify-center bg-red-200 rounded-md items-start h-full w-[20rem]"
              >
                <Product />
                {/* <img src={i} /> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
