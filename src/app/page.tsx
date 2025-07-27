import React from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* <Navbar /> */}
      <div className=" max-w-6xl mx-auto">
        <Hero />
        {/* <About/> */}
        {/* <Education />
      <Skills />
      <Experience /> */}
        <div className="border rounded-3xl p-2 border-zinc-800 text-white">
          <div className="bg-[#232323] rounded-2xl p-6">
            <div className="font-opensans-bold rounded-full px-4 w-fit border border-white/10 text-2xl">
              Major projects
            </div>
            <div className="grid grid-cols-3 gap-4 p-4 ">
              <div className="bg-[#252525] p-1 rounded-2xl max-w-xs shadow-lg shadow-black/30 border border-white/5 w-full">
                <div className="border-3 border-[#3e3e3e] shadow-lg shadow-black/20 rounded-xl aspect-video overflow-hidden w-full">
                  <img
                    src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </div>
                <div className="px-2 py-6">
                  <h2>Project Name</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Expedita, commodi!
                  </p>
                </div>
              </div>
              <div className="bg-[#252525] p-1 rounded-2xl max-w-xs shadow-lg shadow-black/30 border border-white/5 w-full">
                <div className="border-3 border-[#3e3e3e] shadow-lg shadow-black/20 rounded-xl aspect-video overflow-hidden w-full">
                  <img
                    src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </div>
                <div className="px-2 py-6">
                  <h2>Project Name</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Expedita, commodi!
                  </p>
                </div>
              </div>
              <div className="bg-[#252525] p-1 rounded-2xl max-w-xs shadow-lg shadow-black/30 border border-white/5 w-full">
                <div className="border-3 border-[#3e3e3e] shadow-lg shadow-black/20 rounded-xl aspect-video overflow-hidden w-full">
                  <img
                    src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </div>
                <div className="px-2 py-6">
                  <h2>Project Name</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Expedita, commodi!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
