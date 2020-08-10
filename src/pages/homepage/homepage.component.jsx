import React, { useState } from "react";

import "./homepage.styles.scss";

import Header from "../../components/header/header.component";
import JobPreview from "../../components/job-preview/job-preview.component";
import LocationSearchBox from "../../components/search-box/search-box.component";
import LoadingComponent from "../../components/loader/loader.component";

import useFetchJobs from "../../custom-hooks/useFetchJobs";

const HomePage = () => {
  const [params, setParams] = useState({
    location: undefined,
    full_time: undefined,
    search: undefined,
  });

  // const [page, setPage] = useState(0);

  const [isFetching, jobs, error] = useFetchJobs(params);

  console.log("The state are", { isFetching, jobs, error });

  return (
    <>
      <Header setParams={setParams} />

      <div className="main__content u-container">
        <div className="filter__box">
          <div className="input__group">
            <input type="checkbox" id="fulltime" />
            <label htmlFor="fulltime">Full Time</label>
          </div>

          <p className="location-tag">Location</p>

          <LocationSearchBox />

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
          <div>
            {isFetching ? (
              <LoadingComponent />
            ) : (
              jobs.map((job) => {
                return <JobPreview key={job.id} jobDetails={job} />;
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
