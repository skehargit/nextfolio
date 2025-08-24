"use client";
import { useEffect, useMemo, useState } from "react";
import TextType from "@/components/ui/text/TextType/TextType";
import PixelTransition from "@/components/ui/text/PixelTransition/PixelTransition";
import { useTheme } from "next-themes";
import ItalicLine from "@/components/ui/lines/ItalicLine";
import Title from "@/components/ui/lines/Title";
import SingleContainer from "@/components/ui/lines/SingleContainer";
import DoubleBoxLine from "@/components/ui/lines/DoubleBoxLine";
import MainProjectContainer from "@/components/ui/MainProjectContainer";
import MainPjConWrapper from "@/components/ui/lines/MainPjConWrapper";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import SocialLinks from "@/components/sections/SocialLinks";
import GitHubCalendar from "react-github-calendar";
import Image from "next/image";
import Link from "next/link";
import Stacks from "@/components/sections/Stacks";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/shared/Navbar";
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
      <Navbar/>

      <div className=" w-full">
        <div className="max-w-3xl h-[150px] x-border mx-auto dotted-bg flex items-center justify-center">
          <div className="font-sharpie-bold text-8xl">SSB</div>
        </div>
      </div>

      <div className="y-border">
        <div className="max-w-3xl flex x-border mx-auto ">
          <div className="border-r border-zinc-800">
            <div className="border border-zinc-800 p-1 rounded-full w-fit">
              <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                <PixelTransition
                  firstContent={
                    <Image
                      src="/images/profile-ghibli.jpg"
                      alt="default pixel transition content, a cat!"
                      width={150}
                      height={150}
                      className="object-cover"
                    />
                  }
                  secondContent={
                    <Image
                      src="/images/profile.jpg"
                      alt="default pixel transition content, a cat!"
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
              <div className="text-3xl pl-4 y-border">
                Sudhansu Sekhar Behera
              </div>
              <div className="pl-4">
                <TextType
                  text={[
                    "Frontend Developer",
                    "Backend Developer",
                    "Fullstack Developer",
                    "ReactJs Developer",
                    "ReactJs Game Developer",
                  ]}
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
      <ItalicLine />
      <SingleContainer>
        <Contact/>
      </SingleContainer>
      <ItalicLine />
      <Title title="About" />
      <SingleContainer>
        <About />
      </SingleContainer>
      <ItalicLine />
      <Title title="Stack" />
      <SingleContainer className="dotted-bg">
        <Stacks />
      </SingleContainer>
      <ItalicLine />
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
      <ItalicLine />

      <Title title="Project" />
      <DoubleBoxLine />
      <MainPjConWrapper>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
          <MainProjectContainer />
          <MainProjectContainer />
        </div>
      </MainPjConWrapper>
      <DoubleBoxLine />
      <MainPjConWrapper>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
          <MainProjectContainer />
          <MainProjectContainer />
        </div>
      </MainPjConWrapper>
      <DoubleBoxLine />
      <div className="y-border ">
        <div className=" max-w-3xl  h-[40px] flex items-center justify-center  x-border mx-auto">
          <Link
            href="/projects"
            className="font-medium py-1 px-4 cursor-pointer text-sm w-fit
            bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100
            transition-colors "
            aria-label="View all projects"
          >
            view all projects
          </Link>
        </div>
      </div>
      <ItalicLine />
      <Title title="Experience" />
      <SingleContainer>
        <Experience
          logoSrc="https://eklavya.me/wp-content/uploads/2023/05/eklogoup.png"
          company="eklavya.me"
          website="https://eklavya.me"
          position="Game Developer"
          type="Internship"
          duration="Jul 2024 - Present"
          description={[
            "Developing interactive and child-friendly games using React.",
            "Enhancing gameplay experience with engaging animations and smooth UI.",
            "Fixing existing bugs and improving performance of deployed games.",
          ]}
        />
      </SingleContainer>
      <SingleContainer>
        <Experience
          logoSrc="https://res.cloudinary.com/db7pikwo4/image/upload/v1754579764/MRPICON_dhyfzz.jpg"
          company="mrpshop.in"
          website="https://mrpshop.in"
          position="Frontend Developer"
          type="Internship"
          duration="Nov 2024 - Present"
          description={[
            "Contributing to both frontend and backend development of MRP Shop, Seller, and Customer platforms.",
            "Designing and developing responsive, user-friendly interfaces using React, Tailwind CSS, and modern design practices.",
            "Integrating AI-powered features into the backend with Django, including OpenAI, Gemini, and Ideogram APIs.",
            "Implementing image generation, text generation, and dynamic JSON data generation features based on user location.",
          ]}
        />
      </SingleContainer>
      <SingleContainer>
        <Experience
          logoSrc="https://res.cloudinary.com/db7pikwo4/image/upload/v1754579904/1721203270689_cjmvud.jpg"
          company="highimpacttalent.com"
          website="https://highimpacttalent.com"
          position="Fullstack Developer"
          type="Internship"
          duration="Jul 2024 - Aug 2024"
          description={[
            "Built a full-stack web application from scratch using the MERN stack (MongoDB, Express, React, Node.js).",
            "Designed and developed responsive frontend pages with React and Tailwind CSS.",
            "Implemented backend APIs with Node.js and Express for smooth data flow.",
            "Deployed and tested the complete website.",
          ]}
        />
      </SingleContainer>

      <ItalicLine />
      <Title title="Education" />
      <SingleContainer>
        <Education
          logoSrc="https://vitam.edu.in/vitam/wp-content/uploads/2025/06/VITAM-LOGO-32x32.png"
          name="Vignan Institute of Technology and Management"
          course="B.Tech in Mechanical Engineering"
          type="Full-time"
          duration="2022 - 2025"
        />
      </SingleContainer>
      <SingleContainer>
        <Education
          logoSrc="https://www.aumsaiengineering.co.in/images/favicon.png"
          name="AUM SAI INSTITUTE OF TECHNICAL EDUCATION"
          course="Diploma in Mechanical Engineering"
          type="Full-time"
          duration="2019 - 2022"
        />
      </SingleContainer>
      <ItalicLine />
      <Title title="Link" />
      <DoubleBoxLine />
      <SocialLinks />

      <DoubleBoxLine />
    </div>
  );
}
