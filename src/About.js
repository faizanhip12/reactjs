import React from "react";
import HeroSection from "./components/HeroSection";
import { useEffect, useState, createContext, useContext } from "react";
import { AppContext } from './context/productcontex'
import { useProductContext } from './context/productcontex'
const About = () => {
  // const myName =useContext(AppContext)
  const myName = useProductContext()
  const data = {
    name: "Test",
  };

  return <>
    { myName}
    <HeroSection myData={data} />

  </>

}
export default About