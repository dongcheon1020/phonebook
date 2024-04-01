import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {
  let [keyword, setKeywrod] = useState("");
  let dispatch = useDispatch();
  let { contact } = useSelector((state) => state);
  const searchByName = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };
  return (
    <div>
      <form onSubmit={searchByName}>
        <label for="search">찾기</label>
        <input
          onChange={(e) => setKeywrod(e.target.value)}
          id="search"
          type="search"
          placeholder="search"
        />
        <button type="submit">찾기</button>
      </form>
    </div>
  );
};

export default SearchBox;
