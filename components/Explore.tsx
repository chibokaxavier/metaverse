"use client";
import React, { useState } from "react";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { TypingText, TitleText, ExploreCard } from "@/components";
import { exploreWorlds } from "@/constants";

const Explore = () => {
  const [active, setActive] = useState("world-2");
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12" id="explore">
      <motion.div
        //@ts-expect-error unkown  jjk
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex flex-col 2xl:max-w-[1280px] w-full"
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={"Choose the world you want to explore"}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
