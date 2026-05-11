"use client";
import NavbarLink from "./NavbarLinks";
import { usePathname } from "next/navigation";

const paths = [
  { link: "Home", path: "/" },
  { link: "Projects", path: "/projects" },
  { link: "About Me", path: "/about" },
];

function getTitle(route: string) {
  if (route === "/") return "Software Developer";
  const path = paths.find(({ path }) => path === route);
  return path ? path.link : "";
}

export default function Navbar() {
  return (
    <header
      className="w-full bg-[var(--bg-clr)] flex flex-col items-center"
      style={{ clipPath: "ellipse(65% 100% at 50% 0%)" }}
    >
      <nav className="flex justify-between w-4/5 px-4">
        <h2 className="text-[var(--foreground)] text-2xl font-play not-italic font-bold py-6">
          Felipe Mantovani
        </h2>

        <div className="text-[var(--foreground)] flex gap-4 items-center">
          {paths.map(({ path, link }) => (
            <NavbarLink key={link} link={link} path={path} />
          ))}
        </div>
      </nav>
      <h1 className="main-title text-[var(--foreground)] font-play not-italic font-bold text-6xl leading-16 p-16 ">
        {getTitle(usePathname())}
      </h1>
    </header>
  );
}
