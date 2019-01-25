import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
  render() {
          
    return (
      <div className="input__container">
        <input className="main__input" type="text" placeholder="Busca tu personaje favorito" onKeyUp = {this.props.onkeyUpAction}/>
      </div>
    );
  }
}

Filters.propTypes = {
  onkeyUpAction: PropTypes.func.isRequired
}

export default Filters;