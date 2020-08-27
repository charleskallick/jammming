import React from 'react';
import './app.css';

import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [{name: 'name1', artist: 'artist1', album: 'album1', id: 1}, {name: 'name2', artist: 'artist2', album: 'album2', id: 2}, {name: 'name3', artist: 'artist3', album: 'album3', id: 3}],

      playlistName: 'My New Playlist',

      playlistTracks: [{name: 'trackName1', artist: 'trackArtist1', album: 'trackAlbum1', id: 4}, {name: 'trackName2', artist: 'trackArtist2', album: 'trackAlbum2', id: 5}, {name: 'trackName3', artist: 'trackArtistt3', album: 'trackAlbum3', id: 6}]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlayist = this.savePlayist.bind(this);
    this.search = this.search.bind(this);
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

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  };

  savePlayist() {
    const trackUri = this.state.playlistTracks(track => track.uri);
  };

  search(term) {
    console.log(term);
  };

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search } />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}
                         onAdd={this.addTrack} />
          <Playlist playlistName={this.state.playlistName}
                    playlistTracks={this.state.playlistTracks}
                    onRemove={this.removeTrack}
                    onNameChange={this.updatePlaylistName}
                    onSave={this.savePlayist} />
        </div>
      </div>
    </div>
  );
    }
}

export default App;

