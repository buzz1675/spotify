import React, { useState, useCallback } from "react";
import "./App.css";
import SearchBar from '../SearchBar/SearchBar';
import Spotify from "../../util/Spotify";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

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
      
      <div className="Main_App">
        <SearchResults searchResults={searchResults}/>
        <Playlist/>
      </div>
      <div className="Playlist"></div>
    </>
  );
}

export default App;
