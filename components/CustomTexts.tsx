"use client";

import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";

interface TypingTextProps {
  title: string;
  textStyles: string;
}
interface TitleTextProps {
  title: any;
  textStyles: string;
}

export const TypingText = ({ title, textStyles }: TypingTextProps) => (
  <motion.p
    variants={textContainer}
    //@ts-ignore
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === "" ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }: TitleTextProps) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    //@ts-ignore
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
