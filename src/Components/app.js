import React from 'react';
import './app.css';

import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';

class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [{name1: 'name1', artist1: 'artist1', album1: 'album1', id: 1}, {name2: 'name2', artist2: 'artist2', album2: 'album2', id: 2}, {name3: 'name3', artist3: 'artist3', album3: 'album3', id: 3}],

      playlistName: 'My Playlist',

      playlistTracks: [{name1: 'playlistName1', artist1: 'playlistArtist1', album1: 'playlistAlbum1', id: 4}, {name2: 'playlistName2', artist2: 'playlistArtist2', album2: 'playlistAlbum2', id: 5}, {name3: 'playlistName3', artist3: 'playlistArtistt3', album3: 'playlistAlbum3', id: 6}]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  };

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } 

    this.push(track);
    this.setState({playlistTracks: tracks});
  };

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    track = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playlistTracks: tracks});
  };

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}
            onAdd={this.addTrack} />
          <Playlist playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack} />
        </div>
      </div>
    </div>
  );
    }
}

export default App;

