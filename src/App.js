import React, { Component } from 'react';
import './App.css';
import { getHPCharacterList } from './services/listCharacterFetch';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results : [],
      list: '',
    };

    this.getSearch = this.getSearch.bind(this);

    this.getCharacterList();
  }

  getCharacterList(){
    getHPCharacterList()
    .then(data => {

      const newDataList = data.map( (item,key) => { return { ...item,id: key }});
      console.log(newDataList);
      this.setState({
        results : newDataList       
      });
    });
  }

  getSearch(event){
    const listHP = event.currentTarget.value;
    this.setState({
      list : listHP
    });
  }
  
  characterFilter(){
    const filterItem = this.state.results.filter(item => {
      const characterName = `${item.name}`;
      if(characterName.includes(this.state.list)){
        return true;
      }else{
        return false;
      }  
    });
    return filterItem;
  }
   
//no podemos tener una función que toca el estado dentro del render. Todas las funciones que tocan el estado fuera del render
  render() {
    const listHPResult = this.characterFilter();
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Lista de personajes de la Saga Harry Potter</h1>
        </header>
        <main className="main">
          <div className="main__container">
            <input className="main__input" type="text" placeholder="Busca tu personaje favorito" onKeyUp = {this.getSearch}/>
            <ul className="main__list">
            {listHPResult.map(item => {
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
