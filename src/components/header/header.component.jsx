import React from "react";

import "./header.styles.scss";

import background from "../../asset/backgroundImg.png";

import SearchBox from "../../components/search-box/search-box.component";

const Header = () => {
  return (
    <header className="header">
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
