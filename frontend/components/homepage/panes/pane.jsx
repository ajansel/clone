import React from 'react';
import { Link } from 'react-router-dom';
import SessionIntroContainer from '../session_form/session_intro_container';

class Pane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pane, color, container;
    if (this.props.currentPane === 0) {
      pane = 0;
      color = 'first';
      container = <SessionIntroContainer />;
    } else if (this.props.currentPane === 1) {
      pane = 1;
      color = 'second';
      container = <div></div>;
    } else if (this.props.currentPane === 2) {
      pane = 2;
      color = 'third';
      container = <div></div>;
    } else if (this.props.currentPane === 3) {
      pane = 3;
      color = 'fourth';
      container = <div></div>;
    } else if (this.props.currentPane === 4) {
      pane = 4;
      color = 'fifth';
      container = <div></div>;
    } else if (this.props.currentPane === 5) {
      pane = 5;
      color = 'sixth';
      container = <div></div>;
    }

    return (
      <div className={`pane ${color}`}>
        {container}
      </div>
    );
  }
}

export default Pane;