import Link from "next/link"
import { getAllWriting } from "@/lib/writing"

export async function SiteNav() {
  const hasWriting = (await getAllWriting()).length > 0

  const links = [
    { href: "/", label: "Home" },
    { href: "/#projects", label: "Projects" },
    ...(hasWriting ? [{ href: "/writing", label: "Writing" }] : []),
    { href: "/cv", label: "CV" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-white transition-opacity hover:opacity-70"
        >
          Pradyut Nair
        </Link>
        <ul className="flex items-center gap-5 sm:gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
