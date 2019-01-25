import React, { Component } from 'react';
import { getHPCharacterList } from './services/ListFetchService';
import Filters from './components/Filters';
import CharacterList from './components/CharacterList';
import MoreDetailsCard from './components/MoreDetailsCard';
import {Switch, Route} from 'react-router-dom';
import './App.scss';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      characters : [],
      nameFilter: '',
    };

    this.getSearch = this.getSearch.bind(this);

    this.getCharacterList();
  }

  componentDidMount(){
    this.getCharacterList();
  }

  getCharacterList(){

    getHPCharacterList()
    .then(data => {
      const newDataList = data.map( (item,key) => { return { ...item,id: key }});
      console.log(newDataList);
      this.setState({
        characters : newDataList       
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
    const {characters, nameFilter} = this.state;
    const filterItem = characters.filter(item => {const characterName = `${item.name}`;
      if(characterName.toUpperCase().includes(nameFilter.toUpperCase())){
        return true;
      }else{
        return false;
      }  
    });
    return filterItem;
  }
   
  render() {
    const listHPResult = this.characterFilter();
    const {characters} = this.state;
    
    return (
      <div className="App">
        <header className="header"> 
          <h1 className="title">Harry Potter Characters</h1>
          <Switch>
            <Route exact path="/" render = {()=><Filters onkeyUpAction = {this.getSearch} />} />
          </Switch>          
        </header>
        <main className="main"> 
          <Switch>
            <Route exact path="/" render = {()=><CharacterList listHPResult = {listHPResult} />} />            
            <Route path="/characterHP/:id" render = {props=><MoreDetailsCard match={props.match}listHPResult = {characters} characterId={2} />} />                  
          </Switch>          
        </main>
      </div>
    );
  }
}

export default App;
