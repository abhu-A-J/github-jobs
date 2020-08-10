import React from "react";

import "./header.styles.scss";

import background from "../../asset/backgroundImg.png";
import briefcase from "../../asset/iconmonstr-briefcase-6.svg";

const Header = () => {
  return (
    <header className="header">
      <div
        className="herobox u-container"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="input__container">
          <input
            type="text"
            id="desc"
            placeholder="Title, companies, expertise or benefits "
            autoComplete="off"
          />
          <img src={briefcase} alt="Briefcase" />
          <button className="submit">Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
