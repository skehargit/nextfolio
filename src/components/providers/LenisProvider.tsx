"use client";
import { PropsWithChildren, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      lerp: 0.1,
    });

    let rafId = 0 as number | ReturnType<typeof requestAnimationFrame>;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId) cancelAnimationFrame(rafId as number);
      (lenis as unknown as { destroy?: () => void }).destroy?.();
    };
  }, []);

  return <>{children}</>;
}
