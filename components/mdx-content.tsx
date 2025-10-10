"use client"

import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { CodeBlock } from './mdx/code-block'

interface MDXContentProps {
  source: MDXRemoteSerializeResult
}

const components = {
  pre: ({ children }: { children: any }) => children,
  code: ({ children, className, filename }: any) => (
    <CodeBlock className={className} filename={filename}>
      {children}
    </CodeBlock>
  ),
  h1: ({ children }: { children: any }) => {
    const id = children.toLowerCase().replace(/\s+/g, '-')
    return <h1 id={id} className="text-4xl font-bold mt-8 mb-4">{children}</h1>
  },
  h2: ({ children }: { children: any }) => {
    const id = children.toLowerCase().replace(/\s+/g, '-')
    return <h2 id={id} className="text-3xl font-bold mt-8 mb-4">{children}</h2>
  },
  h3: ({ children }: { children: any }) => {
    const id = children.toLowerCase().replace(/\s+/g, '-')
    return <h3 id={id} className="text-2xl font-bold mt-6 mb-3">{children}</h3>
  },
  p: ({ children }: { children: any }) => {
    return <div className="text-gray-300 leading-relaxed mb-4">{children}</div>
  },
  ul: ({ children }: { children: any }) => (
    <ul className="list-disc list-inside space-y-2 mb-4 ml-4">{children}</ul>
  ),
  ol: ({ children }: { children: any }) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">{children}</ol>
  ),
  li: ({ children }: { children: any }) => (
    <li className="text-gray-300">{children}</li>
  ),
  a: ({ href, children, ...props }: any) => (
    <a href={href} className="text-blue-400 hover:underline" {...props}>{children}</a>
  ),
  Image: ({ src, alt, width, height, style, className }: any) => (
    <Image 
      src={src} 
      alt={alt || ''} 
      width={width || 800}
      height={height || 400}
      className={`rounded-lg my-8 ${className || ''}`}
      style={style}
    />
  ),
  img: ({ src, alt, className }: any) => (
    <Image 
      src={src} 
      alt={alt || ''} 
      width={800}
      height={400}
      className={`rounded-lg my-8 ${className || ''}`}
    />
  ),
  table: ({ children }: { children: any }) => (
    <div className="overflow-x-auto my-8">
      <table className="min-w-full border-collapse border border-gray-700">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: { children: any }) => (
    <thead className="bg-gray-800">
      {children}
    </thead>
  ),
  tbody: ({ children }: { children: any }) => (
    <tbody className="divide-y divide-gray-700">
      {children}
    </tbody>
  ),
  tr: ({ children }: { children: any }) => (
    <tr className="border-b border-gray-700">
      {children}
    </tr>
  ),
  th: ({ children }: { children: any }) => (
    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-200 border border-gray-700">
      {children}
    </th>
  ),
  td: ({ children }: { children: any }) => (
    <td className="px-6 py-4 text-sm text-gray-300 border border-gray-700">
      {children}
    </td>
  )
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <article className="prose prose-invert max-w-none">
      <MDXRemote {...source} components={components} />
    </article>
  )
}
