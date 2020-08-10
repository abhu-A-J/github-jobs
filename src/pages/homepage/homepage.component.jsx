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
  console.log("Params are", params);

  const handleCheckBox = (event) => {
    const { checked } = event.target;
    checked === true
      ? setParams((prevParams) => {
          return {
            ...prevParams,
            full_time: true,
          };
        })
      : setParams((prevParams) => {
          return {
            ...prevParams,
            full_time: undefined,
          };
        });
  };

  return (
    <>
      <Header setParams={setParams} />

      <div className="main__content u-container">
        <div className="filter__box">
          <div className="input__group">
            <input
              type="checkbox"
              id="fulltime"
              onChange={(e) => handleCheckBox(e)}
            />
            <label htmlFor="fulltime">Full Time</label>
          </div>

          <p className="location-tag">Location</p>

          <LocationSearchBox setParams={setParams} />
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
