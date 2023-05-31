import React, { useState, useEffect } from "react";
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
  const [product, setProduct] = useState(null);
  const { isLoading } = useAsync();

  useEffect(() => {
    axios
      .get(`https://f5a1961e-287e-409b-bb0d-e18cbea75e94.mock.pstmn.io/api/products/${idp}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [idp]);
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
      <ProductDetails data={product} />
      <Suggestion data={Array.isArray(product?.relatedProducts) ? product.relatedProducts : []} />

      <Sitemap />
      <Footer />
    </div>
  );
}
