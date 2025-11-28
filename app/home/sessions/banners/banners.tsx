import fs from "fs";
import path from "path";
import BannerCarousel from "../../../../components/elements/BannerCarousel/BannerCarousel";

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
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "1rem" }}>
      <BannerCarousel images={images} intervalMs={4000} />
    </div>
  );
}
