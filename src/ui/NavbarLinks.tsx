"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavbarLink({
  link,
  path,
}: {
  link: string;
  path: string;
}) {
  const route = usePathname();

  return (
    <Link
      href={path}
      className={`text-[var(--foreground)] px-6 py-2 font-play text-xl ${path === route && "outline-2 outlien-[var(--foreground)] rounded-[28px]"}`}
    >
      {link}
    </Link>
  );
}
