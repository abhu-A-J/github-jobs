import React, { useState } from "react";

import "./search-box.styles.scss";

import globe from "../../asset/iconmonstr-globe-6.svg";

const SearchBox = ({ setParams }) => {
  const [location, setLocation] = useState("");

  return (
    <div className="input__container--filter">
      <input
        type="text"
        id="search"
        placeholder="City, state, zip code or country"
        autoComplete="off"
        name="location"
        value={location}
        onChange={(e) => {
          const value = e.target.value;
          setLocation(value);
          setParams((prevParams) => {
            return {
              ...prevParams,
              location: value,
            };
          });
        }}
      />

      <img src={globe} alt="Globe" />
    </div>
  );
};

export default SearchBox;
