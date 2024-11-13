'use client'
import React from 'react'
import Home from "@/components/shared/Home";
import About from "@/components/shared/About";
import Menu from "@/components/shared/Menu";
import Facility from "@/components/shared/Facility";
import Reviews from "@/components/shared/Reviews";
import Footer from "@/components/shared/Footer";
import Tawk from "@/lib/Tawk"
import { motion, useInView,useAnimation } from "framer-motion";
import Navbar from "@/components/shared/Navbar";

const BrewniquePage = () => {
  return (
    <motion.div 
        variants={{
        hidden:{opacity:0,y:75},
        visible:{opacity:1,y:0}
        }}
        initial='hidden'
        animate='visible'
        transition={{
            duration:0.5,
            delay:0.25,
            ease:'easeIn'
        }}
    className="flex flex-col">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Menu></Menu> 
      <Facility></Facility>
      <Reviews></Reviews>
      <Footer></Footer>
      <Tawk></Tawk>
      
    </motion.div>
  )
}

export default BrewniquePage