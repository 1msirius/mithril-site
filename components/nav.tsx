"use client";

import React from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function Navbar() {
  return (
    <section className="flex justify-between items-center text-white">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Mithril AI Logo"
            className="pb-[2px]"
            width={34}
            height={34}
          />
          <h1 className="text-[28px] font-medium ml-2 tracking-widest">
            MITHRIL
          </h1>
        </a>
      </div>
      <div className="flex items-center space-x-4 text-xs font-normal tracking-wider">
        <div className="hidden md:flex space-x-4">
          <a href="/blog" className="hover:text-gray-300">
            BLOG
          </a>
          <span className="text-[#787878]">/</span>
          <a href="/about" className="hover:text-gray-300">
            ABOUT
          </a>
          <span className="text-[#787878]">/</span>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            CAREERS
          </a>
        </div>
        <span className="text-[#787878] hidden md:inline">/</span>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-gray-300 h-6 w-6 sm:h-4 sm:w-4"
            >
              <Menu className="mb-[1px]" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="border-l border-[#2B2B2B] bg-black w-[250px] sm:w-[300px]">
            <SheetHeader>
              <SheetTitle className="text-left tracking-widest font-medium">
                MITHRIL
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-8 font-[family-name:var(--font-geist-mono)]">
              <div className="space-y-4">
                <a
                  href="/blog"
                  className="text-sm hover:text-gray-300 flex gap-2"
                >
                  <span className="text-[#787878]">/</span>
                  <h2>BLOG</h2>
                </a>
                <a
                  href="/about"
                  className="text-sm hover:text-gray-300 flex gap-2"
                >
                  <span className="text-[#787878]">/</span>
                  <h2>ABOUT</h2>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gray-300 flex gap-2"
                >
                  <span className="text-[#787878]">/</span>
                  <h2>CAREERS</h2>
                </a>
              </div>
              <div className="space-y-4">
                <a
                  href="https://twitter.com/mithrilailabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gray-300 flex gap-2"
                >
                  <span className="text-[#787878]">\</span>
                  <h2>TWITTER</h2>
                </a>
                <a
                  href="https://hf.co/mithrilai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gray-300 flex gap-2"
                >
                  <span className="text-[#787878]">\</span>
                  <h2>HUGGING FACE</h2>
                </a>
                <a
                  href="https://discord.gg/jgy376Jyka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gray-300 flex gap-2"
                >
                  <span className="text-[#787878]">\</span>
                  <h2>DISCORD</h2>
                </a>
                <a
                  href="https://github.com/mithrilai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gray-300 flex gap-2"
                >
                  <span className="text-[#787878]">\</span>
                  <h2>GITHUB</h2>
                </a>
                <a
                  href="https://www.linkedin.com/company/mithril-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gray-300 flex gap-2"
                >
                  <span className="text-[#787878]">\</span>
                  <h2>LINKEDIN</h2>
                </a>
                <a
                  href="mailto:info.mithrilai@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gray-300 flex gap-2"
                >
                  <span className="text-[#787878]">\</span>
                  <h2>EMAIL</h2>
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
}
