import React from "react";
import Header from "../parts/Header";
import Sitemap from "../parts/HomePage/Sitemap";
import Footer from "../parts/Footer";
import BreadCrumb from "../components/Breadcrumb/index";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestion from "../parts/Details/Suggestion";

export default function Details() {
  return (
    <div>
      <Header theme="black" />
      <BreadCrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/123", name: "Office Room" },
          { url: "/categories/123/products/78888", name: "Details" },
        ]}
      />
      <ProductDetails />
      <Suggestion />

      <Sitemap />
      <Footer />
    </div>
  );
}
