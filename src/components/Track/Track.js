import React, { useCallback } from "react";

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
      return <button onClick={removeTrack}>Remove from Playlist</button>;
    }
    return <button onClick={addTrack}>Add to Playlist</button>;
  };

  return (
    <div>
      <h3>{props.track.name}</h3>
      <p>Artist: {props.track.artist}</p>
      <p>Album: {props.track.album}</p>
      {renderAction()}
    </div>
  );
};

export default Track;
