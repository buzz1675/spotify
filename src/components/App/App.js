import React, { useState, useCallback } from "react";
import "./App.css";
import SearchBar from '../SearchBar/SearchBar';
import Spotify from "../../util/Spotify";

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  return (
    <>
      <div className="titlebox">
        <img className="logo" src="https://cdn.usbrandcolors.com/images/logos/spotify-logo.svg"></img>
      </div>
      <SearchBar onSearch={search}/>
      <div><p></p></div>
      <div className="SearchResults"></div>
      <div className="Playlist"></div>
    </>
  );
}

export default App;
