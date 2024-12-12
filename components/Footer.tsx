"use client";
import React from "react";
import { footerVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import { socials } from "@/constants";
const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      //@ts-expect-error unkown 
      className={`sm:p-16 xs:p-8 px-6 py-12  relative`}
      initial="hidden"
      whileInView="show"
    >
      <div className="footer-gradient" />
      <div className="mx-auto 2xl:max-w-[1280px] w-full flex flex-col gap-8">
        <div className="flex items-center justify-between flex-wrap gap-5 ">
          <h4 className="font-bold md:text-[64px] text-[44px]  text-white ">
            Enter the metaverse
          </h4>{" "}
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px] "
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="size-[24px] object-contain"
            />{" "}
            <span className="font-normal text-[16px] text-white ">
              ENTER METAVERSE
            </span>
          </button>
        </div>
        <div className="flex flex-col ">
          <div className="mb-[50px] h-[2px] bg-white opacity-10 " />
          <div className="flex items-center justify-between flex-wrap gap-4 ">
            <h4 className="font-extrabold text-[24px] text-white ">
              Metaversus
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50 ">
              {" "}
              Copyright 2024-2025 Metaversus. All rights reserved{" "}
            </p>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <img
                  key={i}
                  src={social.url}
                  alt={social.name}
                  className="size-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
