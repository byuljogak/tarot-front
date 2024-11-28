import Link from "next/link";
import { memo, MouseEventHandler } from "react";

export default memo(function Button({
  href,
  onClick,
  children,
}: {
  href?: string;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
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
});
