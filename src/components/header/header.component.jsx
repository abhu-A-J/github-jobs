import React from "react";

import "./header.styles.scss";

import background from "../../asset/backgroundImg.png";

import SearchBox from "../../components/search-box/search-box.component";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar u-container">
        <h1 className="logo">
          Github <span>Jobs</span>
        </h1>
      </nav>
      <div
        className="herobox u-container"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <SearchBox />
      </div>
    </header>
  );
};

export default Header;
