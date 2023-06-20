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

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

        setplaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setplaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setplaylistName("Name your Playlist");
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
        <SearchResults tracks={searchResults} onAdd={addTrack}/>
        <Playlist
          name={playlistName}
          tracks={playlistTracks}
          onNameChange={setplaylistName}
          onSave={savePlaylist}
          onRemove = {removeTrack}
        />

        <div className="Playlist">
          <div className="tracks"></div>
        </div>
      </div>
    </>
  );
}

export default App;
