import React, { useState, useCallback } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import Spotify from "../../util/Spotify";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setplaylistTracks] = useState([]);
  const [playlistName, setplaylistName] = useState("Name your Playlist");

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setplaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setplaylistName("New Playlist");
      setplaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

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
        <SearchResults tracks={searchResults} />
        <Playlist
          name={playlistName}
          track={playlistTracks}
          onNameChange={setplaylistName}
          onSave={savePlaylist}
        />

        <div className="Playlist">
          <div className="tracks"></div>
        </div>
      </div>
    </>
  );
}

export default App;
