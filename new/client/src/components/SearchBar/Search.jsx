import React from "react";
import { useState } from "react";
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const Input = (e) => {
    if (e.key === "Enter") {
      console.log("enter Pressed");
    }
  };
  return (
    <div className="search">
      <input
        placeholder="Search for Movies"
        // value=""
        value={searchTerm}
        // onKeyDown={() => Input()}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={Input}
      ></input>
    </div>
  );
};
export default Search;
