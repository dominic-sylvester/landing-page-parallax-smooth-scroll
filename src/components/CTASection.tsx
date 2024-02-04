import React from "react";
import Navbar from "./Navbar";

const CTASection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-6xl max-w-[15ch] text-center font-serif">
          Take the next step.
        </h1>
        <p>
          When you work with an expert, insurance can give you peace of mind,
          not a headache.
        </p>
        <p>
          In order to provide the best service, we only work with clients we
          know we can add tremendous value to.
        </p>
        <button className="bg-white text-black uppercase px-6 py-2 rounded-md">
          Get on our waitlist
        </button>
      </div>{" "}
    </section>
  );
};

const HighlightItem: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="uppercase text-sm">{title}</span>
      <p className="text-2xl">{content}</p>
    </div>
  );
};

export default CTASection;
