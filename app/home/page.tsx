import HomeClient from "./HomeClient";
import Banners from "./sessions/banners/banners";
import Header from "./sessions/header/Header";

export default function Page() {
  return (
    <>
      <Header />
      {/* <HomeClient /> */}
      <Banners />
    </>
  );
}
