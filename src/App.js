import React, { Component } from 'react';
import './App.css';

const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results : []
    };

    this.getCharacter();
  }

  getCharacter(){
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        results : data       
      });
    });
  }
  


  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Lista de personajes de la Saga Harry Potter</h1>
        </header>
        <main className="main">
          <div className="main__container">
            <input className="main__input" type="text"></input>
            <ul className="main__list">
              <li className="list__item">
                <img src="item__picture" alt="" />
                <h2 className="item__name"> </h2>
                <p className="item__house"></p>
                <div className="item__moreinfo">
                </div>
              </li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
