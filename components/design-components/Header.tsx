'use client'

import { disablePageScroll, enablePageScroll } from "scroll-lock";

import Button from "./Button";
import { HamburgerMenu } from "./design/Header";
import { Suspense,  useState, } from "react";
import { navigation } from "@/lib/constants";
import Link from "next/link";
import DarkModeToggle from "./Toggler";
import MenuSvg from "@/assets/svg/MenuSvg";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full mb-5 z-30 bg-background/70 sm:border-b border-foreground/30 md:backdrop-blur-sm `}
    >
      <div className="flex items-center justify-between px-5 md:px-7.5 xl:px-10 max-md:py-2">
        <Link prefetch={false} className="flex items-center gap-2 uppercase font-bold text-xl w-2s4 xl:mr-8" href="/">
          <img src={'/brainwave-symbol.svg'} className="" width={40} height={40} alt="logo" />
          Portfolio
        </Link>
        <nav
          className={`${openNavigation ? "flex" : "hidden"
            } fixed top-0 left-0 right-0 bottom-0 md:static md:flex md:mx-auto md:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto md:flex-row">
            {navigation.map((item) => (
              <Link
                prefetch={false}
                key={item.id}
                title={item.title}
                href={item.url}
                onClick={handleClick}
                className={`hover:text-indigo-400 block relative text-2xl uppercase transition-colors ${item.onlyMobile ? "md:hidden" : ""
                  } px-2 lg:px-6 py-6 md:py-6 md:-mr-0.25 md:text-xs md:font-semibold md:leading-5 lg:hover:text-n-1 `}>
                {item.title}
              </Link>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <div className="flex gap-2 items-center">

          <Suspense fallback={<div className='h-5 w-16 p-1 rounded-md bg-gray-300 animate-pulse' />}>
            <DarkModeToggle />
          </Suspense>
          <Button
            className="text-sm max-sm:hidden gap-1 ml-auto"
            px="px-3"
            inNewTab
            title="My Github Profile"
            href="https://github.com/AnasAAhmed"
          >
            Github ⭐️(34)
          </Button>
          <Button
            className="ml-auto md:hidden"
            px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
