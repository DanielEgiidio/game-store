import React from "react";
import Link from "next/link";
import { urlFor } from "../Lib/client";

const HeadBanner = ({ headBanner }) => {
  return (
    <div className="head-banner-container">
      <div>
        <p className="beats-solo">{headBanner.smallText}</p>
        <h3>{headBanner.midText}</h3>
        <h1>{headBanner.largeText1}</h1>
        <img
          src={urlFor(headBanner.image)}
          alt="headsets"
          className="head-banner-image"
        />
        <div>
          <div className="desc">
            <h5>Descrição</h5>
            <p>{headBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadBanner;
