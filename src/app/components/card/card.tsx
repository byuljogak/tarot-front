import Image from "next/image";

export default function Card({
  width = 120,
  height = 150,
  isMini = false,
  onClick,
}: {
  width?: number;
  height?: number;
  isMini?: boolean;
  onClick?: () => void;
}) {
  return (
    <Image
      className={`bg-black ${isMini ? "shadow-card-mini" : "shadow-card"}`}
      draggable={false}
      src={"/cardx1.png"}
      alt="Logo"
      width={width}
      height={height}
      onClick={onClick}
    />
  );
}
