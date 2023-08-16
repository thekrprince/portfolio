"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS } from "@/constants";
import About from "../about";
import { NavValues } from "@/types";
import Feed from "../feed";
import Projects from "../projects";
import Content from "../content";

export default function NavBar() {
  const [navActiveClass, setNavActiveClass] = useState<string>(NAV_ITEMS[0]);

  const navActiveHandler = (item: string) => {
    setNavActiveClass(item);
  };

  return (
    <>
      <nav>
        <ul className="my-3 flex justify-center items-center font-bold">
          {NAV_ITEMS.map((navItem) => {
            return (
              <Link
                href="/"
                key={navItem}
                onClick={() => navActiveHandler(navItem)}
                className={`w-1/4 text-center navItem py-2 hover:bg-stone-100 dark:hover:bg-gray-800 ${
                  navActiveClass === navItem &&
                  "underline underline-offset-8 decoration-4 decoration-pink-500"
                }`}
              >
                <li>{navItem}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
      {navActiveClass === NavValues.FEED && <Feed />}
      {navActiveClass === NavValues.ABOUT && <About />}
      {navActiveClass === NavValues.CONTENT && <Content />}
      {navActiveClass === NavValues.PROJECTS && <Projects />}
    </>
  );
}
