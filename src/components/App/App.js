import React, { useState, useCallback } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import Spotify from "../../util/Spotify";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  return (
    <>
      <div className="titlebox">
        <img
          className="logo"
          src="https://cdn.usbrandcolors.com/images/logos/spotify-logo.svg"
        ></img>
      </div>
      <SearchBar onSearch={search} />

      <div className="Main_App">
        <SearchResults tracks={searchResults}/>


        <div className="Playlist">
          <div className="tracks"></div>
        </div>
      </div>
    </>
  );
}

export default App;
