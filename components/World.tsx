"use client";
import styles from "@/styles";
import React, { useState } from "react";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { TypingText, TitleText, StartSteps } from "@/components";

const World = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      {" "}
      <motion.div
        //@ts-ignore
        variants={staggerContainer}
        className={`mx-auto flex flex-col 2xl:max-w-[1280px] w-full`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingText title="| People on the world" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world{" "}
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          //@ts-ignore
          className={`h-[550px] relative mt-[68px]  flex  w-full`}
        >
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="/people-01.png" alt="people" className="w-full h-full" />
          </div>{" "}
          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="/people-02.png" alt="people" className="w-full h-full" />
          </div>{" "}
          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="/people-03.png" alt="people" className="w-full h-full" />
          </div>{" "}
          <div className="lg:absolute hidden lg:block top-1/2 left-[20%] w-[196px] h-[150px] p-[6px] rounded-[24px] bg-[#5d6680]">
            <img
              src="/world-2.png"
              alt="people"
              className="w-full h-full rounded-[24px]"
            />
          </div>{" "}
          <div className="lg:absolute hidden lg:block top-1/7 right-[30%] w-[196px] h-[150px] p-[6px] rounded-[24px] bg-[#5d6680]">
            <img
              src="/planet-01.png"
              alt="people"
              className="w-full h-full rounded-[24px]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
