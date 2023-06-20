import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css'

const SearchResults = (props) => {
  return (
    <div className='searchResults'>
      <h2>Search Results</h2>
      <TrackList tracks={props.tracks} onAdd={props.onAdd}/>
    </div>
  );
};

export default SearchResults;