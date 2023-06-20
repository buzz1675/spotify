import React, { useState } from 'react';
import TrackList from '../TrackList/TrackList';

const Playlist = () => {
    const [selectedTracks, setSelectedTracks] = useState([]);
  
    const addTrack = (track) => {
      const updatedTracks = [...selectedTracks, track];
      setSelectedTracks(updatedTracks);
    };
  
    const removeTrack = (track) => {
      const updatedTracks = selectedTracks.filter((selectedTrack) => selectedTrack.id !== track.id);
      setSelectedTracks(updatedTracks);
    };
  
    return (
      <div>
        <h2>Playlist</h2>
        <TrackList tracks={selectedTracks} onRemove={removeTrack} />
      </div>
    );
  };
  
  export default Playlist;