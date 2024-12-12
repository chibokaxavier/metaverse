"use client";
import React from "react";
// import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { motion } from "framer-motion";

import styles from "../styles";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <motion.nav
      //@ts-expect-error unkown 
      className={`${styles.xPaddings} py-8 relative `}
      initial="hidden"
      whileInView="show"
      variants={navVariants}
      // transition={{ duration: 0.5 }}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto px-6 lg:px-20 3xl:px-0 flex justify-between gap-8`}
      >
        <CiSearch className="size-[24px] text-white" />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white ">
          Metaversus
        </h2>
        <img
          src="/menu.svg"
          alt="menu"
          className="size-[24px] object-contain"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
