import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect,Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import '../src/index'
import Login from './components/Login'
import Home from './components/Home';
import Navbar from './components/Navbar'
import GetBookings from './components/GetBookings'
import Register from './components/Register';
class App extends React.Component{
    constructor(){
      super()
    }

    render(){
      return(
        <React.Fragment>
          <div>
            <Router>
              <Navbar/>  
                <Switch>
                    <Route exact path='/' render={()=><Home/>}></Route>
                    <Route path='/home' render={()=><Home/>}></Route>
                    <Route path='/login' render={()=><Login/>}></Route>
                    <Route path='/register' render={()=><Register/>} />     
                    <Route path='/getBookings' component={GetBookings}></Route>     
                </Switch>
              </Router>
          </div>

        </React.Fragment>
        )
    }
}

export default App;
