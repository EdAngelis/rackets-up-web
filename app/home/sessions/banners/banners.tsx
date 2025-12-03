import fs from "fs";
import path from "path";
import Image from "next/image";
import BannerCarousel from "../../../../components/elements/BannerCarousel/BannerCarousel";
import PlayStoreButton from "../../../../components/elements/PlayStoreButton/PlayStoreButton";
import AppleStoreButton from "../../../../components/elements/AppleStoreButton/AppleStoreButton";
import TypeWriter from "../../../../components/elements/typing/typing";

export default function Banners() {
  const bannersDir = path.join(process.cwd(), "public", "images", "banners");

  let images: string[] = [];
  if (fs.existsSync(bannersDir)) {
    images = fs
      .readdirSync(bannersDir)
      .filter((f) => /\.(png|jpe?g|webp|gif|svg)$/i.test(f))
      .map((f) => `/images/banners/${encodeURIComponent(f)}`);
  }

  if (images.length === 0) {
    return <div>No banner images found in /public/images/banners</div>;
  }

  return (
    <div style={{ margin: "0 auto", padding: "0.3rem" }}>
      <BannerCarousel images={images} intervalMs={4000}>
        <div className="flex flex-row items-center justify-center w-full h-full px-4">
          <div className="relative flex flex-col gap-4 items-center z-20 h-full justify-end">
            <div className="absolute flex-1 top-10 left-[-30px]">
              <div className="text-white font-roboto text-[18px]">
                For all Rackets Sports
              </div>
              <TypeWriter
                text={[
                  {
                    static: "",
                    typeText:
                      "Enroll in Tournaments |Get Statistics |Free your mind",
                  },
                ]}
                delay={100}
                infinite={true}
                pause={900}
              />
            </div>
            <div className="relative flex flex-col bottom-10 gap-3">
              <PlayStoreButton />
              <AppleStoreButton />
            </div>
          </div>
          <div className="relative flex justify-center items-end">
            <div className="relative w-[70px] h-[70px] z-10 left-10">
              <Image
                src="/images/watch-no-background.png"
                alt="Watch"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative w-[100px] h-[200px]">
              <Image
                src="/images/mobile-no-background.png"
                alt="Mobile"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </BannerCarousel>
    </div>
  );
}
