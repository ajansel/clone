import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={`none`}>
        <div className="logo-and-search">
          <img src="https://openclipart.org/image/2400px/svg_to_png/232062/Logo-Logo-Grayscale.png" alt="logo"/>
          <p>Search bar here</p>
        </div>
        <p>Session Button here</p>
      </header>
    );
  }
}

export default Navbar;