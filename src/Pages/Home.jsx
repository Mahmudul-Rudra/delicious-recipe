import Vegetable from "../Components/Vegetable";
import Popular from "../Components/Popular";
import React from 'react'
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      animate = {{opacity: 1}}
      initial = {{opacity: 0}}
      exits = {{opacity: 0}}
      transition={{duration: 0.5}}
    >
        <Vegetable/>
        <Popular />
    </motion.div>
  )
}

export default Home