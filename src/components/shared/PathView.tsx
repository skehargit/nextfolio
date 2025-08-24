"use client";
import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

type PathViewProps = {
  nextHref?: string;
  nextLabel?: string;
  className?: string;
};

const PathView: React.FC<PathViewProps> = ({ nextHref, nextLabel = "Next", className = "" }) => {
  const router = useRouter();
  const pathname = usePathname();

  const segments = (pathname || "/")
    .split("/")
    .filter(Boolean);

  const crumbs = [
    { label: "Home", href: "/" },
    ...segments.map((seg, idx) => {
      const href = "/" + segments.slice(0, idx + 1).join("/");
      // Capitalize segment for display
      const label = seg.replace(/[-_]/g, " ").replace(/^./, (c) => c.toUpperCase());
      return { label, href };
    }),
  ];

  const nextDisabled = !nextHref;

  return (
    <div className={`b-border ${className}`}>
      <div className="max-w-3xl mx-auto p-1 x-border flex items-center justify-between gap-3">
        {/* Breadcrumb */}
        <nav className="px-4 py-2 text-sm overflow-x-auto whitespace-nowrap no-scrollbar" aria-label="Breadcrumb">
          {crumbs.map((c, i) => (
            <span key={c.href} className="text-muted-foreground">
              <Link href={c.href} className="hover:underline">
                {c.label}
              </Link>
              {i < crumbs.length - 1 && <span className="mx-1">/</span>}
            </span>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center h-full">
          <button
            type="button"
            onClick={() => router.back()}
            className="font-medium cursor-pointer py-1 px-3  text-sm bg-zinc-200 text-zinc-900 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 transition-colors"
            aria-label="Go back"
          >
            Back
          </button>
          {nextDisabled ? (
            <span
              aria-disabled
              className="font-medium  py-1 px-3  text-sm bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 opacity-40 cursor-not-allowed select-none"
            >
              {nextLabel}
            </span>
          ) : (
            <Link
              href={nextHref!}
              className="font-medium cursor-pointer py-1 px-3  text-sm bg-zinc-200 text-zinc-900 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 transition-colors"
              aria-label={`Go to ${nextLabel}`}
            >
              {nextLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PathView;