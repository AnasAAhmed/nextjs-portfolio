import PRojectCard from '@/components/design-components/design/project-card'
import Section from '@/components/design-components/Section'
import SearchControls from '@/components/Search'
import { projects } from '@/lib/constants'
import { ExternalLink } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: "Anas Ahmed | Projects",
  description:
    "Projects of a full-stack web developer skilled in AI-Agents, Next.js, React, Node.js, MongoDB, PostgreSQL, and API integrations. Building scalable, high-performance web applications with modern technologies.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Anas Ahmed | Projects",
    description:
      "Discover Anas Ahmed’s portfolio showcasing projects in Next.js, React, Node.js, Python, MongoDB/PostgresSql/MySql, and scalable web development solutions.",
    url: `https://anasahmed-portfolio.vercel.app/projects`,
    images: [
      {
        url: "/projects.avif",
        width: 1200,
        height: 630,
        alt: "Project showcase preview",
      }
    ],
    siteName: "Anas Ahmed | Portfolio",
  },
};

const page = async ({ searchParams }: { searchParams: Promise<{ category: string, query: string }> }) => {
  const { category = '', query = '' } = await searchParams

  const normalizedCategory = category.trim().toLowerCase()
  const normalizedQuery = query.trim().toLowerCase()

  const categories = Array.from(
    new Set(projects.flatMap(p => p.category))
  )


  const filteredProjects = projects.filter(p => {
    const matchesCategory = !normalizedCategory || p.category.toLowerCase().includes(normalizedCategory)
    const matchesQuery = !normalizedQuery || p.title.toLowerCase().includes(normalizedQuery)
    return matchesCategory && matchesQuery
  })
  return (
    <Section crosses crossesOffset="lg:translate-y-[5.25rem]"
    >
      <SearchControls categories={Array.from(new Set(categories))} />
      <div className="container pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center mt-10 spasce-y-10 text-center">
        {filteredProjects.map((proj: any, index: number) => (
         <PRojectCard key={index} proj={proj}/>
        ))
        }

      </div>
    </Section >
  )
}

export default page
