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
          <div
            key={index}
            className="transition-transform duration-300 w-full ease-in-out flex flex-col justify-center items-center"
          >
            <div
              className={`relatsive w-full sm:aspect-[6/4] ssm:h-[1s65px] md:h-s[275px] hover:shadow-xl z-10 mx-auto transition-all border duration-300 ease-in-out rounded-lg overflow-hidden`}
            >
              <img
                src={proj.image}
                alt={proj.title}
                title={proj.description}
                className="object-cover w-full h-full"
              />
            </div>
            <h3
              title={proj.title}
              className="text-sm 2xl:text-lg line-clamp-1 max-sw-80 font-medium mt-4 mx-auto"
            >
              {proj.title}
            </h3>
            <p
              title={proj.description}
              className="text-[12px] 2xl:text-[16px] text-primary/70 line-clamp-2 cursor-pointer max-w-100 font-medium mb-4 mx-auto"
            >
              {proj.description}
            </p>
            <Link
              prefetch={false}
              href={'/projects?category=' + proj.category}
              title={proj.category}
              className="text-sm uppercase rounded-2xl bg-secondary border px-2 text-primary/70 line-clamp-2 cursor-pointer max-w-100 font-medium mb-4 mx-auto"
            >
              {proj.category.replace(/-/g, " ")}
            </Link>
            {
              proj.url &&
              <div className=' bg-[conic-gradient(from_225deg,#FFC876,#79FFF7,#9F53FF,#FF98E2,#FFC876)] p-[0.1rem] rounded-md'>
                <Link target="_blank" className=' bg-primary-foreground px-2 py-1 flex rounded-md items-center gap-2' href={proj.url} title={proj.title + " Live Demo"} >
                  Live Demo <ExternalLink />
                </Link>
              </div>
            }
          </div>
        ))
        }

      </div>
    </Section >
  )
}

export default page
