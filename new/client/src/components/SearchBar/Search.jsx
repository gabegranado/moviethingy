import React from "react";
import { useState } from "react";
import "./Search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const Input = (e) => {
    if (e.key === "Enter") {
      var str = searchTerm.replace(/\s/g, '');
      console.log("enter Pressed", searchTerm);
      navigate(`/search/${str.toLowerCase()}`);
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
