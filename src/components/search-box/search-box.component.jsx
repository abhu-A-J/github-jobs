import React from "react";

import "./search-box.styles.scss";

import briefcase from "../../asset/iconmonstr-briefcase-6.svg";

const SearchBox = () => {
  return (
    <div className="input__container">
      <input
        type="text"
        id="search"
        placeholder="Title, companies, expertise or benefits "
        autoComplete="off"
      />
      <img src={briefcase} alt="Briefcase" />
      <button class="submit">Search</button>
    </div>
  );
};

export default SearchBox;
