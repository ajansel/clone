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
      color = 'red';
    } else if (this.props.currentPane === 1) {
      pane = 1;
      color = 'blue';
    } else if (this.props.currentPane === 2) {
      pane = 2;
      color = 'green';
    } else if (this.props.currentPane === 3) {
      pane = 3;
      color = 'yellow';
    }

    return (
      <div className={`pane ${color}`}>
        {"test"}
      </div>
    );
  }
}

export default Pane;