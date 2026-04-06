import ClickableLink from "./ClickableLink";
import { links } from "@/public/links";

export default function Footer() {
  return (
    <div className="flex justify-between w-9/12 mx-auto pb-4.5 items-start">
      <p>Developed by Felipe Mantovani 2025</p>
      <div className="flex gap-4 items-center">
        {links.map(({ img, link, alt }) => (
          <ClickableLink key={link} img={img} link={link} alt={alt} />
        ))}
      </div>
    </div>
  );
}
