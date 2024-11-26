import Link from "next/link";

export default function Button({
  href,
  onClick,
  children,
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      onClick={onClick}
      className="block w-20 h-11 bg-black shadow-custom-button text-white content-center text-center rounded-lg"
    >
      {href ? (
        <Link href={href} className="full-size flex-center">
          {children}
        </Link>
      ) : (
        children
      )}
    </div>
  );
}
