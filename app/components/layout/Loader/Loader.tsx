"use client";

import React from "react";
import "./Loader.scss";
import Image from "next/image";

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <Image
        src="/Logo/logo.png"
        alt="logo canailledev"
        className="loader__logo"
        width={400}
        height={400}
        style={{ width: "auto", height: "auto" }}
        loading="eager"
      />

      <div className="loader__animation"></div>
    </div>
  );
};

export default Loader;
