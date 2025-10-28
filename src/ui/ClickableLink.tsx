import Image from "next/image";
import Link from "next/link";

export default function ClickableLink({
  img,
  link,
  alt,
  width = 30,
  height = 30,
}: {
  img: string;
  link: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <div>
      <Link href={link} target="_blank" referrerPolicy="no-referrer">
        <Image src={img} width={width} height={height} alt={alt} />
      </Link>
    </div>
  );
}
