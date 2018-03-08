import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`session-form`}>
        <h1>tumblr.</h1>
      </div>
    );
  }
}

export default SessionForm;