"use client"

import Marquee from "react-fast-marquee"
import { FaPython, FaReact, FaGit } from "react-icons/fa"
import { SiTypescript, SiPytorch, SiMysql, SiNextdotjs } from "react-icons/si"
import { BsFillBarChartFill } from "react-icons/bs"
import { VscAzure } from "react-icons/vsc"

export function TechStack() {
  return (
    <section className="bg-black rounded-xl p-6 overflow-hidden relative">
      <h2 className="text-2xl font-mono mb-4 text-center text-white">My Stack</h2>
      <div className="relative">
        {/* Fade Effect Left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black to-transparent z-20 pointer-events-none" />
        {/* Fade Effect Right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black to-transparent z-20 pointer-events-none" />
        <Marquee
          className="flex"
          speed={20}
          pauseOnHover={true}
          gradient={false}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              <div className="w-12 h-12 text-white flex justify-center items-center mx-4">
                <FaPython size={40} />
              </div>
              <div className="w-12 h-12 text-white flex justify-center items-center mx-4">
                <SiTypescript size={40} />
              </div>
              <div className="w-12 h-12 text-white flex justify-center items-center mx-4">
                <SiPytorch size={40} />
              </div>
              <div className="w-12 h-12 text-white flex justify-center items-center mx-4">
                <SiMysql size={40} />
              </div>
              <div className="w-12 h-12 text-white flex justify-center items-center mx-4">
                <SiNextdotjs size={40} />
              </div>
              <div className="w-12 h-12 text-white flex justify-center items-center mx-4">
                <FaReact size={40} />
              </div>
              <div className="w-12 h-12 text-white flex justify-center items-center mx-4">
                <FaGit size={40} />
              </div>
              <div className="w-12 h-12 text-white flex justify-center items-center mx-4">
                <BsFillBarChartFill size={40} />
              </div>
              <div className="w-12 h-12 text-white flex justify-center items-center mx-4">
                <VscAzure size={40} />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
