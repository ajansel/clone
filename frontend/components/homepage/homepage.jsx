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
    console.log("aa");
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('wheel', this.handleScroll);
    console.log("bye");
    
  }

  handleScroll(event) {
    window.removeEventListener('wheel', this.handleScroll);
    console.log("start");
    
    let newPane;
    if (event.deltaY < 0) {
      newPane = this.state.currentPane + 1;
      this.setState({
        currentPane: newPane
      });
    } else if (event.deltaY > 0) {
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
    console.log(event);
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
    return (
      <div>
        {this.state.currentPane}
      </div>
    );
  }
}

export default Homepage;