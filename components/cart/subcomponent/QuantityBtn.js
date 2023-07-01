export default function App({ quantity }) {
  return (
    <div className="flex md:mb-[26px] h-full items-center">
      <div className="flex h-[2rem] md:h-10 w-[5rem] md:w-[7rem] px-2 items-center justify-center md:justify-between bg-white border-2 border-black rounded-md">
        <button className="flex w-3.5 h-3.5 px-px items-center justify-center bg-black hover:bg-indigo-500 rounded transition duration-100">
          <div className="h-px mx-px w-full bg-white"></div>
        </button>
        <input
          className="w-8 md:w-10 text-center text-sm font-bold placeholder-black text-black outline-none"
          type="number"
          value={quantity}
          placeholder={quantity}
        />
        <button className="relative flex w-3.5 h-3.5 px-px py-px items-center justify-center bg-black hover:bg-indigo-500 rounded transition duration-100">
          <div className="relative h-full w-full py-px">
            <div className="absolute top-1/2 left-0 h-px w-full bg-white"></div>
            <div className="inline-block max-w-max mx-auto h-full bg-white">
              <div className="inline-block px-px"></div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
