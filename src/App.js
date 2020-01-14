import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './Components/layout/Navbar'
import Dashboard from './Components/dashboard/Dashboard'
import ProductDetails from './Components/products/ProductDetails'
import SignIn from './Components/auth/SignIn'
import SignUp from './Components/auth/SignUp'
import CreateProduct from './Components/products/CreateProduct'
//import ProductSummary from './Components/products/ProductSummary'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">    
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/product/:id' component={ProductDetails}/>
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/createproduct' component={CreateProduct} />
      </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
