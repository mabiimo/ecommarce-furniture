import React from "react";
import Header from "../parts/Header";
import Hero from "../parts/HomePage/Hero";
import JustArrived from "../parts/HomePage/JustArrived";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import Clients from "../parts/Clients";
import Sitemap from "../parts/HomePage/Sitemap";
import Footer from "../parts/Footer";
import useScrollAnchor from "../helpers/hooks/useScrollAnchor";
import useModalDOM from "../helpers/hooks/useModalDOM";
import useScrollToTop from "../helpers/hooks/useScrollToTop.js";
import Documents from "../parts/Document";

export default function Homepage() {
  useScrollAnchor();
  useModalDOM();
  useScrollToTop();
  return (
    <Documents>
      <Header theme="black" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </Documents>
  );
}
