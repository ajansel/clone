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
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQzNSIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjU2IDQ0NiIgeG1s%0D%0AbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlk%0D%0AWU1pZCI+PHBhdGggZD0iTTIzNC41NzYgMzU1LjhjLTguMjggMy45NS0yNC4xMjUgNy4zODctMzUu%0D%0AOTUzIDcuNy0zNS42NC45NTktNDIuNTYtMjUuMDQtNDIuODcyLTQzLjkyMVYxODAuOTIySDI0NS4y%0D%0Adi02Ny40MmgtODkuMTEzVi4wNDJIOTAuODMxYy0xLjA3MSAwLTIuOTQ2LjkzNy0zLjE5MiAzLjMy%0D%0ANUM4My44MjMgMzguMDkzIDY3LjU1NCA5OS4wNDEgMCAxMjMuMzl2NTcuNTMzaDQ1LjA4djE0NS41%0D%0ANTNjMCA0OS44MTIgMzYuNzU3IDEyMC42MDIgMTMzLjc5MiAxMTguOTUgMzIuNzE3LS41NTggNjku%0D%0AMDcyLTE0LjI4MyA3Ny4xMjgtMjYuMDg4TDIzNC41NzYgMzU1LjgiIGZpbGw9IiMzMDNENEQiLz48%0D%0AL3N2Zz4=" alt="logo"/>
          <p>Search bar here</p>
        </div>
        <p>Session Button here</p>
      </header>
    );
  }
}

export default Navbar;