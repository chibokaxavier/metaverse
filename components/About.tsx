"use client";
import React from "react";
import {  staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { TypingText } from "@/components";

const About = () => {
  return (
    <section className="relative z-10 sm:p-16 xs:p-8 px-6 py-12 ">
      <div className="gradient-02 z-0" />
      <motion.div
        //@ts-expect-error unkown  unknown
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex-col 2xl:max-w-[1280px] w-full  flex justify-center items-center"
      >
        <TypingText title="| About Metaverse" textStyles="text-center" />
        <motion.p
          // variants={fadeIn("left", "tween", 0.2, 1)}

          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">Metaverse </span>
          is a new thing in the future, where you can enjoy the virtual world by
          feeling like it is really real, you can feel what you feel in this
          metaverse world, because this is really the{" "}
          <span className="font-extrabold text-white">
            madness of the metaverse{" "}
          </span>
          of today, using only{" "}
          <span className="font-extrabold text-white">VR</span> devices you can
          easily explore the metaverse world you want, turn your dreams into
          reality. Let us{" "}
          <span className="font-extrabold text-white">explore </span> the
          madness of the metaverse by scrolling down
        </motion.p>
        <motion.img
          // variants={fadeIn("up", "tween", 0.3, 1)}
          
          src="/arrow-down.svg"
          alt="arrow-down"
          className=" w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
};

export default About;
