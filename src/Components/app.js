import React from 'react';
import './App.css';

import SearchBar from './SearchBar/SearchBar';
import SearchResults from 'SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';

class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [{name1: 'name1', artist1: 'artist1', album1: 'album1', id: 1}, {name2: 'name2', artist2: 'artist2', album2: 'album2', id: 2}, {name3: 'name3', artist3: 'artist3', album3: 'album3', id: 3}]
    }
  };

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        //Add a SearchBar component
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
        //Add a Playlist component
        </div>
      </div>
    </div>
  );
    }
}

export default App;

