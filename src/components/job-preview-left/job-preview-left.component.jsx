import React from "react";
import { Link } from "react-router-dom";
import parser from "html-react-parser";

import "./job-preview-left.styles.scss";

const JobPreviewLeft = ({ applyDetail }) => {
  return (
    <div className="details__small">
      <p className="apply">
        &larr;
        <Link to="/">Back to Search</Link>
      </p>

      <p className="how-to-apply">How to apply</p>

      <div className="apply-process">{parser(String(applyDetail))}</div>
    </div>
  );
};

export default JobPreviewLeft;
