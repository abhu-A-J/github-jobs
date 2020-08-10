import React, { useEffect, useState } from "react";
import axios from "axios";

import JobPreviewLeft from "../../components/job-preview-left/job-preview-left.component";
import JobPreviewRight from "../../components/job-preview-right/job-preview-right.component";
import Loader from "../../components/loader/loader.component";

import "./job-page.styles.scss";

const BASE_URL = `https://jobs.github.com/positions/`;

const JobsPage = ({ match }) => {
  const { id } = match.params;

  const [job, setJob] = useState({});
  const [fetchingDetails, setFetchingDetails] = useState(true);

  useEffect(() => {
    async function fetchJobWithID(id) {
      try {
        const response = await axios.get(
          `https://cors-anywhere.herokuapp.com/${BASE_URL}${id}.json`
        );
        setFetchingDetails(false);
        setJob(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchJobWithID(id);
  }, [id]);

  return (
    <>
      {fetchingDetails && <Loader />}
      <div className="details__group u-container">
        <JobPreviewLeft applyDetail={job.how_to_apply} />
        <JobPreviewRight {...job} />
      </div>
    </>
  );
};

export default JobsPage;
