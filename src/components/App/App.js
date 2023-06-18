import React, { useState, useCallback } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="titlebox">
        <img className="logo" src="https://cdn.usbrandcolors.com/images/logos/spotify-logo.svg"></img>
      </div>
      <div><p>searchbar</p></div>
      <div className="SearchResults"></div>
      <div className="Playlist"></div>
    </>
  );
}

export default App;
