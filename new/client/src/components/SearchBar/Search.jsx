import React, { useState, useEffect } from 'react';
import "./Search.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../actions/movies';

const Search = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const Input = (e) => {
    if (e.key === "Enter") {
      dispatch(getMovies());
      var str = searchTerm.replace(/\s/g, '');
      console.log("enter Pressed", searchTerm);
      navigate(`/search/${str.toLowerCase()}`);
    }
  };

  useEffect(() => {
    dispatch(getMovies());
}, [dispatch]);

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
