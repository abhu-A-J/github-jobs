import React from "react";

import Loader from "react-loader-spinner";

import "./loader.styles.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoadingComponent = () => {
  return (
    <div className="loading-component">
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default LoadingComponent;
