import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPane: 0 };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('wheel', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('wheel', this.handleScroll);    
  }

  handleScroll(event) {
    window.removeEventListener('wheel', this.handleScroll);
    
    let newPane;
    if (event.deltaY > 0 && this.state.currentPane < 3) {
      newPane = this.state.currentPane + 1;
      this.setState({
        currentPane: newPane
      });
    } else if (event.deltaY < 0 && this.state.currentPane > 0) {
      newPane = this.state.currentPane - 1;
      this.setState({
        currentPane: newPane
      });
    }

    // Wait 2 seconds to set another event listener to prevent continued scroll
    const callback = () => window.addEventListener('wheel', this.handleScroll);
    setTimeout(callback, 2000);
  }

  handleKeyDown(event) {
    let newPane;
    if (event.key === "ArrowDown") {
      newPane = this.state.currentPane + 1;
      this.setState({
        currentPane: newPane
      });
    } else if (event.key === "ArrowUp") {
      newPane = this.state.currentPane - 1;
      this.setState({
        currentPane: newPane
      });
    }
  }

  render() {
    let pane;
    if (this.state.currentPane === 0) {
      pane = 0;
    } else if (this.state.currentPane === 1) {
      pane = 1;
    } else if (this.state.currentPane === 2) {
      pane = 2;
    } else if (this.state.currentPane === 3) {
      pane = 3;
    }
    console.log(this.state.currentPane);
    
    return (
      <div>
        {pane}
      </div>
    );
  }
}

export default Homepage;