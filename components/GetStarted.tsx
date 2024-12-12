"use client";
import React from "react";
import { fadeIn, staggerContainer, planetVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import { TypingText, TitleText, StartSteps } from "@/components";
import { startingFeatures } from "@/constants";

const GetStarted = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        //@ts-ignore
        variants={staggerContainer}
        className={`mx-auto flex lg:flex-row flex-col gap-8 2xl:max-w-[1280px] w-full`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
          variants={planetVariants("left")}
          //@ts-ignore
          className={`flex-1 flex justify-center items-center`}
        >
          <img
            src="/get-started.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>{" "}
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          //@ts-ignore
          className={`flex-[0.75] flex-col flex justify-center`}
        >
          <TypingText title="| How Metaversus works" textStyles="" />
          <TitleText
            title={<>Get started with just a few clicks</>}
            textStyles=""
          />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[20px] ">
            {startingFeatures.map((feat, index) => (
              <StartSteps key={feat} number={index + 1} text={feat} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
