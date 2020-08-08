import React from "react";

import "./search-box.styles.scss";

import globe from "../../asset/iconmonstr-globe-6.svg";

const SearchBox = () => {
  return (
    <div className="input__container--filter">
      <input
        type="text"
        id="search"
        placeholder="City, state, zip code or country"
        autoComplete="off"
      />
      <img src={globe} alt="Globe" />
    </div>
  );
};

export default SearchBox;
