import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description: "Mithril AI Research",
};

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-[83vh] text-center px-4">
      <h1 className="text-4xl md:text-5xl mb-8">Research</h1>
      <p className="text-lg mb-8 w-full max-w-[700px]">
        We are an open-source AI research and deployment company. Our mission is
        to democratize AI by becoming the Linux of AI, making everything—from
        model weights to data pipelines—fully open and accessible to everyone.
      </p>
      <div className="flex gap-4 items-center">
        <a href="https://github.com/mithrilai">
          <button className="bg-white text-black px-6 py-2 rounded-full text-base font-medium hover:bg-gray-200 transition-colors">
            GitHub
          </button>
        </a>
        <a href="https://discord.gg/jgy376Jyka">
          <button className="bg-black text-[#EDEDED] border border-solid border-[#2B2B2B] px-6 py-2 rounded-full text-base font-medium hover:bg-[#111111] transition-colors">
            Join Us
          </button>
        </a>
      </div>
    </div>
  );
}
