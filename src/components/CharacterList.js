import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class CharacterList extends Component {
  render() {   
             
    return (
      <ul className="main__list">
        {this.props.listHPResult.map(item => {
          return(
            <li className="list__item" id={item.id} key={item.id}>
            <Link to={`/characterHP/${item.id}`} className="list__item-link">
              <CharacterCard 
                image = {item.image}
                name = {item.name}
                house = {item.house === '' ? "sin casa :(" : item.house } 
                yearOfBirth = {item.yearOfBirth}
                patronus = {item.patronus}
                alive = {item.alive}           
              /> 
            </Link>              
            </li>
          );
        })}
      </ul>
    );
  }
}

CharacterList.propTypes = {
  listHPResult: PropTypes.array.isRequired
} 

export default CharacterList;