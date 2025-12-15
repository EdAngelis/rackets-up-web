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
      <BasicSession 
        title="Bring your game into the new era"
        subTitle="leave the analog behind, generate data from your match."
        description="Score in Real time, get statistics and measure your performance every match."
        image="/images/tablet-statistics.png"
      />
      <ImageSection
        title="Stop wasting time and mental energy"
        subTitle="free your mind and play your best"
        image="/images/arguing.png"
        textPosition="Bottom"
      />
      <BasicSession 
        title="For clubs & courts"
        subTitle="Manage your courts and players"
        description={`
        Allow members to book courts |
        Create Tournaments and Rankings |
        Post Updates and News |
        Send Notifications to members |
        `}
        image="/images/tennis-club.jpeg"
      />
      <Footer />
    </>
  );
}
