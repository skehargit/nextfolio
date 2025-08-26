"use client";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import ItalicLine from "@/components/ui/lines/ItalicLine";
import Title from "@/components/ui/lines/Title";
import SingleContainer from "@/components/ui/lines/SingleContainer";
import DoubleBoxLine from "@/components/ui/lines/DoubleBoxLine";
import About from "@/components/sections/About";
import SocialLinks from "@/components/sections/SocialLinks";
import GitHubCalendar from "react-github-calendar";
import Stacks from "@/components/sections/Stacks";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/shared/Navbar";
import { projects } from "@/data/projects";
import { chunkProjectArray } from "@/lib/arrayUtils";
import PairProject from "@/components/ui/PairProject";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import FramedLink from "@/components/ui/lines/FramedLink";
import HeroSection from "@/components/sections/HeroSection";
export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const colorScheme = useMemo(
    () => (resolvedTheme === "dark" ? "dark" : "light"),
    [resolvedTheme]
  );
  const pixelColor = resolvedTheme === "dark" ? "#000000" : "#ffffff";

  return (
    <div className="min-h-screen flex flex-col  ">
      <Navbar />
      <div className=" w-full">
        <div className="max-w-3xl h-[150px] x-border mx-auto dotted-bg flex items-center justify-center">
          <div className="font-sharpie-bold text-8xl">SSB</div>
        </div>
      </div>
      <HeroSection pixelColor={pixelColor} />
      <ItalicLine />
      <SingleContainer>
        <Contact />
      </SingleContainer>
      <Title title="About" />
      <SingleContainer>
        <About />
      </SingleContainer>
      <Title title="Stack" />
      <SingleContainer className="dotted-bg">
        <Stacks />
      </SingleContainer>
      <Title title="Github Contributions" />
      <SingleContainer>
        <div className="w-full flex justify-center">
          {mounted ? (
            <GitHubCalendar
              username="skehargit"
              blockSize={9}
              colorScheme={colorScheme}
              blockRadius={20}
              fontSize={12}
            />
          ) : (
            <div className="h-[120px] w-full max-w-[700px]" aria-hidden />
          )}
        </div>
      </SingleContainer>
      <Title title="Project" />
      <DoubleBoxLine />
      {chunkProjectArray(projects.slice(0, 4), 2).map((pair, idx) => (
        <div key={`home-pair-${idx}`}>
          <PairProject pair={pair} idx={idx} />
          <DoubleBoxLine />
        </div>
      ))}
      <FramedLink href="/projects" ariaLabel="View all projects">
        View all projects
      </FramedLink>
      <Title title="Experience" />
      <ExperienceSection />
      <Title title="Education" />
      <EducationSection />
      <Title title="Link" />
      <SocialLinks />
      <DoubleBoxLine />
      <DoubleBoxLine />
    </div>
  );
}
