import React, { useState } from "react";
import { Navbar, Sidebar, Hero, InfoSec } from "../../components/index";
import {homeObjOne} from '../../components/InfoSection/data'

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <InfoSec {...homeObjOne}/>
    </>
  );
};

export default Homepage;
