import React, { Component } from 'react';
import './App.css';
import { getHPCharacterList } from './services/ListFetchService';
import Filters from './components/Filters';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results : [],
      nameFilter: '',
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
    const nameFilterListHP = event.currentTarget.value;
    this.setState({
      nameFilter : nameFilterListHP
    });
  }
  
  characterFilter(){
    const {results, nameFilter} = this.state;
    const filterItem = results.filter(item => {const characterName = `${item.name}`;
      if(characterName.toUpperCase().includes(nameFilter.toUpperCase())){
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
          <Filters onkeyUpAction = {this.getSearch} />
            
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
