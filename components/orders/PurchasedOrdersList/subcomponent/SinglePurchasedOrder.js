import moment from "moment";
export default function App({ purchase }) {
  return (
    <div className="border-2 my-8 border-black rounded-md shadow">
      <div className="py-8 px-8">
        <div className="flex flex-col sm:flex-row -mx-4">
          <div className="w-full sm:w-auto px-4">
            <img
              className="w-56 h-52 border-2 object-cover border-black rounded-md shadow"
              src={purchase?.image}
              alt=""
              data-config-id="auto-img-1-2"
            />
          </div>
          <div className="w-full sm:w-auto flex-grow pt-3 pb-4 px-4">
            <div className="flex mb-20  items-start flex-col sm:flex-row sm:sitems-center justify-between">
              <div>
                <h4
                  className="text-xl font-black"
                  data-config-id="auto-txt-2-2"
                >
                  {purchase?.title}
                </h4>
                <span
                  className="block text-sm font-bold mb-2"
                  data-config-id="auto-txt-3-2"
                >
                  Small description about product dolor sit amet
                </span>
              </div>
              <div>
                <span className="text-xl font-black text-green-600">
                  $ {purchase?.price}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between">
              <div className="w-full lg:w-auto mb-6 lg:mb-0">
                <div className="inline-block mr-16">
                  <span className="block mb-2 text-sm font-bold text-gray-600">
                    Ordered On
                  </span>
                  <span className="text-sm font-bold">
                    {moment(purchase?.createdAt).format("DD/MM/YYYY")}
                  </span>
                </div>
                <div className="inline-block">
                  <span className="block mb-2 text-sm font-bold text-gray-600">
                    Delivered
                  </span>
                  <span className="text-sm font-bold">07/23/2022</span>
                </div>
              </div>
              <div className="w-full lg:w-auto flex flex-col sm:flex-row">
                <a
                  className="group relative inline-block mb-4 sm:mb-0 sm:mr-6 h-12 w-full sm:w-32 bg-black rounded-md"
                  href="https://shuffle.dev/#"
                >
                  <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                    <div className="flex h-full w-full items-center justify-center text-black group-hover:text-white bg-white group-hover:bg-black border-2 border-black rounded-md transition-colors duration-500">
                      <span
                        className="text-base font-black"
                        data-config-id="auto-txt-14-13"
                      >
                        View Invoice
                      </span>
                    </div>
                  </div>
                </a>
                <a
                  className="group relative inline-block h-12 w-full sm:w-28 bg-black rounded-md"
                  href="https://shuffle.dev/#"
                >
                  <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                    <div className="flex h-full w-full items-center justify-center bg-indigo-500 border-2 border-black rounded-md transition-colors duration-500">
                      <span
                        className="text-base font-black text-white"
                        data-config-id="auto-txt-14-13"
                      >
                        Buy Again
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
