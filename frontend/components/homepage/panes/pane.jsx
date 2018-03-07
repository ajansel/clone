import React from 'react';
import { Link } from 'react-router-dom';

class Pane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pane, color;
    if (this.props.currentPane === 0) {
      pane = 0;
      color = 'first';
    } else if (this.props.currentPane === 1) {
      pane = 1;
      color = 'second';
    } else if (this.props.currentPane === 2) {
      pane = 2;
      color = 'third';
    } else if (this.props.currentPane === 3) {
      pane = 3;
      color = 'fourth';
    } else if (this.props.currentPane === 4) {
      pane = 4;
      color = 'fifth';
    } else if (this.props.currentPane === 5) {
      pane = 5;
      color = 'sixth';
    }

    return (
      <div className={`pane ${color}`}>
        {"test"}
      </div>
    );
  }
}

export default Pane;