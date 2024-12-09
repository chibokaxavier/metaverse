"use client";

import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";

interface TYpingTextProps {
  title: string;
  textStyles: string;
}

export const TypingText = ({ title, textStyles }: TYpingTextProps) => (
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

export const TitleText = () => <h2>Title Text</h2>;
