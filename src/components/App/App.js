import React, { useState, useCallback } from "react";
import "./App.css";
import SearchBar from '../SearchBar/SearchBar'

function App() {
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
