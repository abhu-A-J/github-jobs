import React from "react";
import parser from "html-react-parser";

import { numOfDays } from "../../utils/date";

import globe from "../../asset/iconmonstr-globe-6.svg";
import clock from "../../asset/iconmonstr-time-3.svg";

import "./job-preview-right.styles.scss";

const JobPreviewRight = (props) => {
  const {
    company,
    company_logo,
    description,
    location,
    title,
    type,
    created_at,
  } = props;

  return (
    <div className="details__large">
      <div className="main-heading">
        <h2 className="title">{title}</h2>
        <p className="tag">{type}</p>
      </div>
      <p className="info--small">
        <img src={clock} alt="Clock" />
        <span>{numOfDays(created_at)}</span>
      </p>

      <div className="company-details">
        <div className="company-logo--small">
          <img src={company_logo} alt="Company Logo" />
        </div>

        <div className="job__descriptions">
          <p className="company-name">{company}</p>
          <p className="info--small">
            <img src={globe} alt="Globe" /> <span>{location}</span>
          </p>
        </div>
      </div>

      <div className="job__description__details">
        {parser(String(description))}
      </div>
    </div>
  );
};

export default JobPreviewRight;
