import React from "react";
import Section from "./Section";
import { socials } from "@/lib/constants";
import { BriefcaseBusiness } from "lucide-react";

const Footer = () => {
  return (
    <Section crosses customPaddings="s" className="px-0 !py-2">
      <div className="container flex sm:justify-between justify-center items-center gap-5 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          Conwrite.ai © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              title={item.title}
              target="_blank"
              className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={item.size} height={item.size} alt={item.title}  className="bg-whiste"/>
            </a>
          ))}
           <a
              href={'https://anas3d.netlify.app/'}
              title={'My 3d Portfolio'}
              target="_blank"
              className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full transition-colors hover:bg-n-6"
            >
              <BriefcaseBusiness size={'18px'} color="black"/>
            </a>
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
