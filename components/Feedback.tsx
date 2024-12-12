"use client";
import React from "react";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import { motion } from "framer-motion";


const Feedback = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      {" "}
      <motion.div
        //@ts-expect-error unkown 
        variants={staggerContainer}
        className={`mx-auto flex flex-col lg:flex-row gap-6 2xl:max-w-[1280px] w-full`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          //@ts-expect-error unkown 
          className={`flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative`}
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white ">
              Samantha
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white ">
              Founder | Metaverse
            </p>
          </div>
          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
          &quot;With the development of technology today , Metaverse is very useful
            for work in today times or can be called Web 3.0 by using metaverse
            you can use it as anything&quot;
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          //@ts-expect-error unkown 
          className={`justify-center items-center relative flex-1 flex  `}
        >
          <img
            src="/planet-09.png"
            alt="palnet-img"
            className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover  rounded-[40px] "
          />
          <motion.div
            variants={zoomIn(0.4, 1)}
            //@ts-expect-error unkown 
            className={`lg:block hidden absolute -left-[10%] top-[3%]`}
          >
            <img
              src="/stamp.png"
              alt="stamp"
              className="w-[155px] h-[155px] object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
