import React, { Component } from 'react'
import './Nosotros.css'
class Nosotros extends Component {
  render() {
    return (
      <div className="contenedor-nosotros">
        <div className="imagen">
            <img src="img/camisa_1.png" alt="imagen nosotros"/>
        </div>
        <div className="contenido">
            <h2>Sobre nosotros</h2>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </div>
    )
  }
}
export default Nosotros;
