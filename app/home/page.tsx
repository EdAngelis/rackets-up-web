import HomeClient from "./HomeClient";
import Banners from "./sessions/banners/banners";
import Header from "./sessions/header/Header";
import Footer from "../../components/footer/footer";

export default function Page() {
  return (
    <>
      <Header />
      {/* <HomeClient /> */}
      <Banners />
      <Footer />
    </>
  );
}
