import React, { Component } from 'react';
import './App.css';
import { getHPCharacter } from './services/characterFetch';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results : []
    };

    this.getCharacter();
  }

  getCharacter(){
    getHPCharacter()
    .then(data => {

      const newDataList = data.map( (item,key) => { return { ...item,id: key }});
      console.log(newDataList);
      this.setState({
        results : newDataList       
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
            {this.state.results.map(item => {
              return(
              <li className="list__item" key={item.id}>
                <img className="item__picture" src={item.image}  alt={item.name}/>
                <h2 className="item__name">{item.name}</h2>
                <p className="item__house">{item.house}</p>
                <div className="item__moreinfo">
                </div>
              </li>
              );
            })}
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
