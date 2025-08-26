"use client";
import React from "react";
import Image from "next/image";
import PixelTransition from "@/components/ui/text/PixelTransition/PixelTransition";
import TextType from "@/components/ui/text/TextType/TextType";
import hero from "@/data/hero";

export default function HeroSection({ pixelColor }: { pixelColor: string }) {
  return (
    <div className="y-border">
      <div className="max-w-3xl flex x-border mx-auto ">
        <div className="border-r border-zinc-800">
          <div className="border border-zinc-800 p-1 rounded-full w-fit">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
              <PixelTransition
                firstContent={
                  <Image
                    src={hero.firstImageSrc}
                    alt="profile image"
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                }
                secondContent={
                  <Image
                    src={hero.secondImageSrc}
                    alt="profile image"
                    width={150}
                    height={150}
                    className="-translate-y-2 object-cover"
                  />
                }
                gridSize={12}
                pixelColor={pixelColor}
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="italic-lines-bg h-24 w-full"></div>
          <div>
            <div className="text-3xl pl-4 y-border">{hero.name}</div>
            <div className="pl-4">
              <TextType
                text={hero.titles}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
