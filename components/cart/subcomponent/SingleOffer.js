export default function App({ offer, imgUri, applied }) {
  return (
    <div className="  flex my-2 md:my-3 items-center gap-1.5 sm:gap-2.5 md:gap-4 ">
      <img src={imgUri} className="w-[28px] md:w-[48px]" />
      <span
        className={`relative text-sm md:text-xl font-semibold ${
          applied ? "line-through" : ""
        }`}
      >
        {offer}
        {applied && (
          <div className="absolute text-sm md:text-base  font-medium top-[-20px] right-[-20px] text-[#156815]">
            Offer Applied
          </div>
        )}
      </span>
    </div>
  );
}
