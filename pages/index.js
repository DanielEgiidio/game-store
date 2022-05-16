import React from "react";

import { client } from "../Lib/client";

import { Product, FooterBanner, HeadBanner } from "../components";

console.log();
const Home = ({ products, bannerData }) => (
  <div>
    <HeadBanner headBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Produtos gamers mais vendidos</h2>
      <p>Melhores Headsets do mercado</p>
    </div>
    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
    <FooterBanner />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
