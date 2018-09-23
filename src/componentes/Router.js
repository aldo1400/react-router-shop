import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Nosotros from './Nosotros'
import Error from './Error'
import Productos from './Productos'
import Header from './Header';
import SingleProducto from './SingleProducto'
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
        <Switch>
            <Route exact path="/" render={()=>(
                <Productos
                    productos={this.state.productos}
                />
            )}/>
            <Route exact path="/nosotros" component={Nosotros}/>
            <Route exact path="/producto/:productoId" render={(props)=>{
                let idProducto=props.match.params.productoId;
                return(
                    <SingleProducto
                        producto={this.state.productos[idProducto]}
                    />
               )
            }
         }/>
           
            <Route component={Error}/>
        </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default Router;