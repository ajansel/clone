import React from 'react';
import { Link } from 'react-router-dom';

class SessionIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {form: undefined};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    return () => {
      if (type === "signup") {
        this.setState({ form: type });
      } else if (type === "login") {
        this.setState({ form: type });
      }
    };
  }

  render() {
    let div;
    if (this.state.form === undefined) {
      div = 
      <div className={`session-intro`}>
        <h1>tumblr.</h1>
        <h2>
          Come for what you love.
          <br />
          Stay for what you discover.
        </h2>
        <button onClick={this.handleClick("signup")}>Get Started</button>
        <button onClick={this.handleClick("login")}>Log In</button>
      </div>;
    } else if (this.state.form === "signup") {
      // Should stay on the current route and render signup form container
      // This should also cause the login button to render in the nav bar 
      // --> Thus we will need to store this info in the ui slice of state
      div =
        <div className={`session-intro`}>
          {"sign up"}
        </div>;
    } else if (this.state.form === "login") {
      // Should switch to 'login' route and render login form container
      // This should also cause the login button to render in the nav bar 
      // --> Thus we will need to store this info in the ui slice of state
      div =
        <div className={`session-intro`}>
          {"log in"}
        </div>;
    }
    return (
      div
    );
  }
}

export default SessionIntro;