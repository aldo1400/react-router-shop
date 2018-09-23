import React from 'react';
import './Contacto.css'
const Contacto = () => {
    return ( 
        <form>
            <legend>Formulario de Contacto</legend>
            <div className="input-field">
                <label>Nombre:</label>
                <input type="text" placeholder="Tu nombre" />
            </div>
            <div className="input-field">
                <label>Email:</label>
                <input type="email" placeholder="Tu email" />
            </div>
            <div className="input-field">
                <label>Mensaje:</label>
                <textarea></textarea>
            </div>
            <div className="input-field enviar">
                <input type="submit" value="Enviar"/>
            </div>
        </form>
     )
}
 
export default Contacto;