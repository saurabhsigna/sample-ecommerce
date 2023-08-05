import dynamic from "next/dynamic";
import Carousel from "@components/carousel/mainPage/embla/Embla";
import Banner from "@components/banners/CategoryBanner/CategoryPageComponent";
import Scroll from "@components/testing/animation/New";
import MainPage from "../../components/testing/MainPageShuffle";
import BenefitsBanner from "@components/benefits/BenefitsBanner";
// import MainPage from "../../components/testing/MainPageShuffleCode";
import ComingSoon from "@components/banners/announce/ComingSoon";
import AboutMe from "@components/about_me/MyInfo";
import NewlyAddedProduct from "@components/products/mainPage/newlyAdded/Component";
export default function App() {
  return (
    <>
      <MainPage />
      <BenefitsBanner />
      <Carousel />
      <Scroll />
      <ComingSoon />
      <Banner />
      <NewlyAddedProduct />
      <AboutMe />
    </>
  );
}
