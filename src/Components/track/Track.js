import React from 'react';
import './Track.css';

class Tracks extends React.Component() {
  
  renderAction() {
    if (isRemoval !== true) {
      return (
        <div>
          <button>+</button>
        </div>
      );
    } else {
      return (
        <div>
          <button>-</button>
        </div>
      );
    }
  };
  
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>/*track name will go here*/</h3>
          <p>/*track artist will go here*/ | /*track album will go here*/</p>
        </div>
        <button className="Track-action">{this.renderAction}</button>
      </div>
    );
  }
};

module.exports = Track;