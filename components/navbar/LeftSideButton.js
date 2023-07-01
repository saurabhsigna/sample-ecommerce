export default function App({ text, href, svg, showInSM }) {
  return (
    <div
      class="flex gap-[6px] mr-6 text-green-500 hover:text-orange-500 transition duration-200"
      // href="https://shuffle.dev/#"
    >
      <img src={`/navbar/${svg}.svg`} />
      <span className={`text-black ${showInSM ? "hidden" : ""}`}>{text}</span>
    </div>
  );
}
