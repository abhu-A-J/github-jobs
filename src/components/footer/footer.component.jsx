import React from "react";

import "./footer.styles.scss";

function Footer() {
  return (
    <footer>
      <div className="footer u-container">
        <p className="footer__line ">
          Made with
          <span role="img" aria-label="Heart Emoji">
            ❤️
          </span>
          by
          <a
            href="https://github.com/abhu-A-J"
            target="_blank"
            className="link"
            rel="noopener noreferrer"
          >
            {" "}
            abhu-A-J.
          </a>
        </p>

        <p className="footer__credits ">
          Find the code solution at
          <a href="https://github.com/abhu-A-J/github-jobs" className="link">
            {" "}
            Github Jobs{" "}
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
