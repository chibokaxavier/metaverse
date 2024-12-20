"use client";
import React, {  Dispatch, SetStateAction } from "react";
// import { fadeIn  } from "@/utils/motion";
import { motion } from "framer-motion";

interface ExploreCardProps {
  active: string;
  handleClick: Dispatch<SetStateAction<string>>;
   index: number;
  id: string;
  imgUrl: string;
  title: string;
}

const ExploreCard = ({
  active,
  handleClick,
  
  id,
  imgUrl,
  title,
}: ExploreCardProps) => {
  return (
    <motion.div
      // variants={fadeIn("right", "spring", index * 1, 1.5)}
      //  variants={fadeIn("right", "spring", 0.75, 1.5)}
     
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10] " : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        className="rounded-[24px] object-cover absolute w-full h-full  "
      />
      {active !== id ? (
        <h3
          className="
      font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]"
        >
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0  p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div className="w-[60px] rounded-[24px] h-[60px] glassmorphism mb-[16px] flex justify-center items-center">
            <img
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
            Enter the metaverse
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white  ">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
