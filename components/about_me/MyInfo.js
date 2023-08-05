const ReviewsSection = () => {
  return (
    <section className="relative pb-24 md:pb-0 bg-white">
      <div className="relative container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <div className="relative py-16 pl-12 sm:pl-20">
                <img
                  className="absolute top-0 h-full left-0 ml-28"
                  src="https://shuffle.dev/shopal-assets/background/green-lines.svg"
                  alt=""
                />
                <img
                  className="absolute top-1/2 w-10 sm:w-auto transform -translate-y-1/2 left-0 img-fluid"
                  src="https://shuffle.dev/shopal-assets/background/circle-orange-green-part.svg"
                  alt=""
                />
                <img
                  className="relative img-fluid h-80 sm:h-100 border-2 border-black shadow rounded-md object-cover"
                  src="https://shuffle.dev/shopal-assets/images/photo-men.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="max-w-lg mx-auto">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.0001 11.6667L25.0001 11.6667L21.6667 18.3334L21.6667 28.3334L31.6667 28.3334L31.6667 18.3334L26.6667 18.3334L30.0001 11.6667ZM16.6667 11.6667L11.6667 11.6667L8.33341 18.3334L8.33341 28.3334L18.3334 28.3334L18.3334 18.3334L13.3334 18.3334L16.6667 11.6667Z"
                    fill="black"
                  />
                </svg>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mt-7 mb-6">
                  Lorem ipsum dolor sit amet consectutar domor at elis
                </h3>
                <p className="text-lg font-bold mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                  aliquet orci.
                </p>
                <h5 className="text-xl font-black mb-1">(MCA)</h5>
                <span className="font-bold">CEO &amp; Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
