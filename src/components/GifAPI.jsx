import React, { useState, useEffect } from "react";
import GifCard from "./GifCard";
import axios from "axios";

// will render the API information, and send that down to GifCard for presentation
function GifAPI(props) {
  const apiKey = "mNiYePEecf0cV43MboctAfXSTlJ2PsS2";
  const { search, random, trending } = props;

  const [gifSearchResults, setGifSearchResults] = useState([]);
  const [gifTrendingResults, setGifTrendingResults] = useState([]);
  const [gifRandomResults, setGifRandomResults] = useState([]);

  console.log(search);

  useEffect(() => {
    async function fetchGifsTrending() {
      try {
        const result = await axios.get(
          `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
        );
        setGifTrendingResults(result.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchGifsTrending();
  }, []);

  useEffect(() => {
    async function fetchGifsSearch() {
      try {
        const result = await axios.get(
          `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}`
        );
        setGifSearchResults(result.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchGifsSearch();
  }, [search]);

  useEffect(() => {
    async function fetchGifsRandom() {
      if (random)
        try {
          const result = await axios.get(
            `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
          );
          setGifRandomResults([result.data.data]);
        } catch (error) {
          console.error(error);
        }
    }
    fetchGifsRandom();
  }, [random]);

  return (
    <div>
      <GifCard
        searchGifs={gifSearchResults}
        trendingGifs={gifTrendingResults}
        randomGif={gifRandomResults}
        displayTrend={trending}
      />
    </div>
  );
}

export default GifAPI;
