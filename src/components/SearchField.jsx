import React, { useState } from "react";
import GifAPI from "./GifAPI";

// will send down information to the API from search field as a prop
function SearchField() {
  const [search, setSearch] = useState("");
  const [randomGif, setrandomGif] = useState(false);
  const [displayedTrending, setDisplayedTrending] = useState(true);

  const handleSearch = (e) => {
    const input = document.getElementById("input").value;
    setSearch(input);
    setrandomGif(false);
    setDisplayedTrending(false);
  };

  const handleRandom = (e) => {
    setrandomGif(Date.now());
    setSearch("");
    setDisplayedTrending(false);
  };

  return (
    <div>
      <div id="buttons">
        <input type="text" id="input" placeholder="Search for Gifs" />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleRandom}>Random</button>
      </div>
      <GifAPI search={search} random={randomGif} trending={displayedTrending} />
    </div>
  );
}

export default SearchField;
