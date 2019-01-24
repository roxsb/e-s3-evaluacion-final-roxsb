import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CharacterCard extends Component {
  render() {

    const {image, name, house} = this.props;  
    
    return (
      <div className="item__card">
        <img className="item__picture" src={image}  alt={name}/>
        <h2 className="item__name">{name}</h2>
        <p className="item__house">{house}</p>
        <div className="item__moreinfo">
        </div> 
      </div>
    );
  }
}

CharacterCard.propTypes = {
  image : PropTypes.string.isRequired,
  name : PropTypes.string.isRequired,
  house : PropTypes.string.isRequired
}

export default CharacterCard;