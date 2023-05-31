import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function LoadingSuggestion() {
  return (
    <section className="bg-gray-100 px-4 py-16">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            Complete your room <br className="" />
            with what we designed
          </h3>
        </div>
        <div className="flex overflow-x-auto mb-4 -mx-3">
          {Array(4)
            .fill()
            .map((_, index) => {
              return (
                <div className="px-3 flex-none" style={{ width: 320 }} key={index}>
                  <div className="rounded-xl p-4 pb-8 relative bg-white">
                    <div className="rounded-xl overflow-hidden card-shadow w-full h-36">
                      <div className="bg-gray-300 animate-pulse rounded-lg h-full overflow-hidden" style={{ width: 287, height: 150 }}></div>
                    </div>
                    <div className="w-56 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
                    <div className="w-40 h-4 mt-3 bg-gray-300 animate-pulse rounded-full"></div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default function Suggestion({ data }) {
  const { idp } = useParams();
  const [product, setProduct] = useState(null);
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
  if (!product) {
    return <LoadingSuggestion />; // Menampilkan pesan loading jika data belum tersedia
  }
  return (
    <section className="bg-gray-100 px-4 py-16">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            Complete your room <br className="" />
            with what we designed
          </h3>
        </div>
        <div className="flex overflow-x-auto mb-4 -mx-3">
          {data?.map((item) => {
            // Format harga menjadi format mata uang
            const formattedPrice = new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(item.price);

            return (
              <div className="px-3 flex-none" style={{ width: 320 }} key={item.id}>
                <div className="rounded-xl p-4 pb-8 relative bg-white">
                  <div className="rounded-xl overflow-hidden card-shadow w-full h-36">
                    <img src={item.imageUrl} alt="" className="w-full h-full object-cover object-center" />
                  </div>
                  <h5 className="text-lg font-semibold mt-4">{item.title}</h5>
                  <span className="">{formattedPrice}</span>
                  <Link to={`/categories/${item.idc}/products/${item.id}`} className="stretched-link">
                    {/* <!-- fake children --> */}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
