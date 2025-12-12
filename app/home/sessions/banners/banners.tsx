import fs from "fs";
import path from "path";
import Image from "next/image";
import BannerCarousel from "../../../../components/elements/BannerCarousel/BannerCarousel";
import PlayStoreButton from "../../../../components/elements/PlayStoreButton/PlayStoreButton";
import AppleStoreButton from "../../../../components/elements/AppleStoreButton/AppleStoreButton";

import styles from "./banners.module.css";

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
    <div className={styles.wrapper}>
      <BannerCarousel images={images} intervalMs={4000}>
      <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <div className={styles.textOverlay}>
              <h1 className={styles.title}>For all Rackets Sports</h1>
              <p className={styles.subTitle}>For Players, Clubs & Coaches</p>
            </div>
            <div className={styles.storeButtons}>
              <PlayStoreButton />
              <AppleStoreButton />
            </div>
          </div>
          <div className={styles.imagesWrapper}>
            <div className={styles.watchImage}>
              <Image
                src="/images/watch-no-background.png"
                alt="Watch"
                fill
                className={styles.imageContain}
              />
            </div>
            <div className={styles.mobileImage}>
              <Image
                src="/images/mobile-no-background.png"
                alt="Mobile"
                fill
                className={styles.imageContain}
              />
            </div>
          </div>
        </div>
      </BannerCarousel>
    </div>
  );
}
