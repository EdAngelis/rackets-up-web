import HomeClient from "./HomeClient";
import Banners from "./sessions/banners/banners";
import Counters from "./sessions/counters/Counters";
import Header from "./sessions/header/Header";
import BasicSession from "./sessions/basic-session/BasicSession";
import Footer from "../../components/footer/footer";

export default function Page() {
  return (
    <>
      <Header />
      {/* <HomeClient /> */}
      <Banners />
      <Counters />
      <BasicSession />
      <Footer />
    </>
  );
}
