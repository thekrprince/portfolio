import { NavItemType, NavValues } from "@/types";
import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS } from "@/constants";

export default function NavBar() {
  const [navActiveClass, setNavActiveClass] = useState<string>(NAV_ITEMS[0]);

  const navActiveHandler = (item: string) => {
    setNavActiveClass(item);
  };

  return (
    <nav className="navbar">
      <ul className="my-3 flex justify-center items-center font-bold">
        {NAV_ITEMS.map((navItem) => {
          return (
            <Link
              href="/"
              key={navItem}
              onClick={() => navActiveHandler(navItem)}
              className={`w-1/4 text-center navItem ${
                navActiveClass === navItem &&
                "underline underline-offset-8 decoration-4 decoration-pink-500"
              }`}
            >
              <li>{navItem}</li>
            </Link>
          );
        })}
        {/* <li
          className={`px-5 py-2 ${navActiveClass === NavValues.FEED && "bg-white"}`}
          onClick={navActiveHandler}
        >
          <Link href="/">Feed</Link>
        </li>
        <li
          className={`px-5 py-2 ${navActiveClass === NavValues.ABOUT && "bg-white"}`}
          onClick={navActiveHandler}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`px-5 py-2 ${navActiveClass === NavValues.BLOG && "bg-white"}`}
          onClick={navActiveHandler}
        >
          <Link href="/blog">Blog</Link>
        </li>
        <li
          className={`px-5 py-2 ${
            navActiveClass === NavValues.PROJECTS && "bg-white"
          }`}
          onClick={navActiveHandler}
        >
          <Link href="/projects">Projects</Link>
        </li> */}
      </ul>
    </nav>
  );
}
