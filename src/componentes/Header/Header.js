import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return ( 
        <header>
            <Link to={'/'}>
                <h1 name="logo_imagen">Tienda</h1>
            </Link>
        </header>
     )
}
 
export default Header;