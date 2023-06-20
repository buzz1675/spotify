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
      <TrackList
        tracks={props.tracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
      <button className="Playlist-save" onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
