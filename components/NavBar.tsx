"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MdOutlineLightMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

// Made the NavBar Sticky

type Props = {};

export default function NavBar({}: Props) {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else if (resolvedTheme === "light") {
      setTheme("dark");
    }
  };

  return (
    <>
      <main className="sticky top-0 shadow-xl dark:shadow-2xl    z-50 dark:bg-slate-800">
        <div className="flex justify-between p-3 items-center max-w-screen-2xl mx-auto transition-all">
          <Link href={"/"} className="text-xl md:text-2xl">
            Where in the world
          </Link>
          <section
            className="flex items-center gap-2 hover:cursor-pointer"
            onClick={toggleTheme}
          >
            <div>
              {resolvedTheme === "dark" ? (
                <>
                  <MdOutlineLightMode size={30} />
                </>
              ) : (
                <>
                  <MdLightMode size={30} />
                </>
              )}
            </div>
            <div className="text-xl hidden md:block">
              {resolvedTheme === "dark" ? (
                <span>Light Mode</span>
              ) : (
                <>
                  <span>Dark Mode</span>
                </>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
