import React, { Component } from 'react';

class Filters extends Component {
    render() {
            
        return (
          <div className="inpuṭ__container">
            <input className="main__input" type="text" placeholder="Busca tu personaje favorito" onKeyUp = {this.props.onkeyUpAction}/>
          </div>
        );

}
}


export default Filters;