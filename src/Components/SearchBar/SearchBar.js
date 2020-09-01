import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {term: ''};

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  };
  

  search() {
    this.props.onSearch(this.state.term);
  };

  handleTermChange(event) {
    this.setState({term: event.target.value});
  };

  handleKeyDown(event) {
    if (this.state.term === '') {
      return;
    }
    if (event.nativeEvent.keyCode === 13) {
      this.props.onSearch(this.state.term);
      event.preventDefault();
    }
  };

  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} onKeyDown={this.handleKeyDown} placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton" onClick={this.search}>SEARCH</button>
      </div>
    );
  }
};

export default SearchBar;

