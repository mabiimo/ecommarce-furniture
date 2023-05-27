import React from "react";
import Header from "../parts/Header";
import Sitemap from "../parts/HomePage/Sitemap";
import Footer from "../parts/Footer";
import BreadCrumb from "../components/Breadcrumb/index";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestion from "../parts/Details/Suggestion";
import { useParams } from "react-router-dom";
import useAsync from "../helpers/hooks/useAsync";
import axios from "axios";

export default function Details() {
  const { idp } = useParams();

  const { data, run } = useAsync();

  axios
    .get(`https://f5a1961e-287e-409b-bb0d-e18cbea75e94.mock.pstmn.io/api/products/${idp}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch(
      (error) => {
        if (error.response && error.response.data && error.response.data.errors && error.response.data.errors.message) {
          console.log(error.response.data.errors.message);
        } else {
          console.error(error);
        }
      },
      [run, idp]
    );

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
      <ProductDetails data={data} />
      <Suggestion data={data?.relatedProducts || {}} />

      <Sitemap />
      <Footer />
    </div>
  );
}
