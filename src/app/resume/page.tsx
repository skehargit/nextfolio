"use client";
import Navbar from "@/components/shared/Navbar";
import Title from "@/components/ui/lines/Title";
import PathView from "@/components/shared/PathView";
import { useState } from "react";
import ItalicLine from "@/components/ui/lines/ItalicLine";

export default function ResumePage() {
  const fileId = "1cDNr60aOtv0UgfgFj9gZUVzhH5JGmja9";
  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const viewUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(viewUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PathView />
      <Title title="Resume" />
      <div className="w-full max-w-3xl mx-auto x-border p-4 space-y-3">
        <div className="flex justify-center gap-2">
          <a
            href={downloadUrl}
            className="font-medium py-1 px-3 rounded-full text-sm w-fit bg-zinc-200 text-zinc-900 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 transition-colors"
            aria-label="Download Resume"
          >
            Download
          </a>
          <button
            onClick={onCopy}
            className="font-medium py-1 px-3 rounded-full text-sm w-fit bg-zinc-200 text-zinc-900 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 transition-colors"
            aria-label="Copy Resume Link"
            type="button"
          >
            {copied ? "Copied!" : "Copy link"}
          </button>
          <a
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium py-1 px-3 rounded-full text-sm w-fit bg-zinc-200 text-zinc-900 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 transition-colors"
            aria-label="Open Resume in new tab"
          >
            Open in new tab
          </a>
        </div>
        <div className="w-full aspect-[8.5/11] s-border rounded-md overflow-hidden bg-background">
          <iframe
            title="Resume Preview"
            src={previewUrl}
            className="w-full h-full"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
}
