import SingleProduct from "@components/product/mainPage/NewlyAddedProduct";
export default function App() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="">
      <div className="grid gap-y-6 lg:gap-x-8  sm:gap-x-2 md:gap-x-3 lg:grid-cols-4 2xl:grid-cols-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-4">
        {arr.map((count, index) => (
          <SingleProduct key={index} />
        ))}
      </div>
    </div>
  );
}
