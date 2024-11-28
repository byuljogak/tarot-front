import Image from "next/image";
import { CSSProperties, forwardRef, MouseEventHandler } from "react";

export default forwardRef<
  HTMLImageElement,
  {
    width?: number;
    isMini?: boolean;
    style?: CSSProperties;
    onClick?: MouseEventHandler<HTMLImageElement>;
  }
>(function Card({ width = 120, isMini = false, style, onClick }, ref) {
  const ratio = 1.6;
  const height = width * ratio;
  return (
    <Image
      className={`bg-black ${isMini ? "shadow-card-mini" : "shadow-card"}`}
      ref={ref}
      draggable={false}
      src={"/cardx1.png"}
      alt="Logo"
      width={width}
      height={height}
      style={{ ...style, width: width, height: height }}
      priority
      loading="eager"
      onClick={onClick}
    />
  );
});
