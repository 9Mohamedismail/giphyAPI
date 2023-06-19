import React from "react";
import "../GifCard.css";

// format API information
function GifCard(props) {
  const { searchGifs, trendingGifs, randomGif, displayTrend } = props;

  const showTrending = () => {
    return trendingGifs.map((gif) => (
      <img key={gif.id} src={gif.images.original.url} alt="trendingGif" />
    ));
  };

  return (
    <div id="trending">
      {displayTrend && (
        <div>
          <h1 id="trending">Trending Gifs:</h1>
          {showTrending()}
        </div>
      )}

      <div id="search">
        {randomGif && (
          <div>
            {searchGifs.map((gif) => {
              return (
                <img
                  key={gif.id}
                  src={gif.images.original.url}
                  alt="searchGif"
                />
              );
            })}
          </div>
        )}
      </div>

      <div id="random">
        {randomGif.map((gif) => {
          return (
            <img key={gif.id} src={gif.images.original.url} alt="randomGif" />
          );
        })}
      </div>
    </div>
  );
}

export default GifCard;
