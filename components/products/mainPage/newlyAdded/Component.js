import SingleProduct from "@components/product/mainPage/NewlyAddedProduct";
export default function App() {
  let arr = [1, 2, 3, 4, 5];
  return (
    <div className="bg-[#f7cb46]">
      <div className="h-[100px] md:h-[143px] overflow-hidden">
        <img
          src={`https://framerusercontent.com/images/qEUGlyxVFJkYXcMLaRy6XoqIk.jpg?scale-down-to=2048`}
          className={`w-full h-full scale-x-150`}
        />
      </div>

      <div className="flex items-center justify-center">
        <div className="grid gap-y-6 lg:gap-x-8  sm:gap-x-2 md:gap-x-3 lg:grid-cols-3 2xl:grid-cols-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-4">
          {arr.map((count, index) => (
            <SingleProduct key={index} />
          ))}
        </div>
      </div>
      <img
        src={`https://framerusercontent.com/images/RBMukytSp6qhO0jIP4HAz7ekUU.jpg?scale-down-to=2048`}
        className="w-full h-full"
      />
    </div>
  );
}
