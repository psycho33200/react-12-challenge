import React, { Component } from 'react';
import './App.css';

class TabSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  

  render() {
    
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={this.props.handle}
          className={this.props.active === 'home' ? 'active' : ''}
        >
          Home
        </button>
        <button
          id="about"
          onClick={this.props.handle}
          className={this.props.active === 'about' ? 'active' : ''}
        >
          About
        </button>
        <button
          id="contact"
          onClick={this.props.handle}
          className={this.props.active === 'contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;
