import React, { useCallback } from "react";
import "./Track.css";

const Track = (props) => {
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );

  const renderAction = () => {
    if (props.isRemoval === true) {
      return <button className="add_remove_button" onClick={removeTrack}>Remove from Playlist</button>;
    }
    return <button className="add_remove_button" onClick={addTrack}>Add to Playlist</button>;
  };

  return (
    <>
    <div className="track">
      <div className="track_data">
        <h3>{props.track.name}</h3>
        <p>Artist: {props.track.artist}</p>
        <p>Album: {props.track.album}</p>
      </div>
      <div className="add_remove_button">{renderAction()}</div>
      </div>
    </>
  );
};

export default Track;
