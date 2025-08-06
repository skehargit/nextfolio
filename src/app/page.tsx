"use client";
import React from "react";
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
export default function Home() {
  const { resolvedTheme } = useTheme();
  const pixelColor = resolvedTheme === "dark" ? "#000000" : "#ffffff";
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
        <div className="text-sm space-y-6 text-left">
          <p className="leading-relaxed">
            Hi, I’m <span className=" pb-0.5">Sudhansu Sekhar Behera</span> — a
            passionate <span className=" pb-0.5">MERN stack developer</span>
          </p>

          <p className="leading-relaxed">
            I work with a wide range of tools and technologies including{" "}
            <span className=" pb-0.5">React</span>,{" "}
            <span className=" pb-0.5">Next.js</span>,{" "}
            <span className=" pb-0.5">JavaScript</span>,{" "}
            <span className=" pb-0.5">TypeScript</span>,{" "}
            <span className=" pb-0.5">Node.js</span>,{" "}
            <span className=" pb-0.5">Express</span>,{" "}
            <span className=" pb-0.5">MongoDB</span>,{" "}
            <span className=" pb-0.5">Redux</span>,{" "}
            <span className=" pb-0.5">Django</span>,{" "}
            <span className=" pb-0.5">HTML</span>,{" "}
            <span className=" pb-0.5">CSS</span>,{" "}
            <span className=" pb-0.5">Tailwind CSS</span>,{" "}
            <span className=" pb-0.5">GSAP</span>,{" "}
            <span className=" pb-0.5">Framer Motion</span>, and{" "}
            <span className=" pb-0.5">Photoshop</span>.
          </p>

          <p className="leading-relaxed">
            Currently, I’m interning at two amazing companies:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              🖥️ <span className=" pb-0.5">Frontend Developer at</span>{" "}
              <a
                href="https://mrpshop.in"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                mrpshop.in
              </a>{" "}
              – contributing to modern UI development using{" "}
              <span className=" pb-0.5">React</span> +{" "}
              <span className=" pb-0.5">Tailwind CSS</span>. Also working on the
              backend with <span className=" pb-0.5">Django</span> and
              implementing AI for{" "}
              <span className=" pb-0.5">text generation</span>,{" "}
              <span className=" pb-0.5">image generation</span>, and{" "}
              <span className=" pb-0.5">content automation</span>. Currently
              exploring and optimizing AI tools for the MRP system.
            </li>

            <li>
              🎮 <span className=" pb-0.5">Game Developer at</span>{" "}
              <a
                href="https://eklavya.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                eklavya.me
              </a>{" "}
              – building games with React + Tailwind CSS.
            </li>
          </ul>

          <p className="leading-relaxed">
            I regularly explore design platforms like{" "}
            <span className=" pb-0.5">Pinterest</span>,{" "}
            <span className=" pb-0.5">dribbble.com</span>, and{" "}
            <span className=" pb-0.5">awwwards.com</span> to stay inspired and
            keep my UI skills sharp.
          </p>

          <p className="leading-relaxed">
            I’m always open to <span className=" pb-0.5">collaboration</span>,{" "}
            <span className=" pb-0.5">learning</span>, and{" "}
            <span className=" pb-0.5">new opportunities</span>. Let’s connect
            and build something amazing together! 🚀
          </p>
        </div>
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
        <div>
          <div>
            <span>logo</span>
            <span>mrpshop.in</span>
          </div>
          <div>
            <div>
              frontend developer
              <span>Internship | 2024-present</span>
            </div>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                repudiandae.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                repudiandae.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                repudiandae.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                repudiandae.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                repudiandae.
              </li>
            </ul>
          </div>
        </div>
      </SingleContainer>
      <SingleContainer>
        <div>
          <div>
            <span>logo</span>
            <span>mrpshop.in</span>
          </div>
          <div>
            <div>
              frontend developer
              <span>Internship | 2024-present</span>
            </div>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                repudiandae.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                repudiandae.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                repudiandae.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                repudiandae.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                repudiandae.
              </li>
            </ul>
          </div>
        </div>
      </SingleContainer>
      <SingleContainer>
        <div>
          <div>
            <span>logo</span>
            <span>mrpshop.in</span>
          </div>
          <div>
            <div>
              frontend developer
              <span>Internship | 2024-present</span>
            </div>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                repudiandae.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                repudiandae.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                repudiandae.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                repudiandae.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                repudiandae.
              </li>
            </ul>
          </div>
        </div>
      </SingleContainer>
      <ItalicLine />
      <Title title="Education" />
      <SingleContainer>
        <div>
          <div>
            <span>logo</span>
            <span>mrpshop.in</span>
          </div>
          <div>
            <div>
              Mecanical engineer
              <span>Internship | 2024-present</span>
            </div>
          </div>
        </div>
      </SingleContainer>
      <SingleContainer>
        <div>
          <div>
            <span>logo</span>
            <span>mrpshop.in</span>
          </div>
          <div>
            <div>
              Mecanical engineer
              <span>Internship | 2024-present</span>
            </div>
          </div>
        </div>
      </SingleContainer>
      <ItalicLine />
      <Title title="Link" />
      <DoubleBoxLine />
      <div className="y-border">
        <div className=" w-full  gap-4 grid grid-cols-2 mx-auto max-w-3xl ">
          <div className="h-full x-border p-2">
            <div>
              <h2>logo</h2>
              <div>
                <span>linkedin</span>
                <span>sudhansu sekhar behera</span>
              </div>
            </div>
          </div>
          <div className="h-full x-border p-2">
            <div>
              <h2>github logo</h2>
              <div>
                <span>github</span>
                <span>@skehargit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DoubleBoxLine />
    </div>
  );
}
