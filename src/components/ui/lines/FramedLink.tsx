import Link from "next/link";
import React from "react";

type FramedLinkProps = {
  href: string;
  ariaLabel?: string;
  children: React.ReactNode;
  linkClassName?: string; // classes applied to the clickable area
  containerClassName?: string; // classes applied to the outer frame container
};

export default function FramedLink({
  href,
  ariaLabel,
  children,
  linkClassName =
    "mx-4 cursor-pointer bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 transition-colors flex justify-center",
  containerClassName = "max-w-3xl x-border mx-auto",
}: FramedLinkProps) {
  return (
    <div className="">
      <div className={containerClassName}>
        <div className=" b-border flex justify-between items-center">
          <div className="p-2 r-border "></div>
          <div className="p-2 l-border "></div>
        </div>
        <Link href={href} aria-label={ariaLabel} className={linkClassName}>
          <div className="font-medium text-sm py-1">{children}</div>
        </Link>
        <div className="t-border flex justify-between items-center">
          <div className="p-2 r-border"></div>
          <div className="p-2 l-border"></div>
        </div>
      </div>
    </div>
  );
}
