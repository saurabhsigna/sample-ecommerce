import dynamic from "next/dynamic";
const MainPage = dynamic(
  () => import("../../components/testing/MainPageShuffle"),
  {
    ssr: false,
  }
);

const Banner = dynamic(() => import("@components/banners/BannersComponent"), {
  ssr: false,
});
const Scroll = dynamic(() => import("../../components/testing/animation/New"), {
  ssr: false,
});
// import MainPage from "../../components/testing/MainPageShuffle";
// import MainPage from "../../components/testing/MainPageShuffleCode";
import Footer from "@components/footer/Footer";
export default function App() {
  return (
    <>
      <MainPage />
      <Scroll />
      <Banner />
      <Footer />
    </>
  );
}
