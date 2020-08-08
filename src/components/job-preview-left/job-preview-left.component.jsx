import React from "react";
import { Link } from "react-router-dom";
import parser from "html-react-parser";

import "./job-preview-left.styles.scss";

const JobPreviewLeft = () => {
  return (
    <div className="details__small">
      <p className="apply">
        &larr;
        <Link to="/">Back to Search</Link>
      </p>

      <p className="how-to-apply">How to apply</p>

      <div className="apply-process">
        {parser(
          '<p><strong>Apply here only:</strong> <a href="https://www.stickermule.com/career/7e6bb5ee-9953-4d46-b008-77a3bbc4ee29">https://www.stickermule.com/career/7e6bb5ee-9953-4d46-b008-77a3bbc4ee29</a></p>\n'
        )}
      </div>
    </div>
  );
};

export default JobPreviewLeft;
