import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Nosotros from './Nosotros/Nosotros'
import Error from './Error/Error'
import Productos from './Productos/Productos'
import Header from './Header/Header';
import SingleProducto from './SingleProducto/SingleProducto'
import Contacto from './Contacto/Contacto'
import Navegacion from './Navegacion/Navegacion'
import infoProductos from '../datos/datos.json'

class Router extends Component {

    state={
        productos:[]
    }

    componentWillMount(){
        this.setState({
            productos:infoProductos
        })
    }

  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
      <Header/>
      <Navegacion/>
        <Switch>
            <Route exact path="/" render={()=>(
                <Productos
                    productos={this.state.productos}
                />
            )}/>
            <Route exact path="/nosotros" component={Nosotros}/>
            <Route exact path="/productos" render={()=>(
                <Productos
                    productos={this.state.productos}
                />
            )
                
            }/>
            <Route exact path="/producto/:productoId" render={(props)=>{
                let idProducto=props.match.params.productoId;
                return(
                    <SingleProducto
                        producto={this.state.productos[idProducto]}
                    />
               )
            }
         }/>
            <Route exact path="/contacto" component={Contacto}/>
            <Route component={Error}/>
        </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default Router;