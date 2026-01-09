"use client"

import Marquee from "react-fast-marquee"
import { FaPython, FaReact, FaGit } from "react-icons/fa"
import { SiTypescript, SiPytorch, SiMysql, SiNextdotjs } from "react-icons/si"
import { BsFillBarChartFill } from "react-icons/bs"
import { VscAzure } from "react-icons/vsc"
import { memo } from "react"

const TechIcon = memo(function TechIcon({ Icon, name }: { Icon: any; name: string }) {
  return (
    <div className="w-12 h-12 text-white flex justify-center items-center mx-4 will-change-transform">
      <Icon size={40} />
    </div>
  )
})

export const TechStack = memo(function TechStack() {
  return (
    <section className="bg-black rounded-xl p-6 overflow-hidden relative">
      <h2 className="text-2xl font-mono mb-4 text-center text-white">My Tech Stack</h2>
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
          style={{ willChange: 'transform' }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex" style={{ transform: 'translateZ(0)' }}>
              <TechIcon Icon={FaPython} name="Python" />
              <TechIcon Icon={SiTypescript} name="TypeScript" />
              <TechIcon Icon={SiPytorch} name="PyTorch" />
              <TechIcon Icon={SiMysql} name="MySQL" />
              <TechIcon Icon={SiNextdotjs} name="Next.js" />
              <TechIcon Icon={FaReact} name="React" />
              <TechIcon Icon={FaGit} name="Git" />
              <TechIcon Icon={BsFillBarChartFill} name="Analytics" />
              <TechIcon Icon={VscAzure} name="Azure" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
})
