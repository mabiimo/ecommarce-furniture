import React from "react";
import Header from "../parts/Header";
import PageErrorMessage from "../parts/PageErrorMessage";
import Sitemap from "../parts/HomePage/Sitemap";
import Footer from "../parts/Footer";
import useScrollToTop from "../helpers/hooks/useScrollToTop.js";
import Documents from "../parts/Document";

export default function NotFound() {
  useScrollToTop();
  return (
    <Documents>
      <Header theme="black" />

      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </Documents>
  );
}
