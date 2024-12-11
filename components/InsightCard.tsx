" use client";
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
import { NewFeature } from "@/components";

interface CardProps {
  imgUrl: string;
  index: number;
  title: string;
  subtitle: string;
}

const InsightCard = ({ index, imgUrl, title, subtitle }: CardProps) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      //@ts-ignore
      className="flex md:flex-row flex-col gap-4"
    >
      <img
        src={imgUrl}
        alt={title}
        className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
      />
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
            {title}
          </h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
            {subtitle}
          </p>
        </div>
        <div className="lg:flex hidden items-center justify-center  w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
          <img
            src="arrow.svg"
            alt="arrow"
            className=" size-[40px] object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;
