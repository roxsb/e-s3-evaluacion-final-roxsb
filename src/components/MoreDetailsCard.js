import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MoreDetailsCard extends Component {

  // liveOrNot(){
  //   if(this.alive === true){
  //    return "vivo";
  //   }else{
  //     return "muerto";
  //   }
  // };

  render() {
    
    const {listHPResult, characterId} = this.props; 

    if (listHPResult.length === 0 && characterId >= listHPResult.length){
      return(
        <p>No podemos encontrar ese personaje ¿seguro que existe?</p>
      );
    }else{    
      
      const selectedCharacter = listHPResult[characterId]; 
      const name = selectedCharacter.name;
      const image = selectedCharacter.image;
      const house = selectedCharacter.house;
      const yearOfBirth = selectedCharacter.yearOfBirth;
      const patronus = selectedCharacter.patronus;
      const alive = selectedCharacter.alive;

  
      
      return (
          <div className="item__moreinfo">        
            <img className="item__picture-details" src={image}  alt={name}/>
            <h2 className="item__name-details">Nombre: {name}</h2>
            <ul className="list__details">
              <li className="item__house-details">Casa: {house}</li>
              <li className="item__year-details">Año de nacimiento: {yearOfBirth}</li>
              <li className="item__patronus-details">Patronus: {patronus}</li>
              <li className="item__live-details">Estado: {alive ? "vivo" : "muerto" || "desconocido"}
              {/* {this.liveOrNot()} */}                
              </li>                   
            </ul>                 
          </div>
      );
          
    }


    
    
  }
}

MoreDetailsCard.propTypes = {
  listHPResult: PropTypes.array.isRequired,
  characterId : PropTypes.number,
   
  image : PropTypes.string,
  name : PropTypes.string,
  house : PropTypes.string,
  year : PropTypes.number,
  patronus : PropTypes.string,
  live : PropTypes.bool
}

export default MoreDetailsCard;

