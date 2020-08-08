import React from "react";

import "./job-preview.styles.scss";

import globe from "../../asset/iconmonstr-globe-6.svg";
import clock from "../../asset/iconmonstr-time-3.svg";

const JobPreview = ({ url, name, title, days, location }) => {
  return (
    <div className="preview__card">
      <div className="left-group">
        <div className="company-logo">
          <img
            src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdGFIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0fa9b48edb8f52d899dfc93962c463442d19ac5c/Square_Logo1.png"
            alt="Company Logo"
          />
        </div>

        <div className="company__details">
          <p className="company-name">Kasisto</p>
          <h2 className="title">Front-End Software Engineer</h2>
          <p className="tag">Full Time</p>
        </div>
      </div>

      <div className="right-group">
        <p className="info">
          <img src={globe} alt="Globe" />
          New York
        </p>
        <p className="info">
          <img src={clock} alt="Clock" />5 Days Ago
        </p>
      </div>
    </div>
  );
};

export default JobPreview;
