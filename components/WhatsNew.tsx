"use client";
import styles from "@/styles";
import React, { useState } from "react";
import {
  fadeIn,
  staggerContainer,
  textVariant,
  planetVariants,
} from "@/utils/motion";
import { motion, useScroll } from "framer-motion";
import { TypingText, TitleText, StartSteps } from "@/components";
import { newFeatures, startingFeatures } from "@/constants";
import NewFeature from "./NewFeature";

const WhatsNew = () => {
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
          variants={fadeIn("right", "tween", 0.2, 1)}
          //@ts-ignore
          className={`flex-[0.75] flex-col flex justify-center`}
        >
          <TypingText title="| What is new" textStyles="" />
          <TitleText title={<>What is new about metaverse</>} textStyles="" />
          <div className="mt-[31px] flex flex-wrap justify-between gap-[20px] ">
            {newFeatures.map((feat, index) => (
              <NewFeature key={feat.title} {...feat} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          //@ts-ignore
          className={`flex-1 flex justify-center items-center`}
        >
          <img
            src="/whats-new.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>{" "}
      </motion.div>
    </section>
  );
};

export default WhatsNew;
