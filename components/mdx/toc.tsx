"use client"

import { useEffect, useState } from 'react'
import { Text } from '@geist-ui/core'

interface TocItem {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    // Function to get all headings
    const getHeadings = () => {
      const elements = Array.from(document.querySelectorAll('h1, h2, h3'))
        .map(element => ({
          id: element.id,
          text: element.textContent || '',
          level: Number(element.tagName.charAt(1))
        }))
      setHeadings(elements)
    }

    // Initial load of headings
    getHeadings()

    // Set up intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { 
        rootMargin: '-20% 0px -35% 0px',
        threshold: 0.5
      }
    )

    // Observe all headings
    headings.forEach(heading => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    // Cleanup
    return () => observer.disconnect()
  }, [headings.length])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -100 // Adjust this value based on your header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setActiveId(id)
    }
  }

  if (headings.length === 0) return null

  return (
    <nav className="hidden lg:block sticky top-20 ml-8 space-y-4 max-w-[200px]">
      <Text h4>On this page</Text>
      <ul className="space-y-2 text-sm">
        {headings.map(heading => (
          <li 
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 1) * 1}rem` }}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={`block py-1 text-gray-500 hover:text-gray-100 transition-colors ${
                activeId === heading.id ? 'text-blue-500 font-medium' : ''
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
