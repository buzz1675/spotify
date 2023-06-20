import React from 'react';

const Track = ({ track }) => {
  return (
    <div>
      <h3>{track.name}</h3>
      <p>Artist: {track.artist}</p>
      <p>Album: {track.album}</p>
      <p>URI: {track.uri}</p>
    </div>
  );
};

export default Track;