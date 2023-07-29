"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled && "bg-black"
      } fixed top-0 z-50 flex w-full items-center justify-between p-4 transition-all lg:px-10 lg:py-6`}
    >
      <div className="flex items-center space-x-2 md:space-x-8">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={90}
          height={90}
          className="cursor-pointer"
        />
        <ul className="hidden md:flex md:space-x-4">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <p className="hidden cursor-not-allowed lg:inline">Kids</p>
        <Image
          width={30}
          height={30}
          src="/profile.png"
          alt="Profile"
          className="cursor-pointer rounded"
        />
      </div>
    </header>
  );
}
