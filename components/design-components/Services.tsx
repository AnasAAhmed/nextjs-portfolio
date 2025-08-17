
import Arrow from "@/assets/svg/Arrow";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import { services } from "@/lib/constants";
import ClipPath from "@/assets/svg/ClipPath";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Benefits = () => {
  return (
    <Section
      crosses
      id="services">
      <div className="container max-sm:pb-12 pt-12 lg:pt-0 relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Services"
        />

        <div className="flex flex-wrap gap-5 mb-10">
          {services.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="text-xl font-medium mb-5">{item.title}</h5>
                <p className="mb-6 text-primary/70">{item.text}</p>
                <div className="flex group items-center mt-auto">
                  <Image
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <Link
                    href={item.url}
                    title={'Explore more at ' + item.url}
                    target="_blank"
                    className="ml-auto z-40 text-xs font-bold flex items-center gap-2 uppercase tracking-wider pointer-events-auto"
                  >
                    Explore more
                    <ChevronRight className="group-hover:translate-x-2 duration-200 text-primary" />
                  </Link>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
