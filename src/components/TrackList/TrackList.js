import React from "react";
import Track from "../Track/Track";
import './TrackList.css'


const TrackList = (props) => {
  return (
    <div className="tracklist">
      {props.tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          onRemove={props.onRemove}
          onAdd={props.onAdd}
          isRemoval={props.isRemoval}
        />
      ))}
    </div>
  );
};

export default TrackList;
