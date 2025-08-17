import React from 'react'
import Section from './Section'
import { Timeline } from '../ui/timeline'
import { Calendar, Award, BookOpen, Code, Server, Brain, Bot, Layers, LucideIcon } from "lucide-react";
import EducationItem from './design/TimelineContent';
import { GradientLight, GradientLightLeft } from './design/Benefits';


const TimelineSection = () => {
  const projects = [
    {
      title: 'Late 2023 - Present',
      content: (
        <EducationItem
          logo="https://portal.governorsindh.com/_next/static/media/giaic.9ff76f62.png"
          institution="Governor Sindh Initiative for GenAI, Web3, and Metaverse"
          field="Computer Science"
          date="Feb 2024 - Present"
          grade="A"
          activities="Milestones, Hackathons, Coding Quiz"
          skills="Front-End Development, Back-End Development, AI Agents and AI SDKs, Langraph & LiteLLm."
          whatILearn={[
            {
              title: 'Advanced TypeScript',
              desc: 'Mastered TypeScript at an advanced level with practical implementations.',
              Icon: Brain,
              phase: "Quarter 1",
              status: 'complete'
            },
            {
              title: 'Next.js ( Frontend Development )',
              desc: 'Comprehensive study of Next.js framework and modern web development.',
              Icon: Layers,
              phase: "Quarter 2",
              status: 'complete'
            },
            {
              title: 'Python for backend & Agentic AI',
              desc: 'Currently focusing on Python for backend development, Agents & Ai Automation.',
              Icon: BookOpen,
              phase: "Quarter 3",
              status: 'complete'
            },
            {
              title: 'Agentic AI with OpenAI Agents SDK',
              desc: 'Currently working on Agentic AI development using the OpenAI Agents SDK.',
              Icon: Bot,
              phase: "Quarter 3.1",
              status: 'Ongoing'
            },
          ]}
        />

      ),
    },
    {
      title: '2024 - Present',
      content: (
        <EducationItem
          heading="Hands-on Experience"
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyV7eZimAn7TUfB7EKqjnrV32rmVuwfdEp5w&s"
          field="Full-Stack Web Development, AI Agents, SEO Optimization & UI/UX"
          date="Dec 2023 - present"
          institution='Self Taught'
          whatILearn={[
            {
              title: "JavaScript Mastery",
              desc: "Enhanced project reliability by applying advanced TypeScript patterns, strict typing, and reusable interfaces in both frontend and backend code.",
              Icon: Brain,
              phase: "Phase 1",
              status: "Achieved"
            },
            {
              title: "UI/UX Implementation",
              desc: "Designed responsive, accessible, and user-friendly interfaces using Tailwind CSS and Figma. Improved user flows and reduced bounce rates in test projects.",
              Icon: Brain,
              phase: "Phase 2",
              status: "Achieved"
            },
            {
              title: "SEO & Performance Optimization",
              desc: "Implemented SSR and dynamic metadata for SEO-friendly pages. Optimized asset loading and reduced page load times by over 40% in personal projects.",
              Icon: Brain,
              phase: "Phase 3",
              status: "Achieved"
            },
            {
              title: "Full-Stack Web Development",
              desc: "Built production-ready applications using Next.js, React, Node.js, MongoDB and Different Databases. Implemented secure authentication, API integrations, and real-time features.",
              Icon: Server,
              phase: "Phase 4",
              status: "Achieved"
            },
            {
              title: "CDN, client side, backend Caching",
              desc: "Built production-ready applications using Next.js, Vercel Edge cdn, Node.js, and Different Databases and Basic knowledge of DevOps.",
              Icon: Server,
              phase: "Phase 5",
              status: "Achieved"
            },
          ]}
        />
      ),
    },
    {
      title: '2021 - 2023',
      content: (
        <EducationItem
          logo="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqoOAhs2vhlZ1goYhs6R8UOPnP2AgYdRfTI3j2lCTFxKQeUlZTXrqj_tUoxQd-rfbRlgTvE3iBYxMjhd6uFGHkKy497PAxeCt_dvDO1lkvbN-6Z2L7RoPYdLawQ_It9PjZZml5wPw=s680-w680-h510-rw"
          institution="S.M. College Karachi"
          field="Intermediate, Business/Commerce, General"
          date="Jun 2021 - Nov 2023"
          grade="B"
          whatILearn={[
            {
              title: "Business Fundamentals",
              desc: "Studied core subjects including Accounting, Economics, and Business Mathematics, developing strong analytical and problem-solving skills.",
              Icon: Brain,
              phase: "Year 1",
              status: "Complete"
            },
            {
              title: "Time Management & Self-Learning",
              desc: "Balanced academic responsibilities with independent learning in technology, building discipline and adaptability.",
              Icon: Brain,
              phase: "Throughout",
              status: "Achieved"
            }
          ]}
        />
      ),
    },
  ];
  return (
    <Section crosses id='timeline'>
      <Timeline data={projects} />
    </Section>
  )
};

export default TimelineSection