import Feed from "@/components/Feed";
import React from "react";

function Home() {
  return (
    <section className="w-full flex flex-col ">
      <h1 className="head_text text-center">
        Discover and Share <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promtopia is an open-source AI prompting tool for modern world to
        discover, create ad share creative prompts
      </p>
      {/* feed */}
      <Feed />
    </section>
  );
}

export default Home;
