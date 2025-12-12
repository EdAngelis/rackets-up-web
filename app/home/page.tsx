import HomeClient from "./HomeClient";
import Banners from "./sessions/banners/banners";
import Counters from "./sessions/counters/Counters";
import Header from "./sessions/header/Header";
import BasicSession from "./sessions/basic-session/BasicSession";
import ImageSection from "./sessions/image-section/ImageSection";
import Footer from "../../components/footer/footer";

export default function Page() {
  return (
    <>
      <Header />
      {/* <HomeClient /> */}
      <Banners />
      <Counters />
      <BasicSession />
      <ImageSection
        title="Stop wasting time and mental energy"
        subTitle="free your mind and play your best"
        image="/images/arguing.png"
        textPosition="Bottom"
      />
      <Footer />
    </>
  );
}
