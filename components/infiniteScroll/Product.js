export default function App() {
  return (
    <div className={`w-[16rem] h-auto`}>
      <img
        src={`https://freeschooool.sgp1.cdn.digitaloceanspaces.com/silverCoin.jpeg`}
        className={`rounded-md`}
      />
      <h2 className="text-base">label</h2>
      <h1 className="text-base">Product some title</h1>
      <h2 className="text-base">$ price</h2>
      <button className="text-base">Add to bag</button>
    </div>
  );
}
