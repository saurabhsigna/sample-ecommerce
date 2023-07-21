import Link from "next/link";
export default function App({ label, name, image, href }) {
  return (
    <div className="w-full  px-4 mb-8 lg:mb-0">
      <Link href={href}>
        <div
          className="max-w-[20rem] mx-auto group block h-[16rem] bg-black rounded-md relative"
          href="https://shuffle.dev/#"
        >
          <div className="h-full w-full transform -translate-x-1 -translate-y-1 hover:-translate-x-0 hover:-translate-y-0 rounded-md border-2 border-black overflow-hidden transition duration-300">
            <img
              className="img-fluid w-full h-full object-cover"
              src={image}
              alt=""
              data-config-id="auto-img-2-9"
            />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span
                className="block text-xs text-white font-black"
                data-config-id="auto-txt-3-9"
              >
                {label}
              </span>
              <h4
                className="text-xl font-black text-white"
                data-config-id="auto-txt-4-9"
              >
                {name}
              </h4>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
