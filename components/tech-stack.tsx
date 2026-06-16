import { FaPython, FaReact, FaGit } from "react-icons/fa"
import { SiTypescript, SiPytorch, SiMysql, SiNextdotjs } from "react-icons/si"
import { BsFillBarChartFill } from "react-icons/bs"
import { VscAzure } from "react-icons/vsc"

const icons = [
  { Icon: FaPython, name: "Python" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiPytorch, name: "PyTorch" },
  { Icon: SiMysql, name: "MySQL" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: FaReact, name: "React" },
  { Icon: FaGit, name: "Git" },
  { Icon: BsFillBarChartFill, name: "Analytics" },
  { Icon: VscAzure, name: "Azure" },
]

function Track({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {icons.map(({ Icon, name }) => (
        <div
          key={name}
          title={name}
          className="mx-6 flex h-12 w-12 items-center justify-center text-white/80"
        >
          <Icon size={38} />
        </div>
      ))}
    </div>
  )
}

export function TechStack() {
  return (
    <section>
      <h2 className="eyebrow mb-6">Tech Stack</h2>
      <div className="group relative overflow-hidden">
        {/* edge fade masks (functional, not decorative) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />
        <div className="flex w-max animate-marquee will-change-transform group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <Track />
          <Track ariaHidden />
        </div>
      </div>
    </section>
  )
}
