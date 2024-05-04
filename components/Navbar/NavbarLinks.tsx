"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinksProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLinks({ href, children }: LinksProps) {
  const pathname = usePathname();
  return (
    <Link
      className={`${
        pathname == href && "font-bold"
      } inline-block text-black  dark:text-white  hover:text-gray-600  dark:hover:text-neutral-300`}
      href={href}
      aria-current="page"
    >
      {children}
    </Link>
  );
}
