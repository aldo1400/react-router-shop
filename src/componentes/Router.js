import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Nosotros from './Nosotros'
import Error from './Error'
import Productos from './Productos'
import infoProductos from '../datos/datos.json'
import Header from './Header';

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
            <Route component={Error}/>
        </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default Router;