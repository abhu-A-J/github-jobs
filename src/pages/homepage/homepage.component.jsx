import React from "react";

import "./homepage.styles.scss";

import Header from "../../components/header/header.component";
import JobPreview from "../../components/job-preview/job-preview.component";
import SearchBox from "../../components/search-box/search-box.component";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="main__content u-container">
        <div className="filter__box">
          <div className="input__group">
            <input type="checkbox" id="fulltime" />
            <label htmlFor="fulltime">Full Time</label>
          </div>

          <p class="location-tag">Location</p>

          <SearchBox />

          <div className="input__group input__group--top">
            <input type="checkbox" id="london" />
            <label htmlFor="london">London</label>
          </div>

          <div className="input__group">
            <input type="checkbox" id="amsterdam" />
            <label htmlFor="amsterdam">Amsterdam</label>
          </div>

          <div className="input__group">
            <input type="checkbox" id="newyork" />
            <label htmlFor="newyork">New York</label>
          </div>

          <div className="input__group">
            <input type="checkbox" id="berlin" />
            <label htmlFor="berlin">Berlin</label>
          </div>

          <div className="input__group">
            <input type="checkbox" id="india" />
            <label htmlFor="india">India</label>
          </div>
        </div>
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
