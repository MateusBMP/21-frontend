// import card1 from './playing-cards-1.svg';
import card2 from './playing-cards-2.svg';
import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App position-relative vh-100">
        <header className="App-header position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center">
          <img src={card2} className="App-logo" alt="logo" />
          <h1 className="App-title mt-2">blackjack</h1>
          <Link to="/entrar">
            <button type="button" className="btn btn-sm btn-outline-pink mt-2 px-3">iniciar</button>
          </Link>
        </header>
      </div>
    )
  }
}

export default App;
