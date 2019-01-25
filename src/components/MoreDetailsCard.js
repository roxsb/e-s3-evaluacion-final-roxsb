import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
// import gry from '../images/g.jpg';
// import shly from '../images/s.jpg';
// import huf from '../images/h.jpeg';
// import rav from '../images/r.jpg';


class MoreDetailsCard extends Component {

  liveOrNot(alive){
    if(alive === true){
     return "vivo 🖤 ";
    }else if(alive === ''){
      return "desconocido";
    }else{
      return "muerto 💀";
    }
  };

  // drawHouse(house){
  //   if(house === "Gryffindor"){
  //     return gry
  //   }else if(house === "Slytherin"){
  //     return shly
  //   }else if(house === "Hufflepuff"){
  //     return huf
  //   }else if(house === "Ravenclaw"){
  //     return rav
  //   }else{
  //     return "no tiene casa :("
  //   } 
  // }


  render() {
    
    const {listHPResult} = this.props; 
    const characterId = this.props.match.params.id;
    const selectedCharacter = listHPResult[characterId];    
    
    
    if (listHPResult.length === 0 && characterId >= listHPResult.length){
      return(
        <p>No podemos encontrar ese personaje ¿seguro que existe?</p>
      );
    }else{
      const name = selectedCharacter.name;
      const image = selectedCharacter.image;
      const house = selectedCharacter.house;
      const yearOfBirth = selectedCharacter.yearOfBirth;
      const patronus = selectedCharacter.patronus;
      const alive = selectedCharacter.alive;
        return (
          <Fragment>
            <div className="item__moreinfo">        
              <img className="item__picture-details" src={image}  alt={name}/>
              <div className="detail__ifo">
                <h2 className="item__name-details">{name}</h2>
                <ul className="list__details">
                  <li className="item__house-details">House: {house  === '' ? "sin casa :(" : house }
                  {/* {this.drawHouse(house)} */}                  
                  </li>
                  <li className="item__year-details">Year of birth: {yearOfBirth  === '' ? "no lo quiere confesar" : yearOfBirth }</li>
                  <li className="item__patronus-details">Patronus: {patronus === '' ? "desconocido" : patronus}</li>
                  <li className="item__live-details">State: {this.liveOrNot(alive)}                
                  </li>                   
                </ul>              
              </div>
            </div>
            <div className="link__container">
              <Link to = "/" className="link__return">Volver</Link>   
            </div>          
          </Fragment>
        );                  
    }       
  }
}

MoreDetailsCard.propTypes = {
  listHPResult: PropTypes.array.isRequired,
  match : PropTypes.object.isRequired 
}

export default MoreDetailsCard;

