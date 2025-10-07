import PRojectCard from '@/components/design-components/design/project-card'
import Section from '@/components/design-components/Section'
import SearchControls from '@/components/Search'
import { projects } from '@/lib/constants'
import React from 'react'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ category: string, query: string }> }) {
  const { category = '', query = '' } = await searchParams;

  const normalizedCategory = category.trim().toLowerCase()
  const normalizedQueryWords = query.replaceAll('+', ' ').trim().toLowerCase().split(' ').filter(Boolean);;

  const filteredProjects = projects.filter(p => {
    const matchesCategory = !normalizedCategory || p.category.toLowerCase().includes(normalizedCategory)
    const matchesQuery = !normalizedQueryWords || normalizedQueryWords.every(word => p.title.includes(word))
    return matchesCategory && matchesQuery
  })
  const titleParts: string[] = [];

  if (normalizedQueryWords.length) {
    titleParts.push(`"${normalizedQueryWords.join(' ')}"`);
  }

  if (normalizedCategory) {
    titleParts.push(`Category: ${normalizedCategory}`);
  }


  const dynamicTitle = titleParts.length
    ? `(${filteredProjects.length}) Search Results for ${titleParts.join(' | ')}`
    : "All Projects";

  return {
    title: `${dynamicTitle} | Anas Ahmed `,
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
      title: `${dynamicTitle} | Anas Ahmed `,
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
      siteName: "Anas Ahmed",
    },
  }
};

const page = async ({ searchParams }: { searchParams: Promise<{ category: string, query: string }> }) => {
  const { category = '', query = '' } = await searchParams

  const normalizedCategory = category.trim().toLowerCase()
  const normalizedQueryWords = query.replaceAll('+', ' ').trim().toLowerCase().split(' ').filter(Boolean);;

  const categories = Array.from(
    new Set(projects.flatMap(p => p.category))
  )

  const filteredProjects = projects.filter(p => {
    const matchesCategory = !normalizedCategory || p.category.toLowerCase().includes(normalizedCategory)
    const matchesQuery = !normalizedQueryWords || normalizedQueryWords.every(word => p.title.includes(word))
    return matchesCategory && matchesQuery
  })
  const titleParts: string[] = [];

  if (normalizedQueryWords.length) {
    titleParts.push(`"${normalizedQueryWords.join(' ')}"`);
  }

  if (normalizedCategory) {
    titleParts.push(`Category: ${normalizedCategory}`);
  }


  const dynamicTitle = titleParts.length
    ? `(${filteredProjects.length}) Search Results for ${titleParts.join(' | ')}`
    : "All Projects";
  return (
    <Section crosses crossesOffset="lg:translate-y-[5.25rem]"
    >
      {dynamicTitle}
      <SearchControls categories={Array.from(new Set(categories))} />
      <div className="container pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center mt-10 spasce-y-10 text-center">
        {!filteredProjects.length?'No Results':filteredProjects.map((proj: any, index: number) => (
          <PRojectCard key={index} proj={proj} />
        ))
        }

      </div>
    </Section >
  )
}

export default page
