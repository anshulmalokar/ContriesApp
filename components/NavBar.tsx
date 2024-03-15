"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

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
      <main className="sticky top-0 shadow-xl dark:shadow-xl z-50 border-b-2">
        <div className="flex justify-between p-3 items-center max-w-screen-2xl mx-auto">
          <Link href={"/"} className="text-black text-xl md:text-2xl">
            Where in the world
          </Link>
          <div className="flex">
            <div>Logo</div>
            <div onClick={toggleTheme}>Toggle button</div>
          </div>
        </div>
      </main>
    </>
  );
}
