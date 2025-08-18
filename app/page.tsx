
import FeaturedProjects from "../components/design-components/Features";
import Skills from "../components/design-components/Skills";
import Hero from "../components/design-components/Hero";
import Services from "../components/design-components/Services";
import Projects from "@/components/design-components/Projects";
import Posts from "@/components/design-components/Posts";
import TimelineSection from "@/components/design-components/Timeline";
import { posts, projects } from "@/lib/constants";

export const dynamic = 'force-static';


export default async function Home() {
//   const fetchLinkPreview = async (urls:string[]) => {
//   const res = await fetch(`http://localhost:3000/api/link-preview`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Project-Urls": JSON.stringify(urls),
//     },
//   });
//   return res.json();
// };

// const [data, data2] = await Promise.all([
//   fetchLinkPreview([
//     "https://ecom-store-anas.vercel.app",
//     "https://conwrite-ai.vercel.app",
//     "https://anas-social.vercel.app",
//     "https://imagerator-ai.vercel.app/",
//   ]),
//   fetchLinkPreview([
//     "https://www.linkedin.com/posts/anas-ahmed-37258b319_nextjs-authjs-nextauth-activity-7319048537294487553-fIan?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFC1oEYBbFfhHzvy8I0urx2LZaJg4NK6_3E",
//     "https://www.linkedin.com/posts/anas-ahmed-37258b319_throwback-react-sanity-activity-7312101509847035905-Q5GU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFC1oEYBbFfhHzvy8I0urx2LZaJg4NK6_3E",
//     "https://www.linkedin.com/posts/anas-ahmed-37258b319_nextjs-react-saas-activity-7358076420692013056-FWCd",
//     "https://www.linkedin.com/posts/anas-ahmed-37258b319_webdevelopment-3dweb-reactjs-activity-7272181298872438784-D-Ba?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFC1oEYBbFfhHzvy8I0urx2LZaJg4NK6_3E",
//     "https://www.linkedin.com/posts/anas-ahmed-37258b319_nextjs-react-webdevelopment-activity-7311425386993668096-O-vF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFC1oEYBbFfhHzvy8I0urx2LZaJg4NK6_3E",
//   ]),
// ]);

  return (
    <>
      <Hero />
      <Services />
      <Skills />
      <Projects data={projects} />
      <TimelineSection />
      <FeaturedProjects />
      <Posts data2={posts}/>
    </>
  );
}
