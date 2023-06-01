import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import BreadCrumb from "../components/Breadcrumb/index";
import Sitemap from "../parts/HomePage/Sitemap";
import ShoppingCart from "../parts/Cart/ShoppingCart";
import ShippingDetails from "../parts/Cart/ShippingDetails";

import Documents from "../parts/Document";

export default function Cart() {
  return (
    <Documents>
      <div>
        <Header theme="black" />
        <BreadCrumb
          list={[
            { url: "/", name: "Home" },
            { url: "/cart", name: "Shooping Cart" },
          ]}
        />

        <section className="md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex -mx-4 flex-wrap">
              <ShoppingCart />
              <ShippingDetails />
            </div>
          </div>
        </section>
        <Sitemap />
        <Footer />
      </div>
    </Documents>
  );
}
