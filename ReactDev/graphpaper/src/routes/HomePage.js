import React from "react";
import Navbar from "./header/Header";
import {Items, MainContents, MidContent, Section, TopFooter} from "./contents"
import {Footer} from './footer'

function HomePage() {
  return (
    <>
      <Navbar />
      <MainContents />
      
      <MidContent />
      <Items />
      <Section />
      <TopFooter />
      <Footer />
    </>
  );
}

export default HomePage;
