import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function ClickableLink({
  img,
  link,
  alt,
  width = 30,
  height = 30,
  children,
}: {
  img: string;
  link: string;
  alt: string;
  width?: number;
  height?: number;
  children?: ReactNode;
}) {
  return (
    <div>
      <Link
        href={link}
        target="_blank"
        referrerPolicy="no-referrer"
        className="flex gap-2 items-center"
      >
        <Image src={img} width={width} height={height} alt={alt} />
        <p className="hover:font-bold underline">{children}</p>
      </Link>
    </div>
  );
}
