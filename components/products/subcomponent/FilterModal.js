export default function App() {
  return (
    <div class="group relative h-12 w-52 mr-6 border-2 border-black rounded-md overflow-hidden">
      <select
        class="w-full h-full px-4 text-sm font-bold appearance-none outline-none"
        name=""
        id=""
        data-config-id="auto-input-7-2"
      >
        <option value="1">Sort by Newest</option>
        <option value="1">Sort by Oldest</option>
        <option value="1">Sort by Price</option>
      </select>
      <span class="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 text-black group-hover:text-indigo-500">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-config-id="auto-svg-1-2"
        >
          <path
            d="M8.94667 0.453308H4.79333H1.05333C0.413333 0.453308 0.0933335 1.22664 0.546667 1.67997L4 5.13331C4.55333 5.68664 5.45333 5.68664 6.00667 5.13331L7.32 3.81997L9.46 1.67997C9.90667 1.22664 9.58667 0.453308 8.94667 0.453308Z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
    </div>
  );
}
