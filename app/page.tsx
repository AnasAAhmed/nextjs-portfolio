
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

  // const post_urls: string[] = JSON.parse(process.env.POST_URLS!);



  // const fetchLinkPreview = async (urls:string[]) => {
  // const res = await fetch(`https://anasahmed-portfolio.vercel.app/api/link-preview`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Project-Urls": JSON.stringify(urls),
  //   },
  // });
  // return res.json();
  // };

  // const [data] = await Promise.all([
  // fetchLinkPreview(post_urls),
  // ]);

  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Services />
      <Projects data={projects.slice(0, 9)} />
      <Skills />
      <TimelineSection />
      <Posts data2={posts} />
    </>

  );
}
