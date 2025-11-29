// Type declarations for static asset imports (CSS, images, fonts)
declare module "*.css";
declare module "*.scss";
declare module "*.module.css";
declare module "*.module.scss";

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.webp";
declare module "*.avif";

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.woff";
declare module "*.woff2";
declare module "*.eot";
declare module "*.ttf";

export {};
