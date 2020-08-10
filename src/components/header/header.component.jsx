import React, { useState } from "react";

import "./header.styles.scss";

import background from "../../asset/backgroundImg.png";
import briefcase from "../../asset/iconmonstr-briefcase-6.svg";

const Header = ({ setParams }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted!");
    setParams((prevParams) => {
      return {
        ...prevParams,
        search: description,
      };
    });
    setDescription("");
  };

  return (
    <header className="header">
      <div
        className="herobox u-container"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="input__container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              id="desc"
              placeholder="Title, companies, expertise or benefits "
              autoComplete="off"
              name="desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <img src={briefcase} alt="Briefcase" />
            <button className="submit" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
