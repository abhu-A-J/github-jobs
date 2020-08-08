import React from "react";

import "./homepage.styles.scss";

import Header from "../../components/header/header.component";
import JobPreview from "../../components/job-preview/job-preview.component";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="main__content u-container">
        <div className="filter__box"></div>
        <div className="filtered__result">
          <JobPreview />
          <JobPreview />
          <JobPreview />
        </div>
      </div>
    </>
  );
};

export default HomePage;
