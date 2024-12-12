"use client";
import React from "react";
import {  staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { TypingText, TitleText,  InsightCard } from "@/components";
import { insights } from "@/constants";

const Insights = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      {" "}
      <motion.div
        //@ts-expect-error unkown 
        variants={staggerContainer}
        className={`mx-auto flex flex-col 2xl:max-w-[1280px] w-full`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingText title="| Insight" textStyles="text-center" />
        <TitleText
          title="Insight about metaverse"
          textStyles="text-center"
        />
        <div className="mt-[50px] flex flex-col gap-[30px] ">
          {insights.map((insight, index) => (
            <InsightCard
              key={`insight-${index}`}
              index={index + 1}
              {...insight}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
