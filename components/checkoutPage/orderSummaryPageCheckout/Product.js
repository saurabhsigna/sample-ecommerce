export default function App({ product, quantity }) {
  return (
    <div className="flex my-4 items-start gap-4">
      <div className="max-w-[100px] flex items-center justify-center max-h-[120px] md:max-h-[150px] md:h-[150px] h-[100px] md:max-w-[150px]">
        <img
          className={`h-full object-cover w-full rounded-md`}
          src={product.imgUri}
        />
      </div>
      <div className="flex flex-col items-start">
        <h2 className="text-lg md:text-xl whitespace-nowrap">{product.name}</h2>
        <p className="font-light text-sm">{product.label}</p>
        <h2 className="text-xl">{product.price} rs</h2>
        <h2 className="font-light">
          Qnty: <b>{quantity}</b>
        </h2>
      </div>
    </div>
  );
}
