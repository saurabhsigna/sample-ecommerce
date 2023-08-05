"use client";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function App() {
  return (
    <div className="lg:w-[300px] xl:w-[320px] flex items-start flex-col gap-1">
      <LazyLoadImage
        src={`https://images.unsplash.com/photo-1581044777550-4cfa60707c03`}
        // className={`w-[200px] h-[260px] largeMobile:w-[220px] largeMobile:h-[286px] md:w-[250px] md:h-[325px] lg:w-[270px] lg:h-[351px] xl:w-[290px] xl:h-[377px] object-cover rounded-3xl`}
        // className={`w-full h-[58.5vh] largeMobile:h-[65vh] md:h-[78vh] lg:h-[91vh] xl:h-[104vh] object-cover rounded-3xl`}
        // className={`w-full h-[50vh] lg:h-[70vh] xl:h-[80vh] object-cover rounded-3xl`}

        // className={`w-[220px] h-[264px] lg:w-[270px] lg:h-[324px] xl:w-[290px] xl:h-[348px] object-cover rounded-3xl`}
        className={`w-[200px] h-[240px]   md:w-[250px] md:h-[300px] lg:w-[270px] lg:h-[324px] xl:w-[290px] xl:h-[348px] object-cover rounded-[18px]`}
        // className={`w-[220px] lg:h-[260px] lg:w-[270px] xl:w-[290px] object-cover lg:h-[310px] xl:h-[350px] rounded-3xl`}
      />
      <h2>Beach Outfit</h2>
      <h2 className={`textGreenDark`}>$ 147.00</h2>
    </div>
  );
}
