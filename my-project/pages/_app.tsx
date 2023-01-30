import 'styles/globals.css'
import Navbar from './Navbar'
import type { AppProps } from 'next/app'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

export default function App({ Component, pageProps }: AppProps) {

     return  ( 
      
      // <AnimatePresence>
      //     <motion.div
      //     initial={{ opacity: 0 }}
      //     animate={{ opacity: 1 }}
      //     exit={{ opacity: 0 }}/>
  
          <Navbar>
  <Component {...pageProps} />
          </Navbar>
   )
}
