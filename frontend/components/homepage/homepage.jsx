import React from 'react';
import { Link } from 'react-router-dom';
import PaneContainer from './panes/pane_container';
import ButtonsContainer from './buttons/buttons_container';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPane: 0 };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    if (event.deltaY > 0 && this.state.currentPane < 5) {
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
    if (event.key === "ArrowDown" && this.state.currentPane < 5) {
      newPane = this.state.currentPane + 1;
      this.setState({
        currentPane: newPane
      });
    } else if (event.key === "ArrowUp" && this.state.currentPane > 0) {
      newPane = this.state.currentPane - 1;
      this.setState({
        currentPane: newPane
      });
    }
  }

  handleClick(buttonNum) {
    this.setState({currentPane: buttonNum});
  }

  render() {    
    return (
      <div>
        <PaneContainer currentPane={this.state.currentPane}/>
        <ButtonsContainer handleClick={this.handleClick} currentPane={this.state.currentPane}/>
      </div>
    );
  }
}

export default Homepage;