import React from 'react';
import TrackList from '../TrackList/TrackList';

const SearchResults = ({ tracks }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <TrackList tracks={tracks} />
    </div>
  );
};

export default SearchResults;