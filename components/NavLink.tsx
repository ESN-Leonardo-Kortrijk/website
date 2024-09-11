"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  title,
  color,
}: {
  href: string;
    title: string;
    color: string;
}) {
    const currentPath = usePathname().split("/")[1];
  return (
    <Link className={"/"+currentPath === href ? `border-b-2 border-${color}` : `hover:border-b-2 hover:border-${color} `} href={href}>
      <p>{title}</p>
    </Link>
  );
}