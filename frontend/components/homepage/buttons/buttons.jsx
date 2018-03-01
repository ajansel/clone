import React from 'react';
import { Link } from 'react-router-dom';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pane = <div></div>;
    if (this.props.currentPane === 0) {
      pane = "zero";
    } else if (this.props.currentPane === 1) {
      pane = "one";
    } else if (this.props.currentPane === 2) {
      pane = "two";
    } else if (this.props.currentPane === 3) {
      pane = "three";
    } else if (this.props.currentPane === 4) {
      pane = "four";
    } else if (this.props.currentPane === 5) {
      pane = "five";
    } 
    
    return (
      <div className={`buttons ${pane}`}>
        <div onClick={() => this.props.handleClick(0)}><i class="far fa-circle"></i></div>
        <div onClick={() => this.props.handleClick(1)}><i class="far fa-circle"></i></div>
        <div onClick={() => this.props.handleClick(2)}><i class="far fa-circle"></i></div>
        <div onClick={() => this.props.handleClick(3)}><i class="far fa-circle"></i></div>
        <div onClick={() => this.props.handleClick(4)}><i class="far fa-circle"></i></div>
        <div onClick={() => this.props.handleClick(5)}><i class="far fa-circle"></i></div>
      </div>
    );
  }
}

export default Buttons;