import React from "react";

import JobPreviewLeft from "../../components/job-preview-left/job-preview-left.component";
import JobPreviewRight from "../../components/job-preview-right/job-preview-right.component";

import "./job-page.styles.scss";

const JobsPage = () => {
  return (
    <div className="details__group u-container">
      <JobPreviewLeft />
      <JobPreviewRight />
    </div>
  );
};

export default JobsPage;
