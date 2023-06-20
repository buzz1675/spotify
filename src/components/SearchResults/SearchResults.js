import React from 'react';
import TrackList from '../TrackList/TrackList';

const SearchResults = (props) => {
  return (
    <div>
      <h2>Search Results</h2>
      <TrackList tracks={props.tracks} onAdd={props.onAdd}/>
    </div>
  );
};

export default SearchResults;