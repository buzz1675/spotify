import React, { useState, useCallback } from "react";
import TrackList from "../TrackList/TrackList";

const Playlist = (props) => {
  const [selectedTracks, setSelectedTracks] = useState([]);

  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  );

  return (
    <div>
      <input onChange={handleNameChange} defaultValue={"Name your Playlist"} />
      <TrackList tracks={selectedTracks} />
    </div>
  );
};

export default Playlist;
