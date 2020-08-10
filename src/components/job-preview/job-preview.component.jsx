import React from "react";
import { withRouter } from "react-router-dom";

import { numOfDays } from "../../utils/date";

import globe from "../../asset/iconmonstr-globe-6.svg";
import clock from "../../asset/iconmonstr-time-3.svg";

import "./job-preview.styles.scss";

const JobPreview = ({ jobDetails, history }) => {
  const {
    id,
    company,
    company_logo,
    createdAt,
    location,
    title,
    type,
  } = jobDetails;

  return (
    <div
      className="preview__card"
      onClick={() => history.push(`/details/${id}`)}
    >
      <div className="left-group">
        <div className="company-logo">
          <img src={company_logo} alt="Company Logo" />
        </div>

        <div className="company__details">
          <p className="company-name">{company}</p>
          <h2 className="title">{title}</h2>
          <p className="tag">{type}</p>
        </div>
      </div>

      <div className="right-group">
        <p className="info">
          <img src={globe} alt="Globe" />
          {location}
        </p>
        <p className="info">
          <img src={clock} alt="Clock" />
          {numOfDays(createdAt)}
        </p>
      </div>
    </div>
  );
};

export default withRouter(JobPreview);
