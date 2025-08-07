"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";
import TextType from "@/components/ui/text/TextType/TextType";
import PixelTransition from "@/components/ui/text/PixelTransition/PixelTransition";
import { useTheme } from "next-themes";
import { MapPin, Phone, Mail, FileText } from "lucide-react";
import ItalicLine from "@/components/ui/ItalicLine";
import Title from "@/components/ui/Title";
import SingleContainer from "@/components/ui/SingleContainer";
import DoubleBoxLine from "@/components/ui/DoubleBoxLine";
import MainProjectContainer from "@/components/ui/MainProjectContainer";
import MainPjConWrapper from "@/components/ui/MainPjConWrapper";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import SocialLinks from "@/components/sections/SocialLinks";
export default function Home() {
  const { resolvedTheme } = useTheme();
  const pixelColor = resolvedTheme === "dark" ? "#000000" : "#ffffff";
  useEffect(() => {
    if (typeof window === "undefined") return;
    const lenis = new Lenis({
      lerp: 0.1,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="min-h-screen flex flex-col  ">
      <div className="y-border h-12 mt-2">
        <div className="max-w-3xl x-border h-full mx-auto flex justify-between items-center">
          <div className="px-4">
            <div className="font-sharpie-bold text-2xl">SSB</div>
          </div>
          <ThemeToggleButton variant="circle" start="center" />
        </div>
      </div>

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
                    <img
                      src="/profile-ghibli.jpg"
                      alt="default pixel transition content, a cat!"
                    />
                  }
                  secondContent={
                    <img
                      src="/profile.jpg"
                      alt="default pixel transition content, a cat!"
                      className="-translate-y-2"
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
        <ul className="space-y-4">
          <li className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 " />
            <span className="">From Odisha, India</span>
          </li>
          <li className="flex items-center space-x-3">
            <Mail className="w-5 h-5 " />
            <span className="">sudhansusekharweb@gmail.com</span>
          </li>
          <li className="flex items-center space-x-3">
            <Phone className="w-5 h-5 " />
            <span className="">9876543210</span>
          </li>
          <li className="flex items-center space-x-3">
            <FileText className="w-5 h-5 " />
            <span className="">Resume</span>
          </li>
        </ul>
      </SingleContainer>
      <ItalicLine />
      <Title title="About" />
      <SingleContainer>
        <About />
      </SingleContainer>
      <ItalicLine />
      <Title title="Stack" />
      <SingleContainer>
        <ul>
          <li>
            <span>From odisha,India</span>
          </li>
          <li>
            <span>sudhansusekharweb@gmail.com</span>
          </li>
          <li>
            <span>9876543210</span>
          </li>
          <li>
            <span>resume</span>
          </li>
        </ul>
      </SingleContainer>
      <ItalicLine />
      <Title title="Projects" />
      <DoubleBoxLine />
      <MainPjConWrapper>
        <div className="gap-4 grid grid-cols-2">
          <MainProjectContainer />
          <MainProjectContainer />
        </div>
      </MainPjConWrapper>
      <DoubleBoxLine />
      <MainPjConWrapper>
        <div className="gap-4 grid grid-cols-2">
          <MainProjectContainer />
          <MainProjectContainer />
        </div>
      </MainPjConWrapper>
      <DoubleBoxLine />
      <div className="y-border">
        <div className="max-w-3xl  h-[25px] x-border mx-auto">
          view all projects
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
          duration="Jul 2024 - Present"
          description={[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae.",
          ]}
        />
      </SingleContainer>
      <SingleContainer>
        <Experience
          logoSrc="https://res.cloudinary.com/db7pikwo4/image/upload/v1754579764/MRPICON_dhyfzz.jpg"
          company="mrpshop.in"
          website="https://mrpshop.in"
          position="Frontend Developer"
          duration="Nov 2024 - Present"
          description={[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae.",
          ]}
        />
      </SingleContainer>
      <SingleContainer>
        <Experience
          logoSrc="https://res.cloudinary.com/db7pikwo4/image/upload/v1754579904/1721203270689_cjmvud.jpg"
          company="highimpacttalent.com"
          website="https://highimpacttalent.com"
          position="Fullstack Developer"
          duration="Jul 2024 - Aug 2024"
          description={[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae.",
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
          duration="2022 - 2025"
        />
      </SingleContainer>
      <SingleContainer>
        <Education
          logoSrc="https://www.aumsaiengineering.co.in/images/favicon.png"
          name="AUM SAI INSTITUTE OF TECHNICAL EDUCATION"
          course="Diploma in Mechanical Engineering"
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
