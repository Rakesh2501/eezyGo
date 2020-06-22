import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect,Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import '../src/index'
import Login from './components/Login'
import Home from './components/Home';
import Navbar from './components/Navbar'
import GetBookings from './components/GetBookings'
import Register from './components/Register';
import FindBuses from './components/FindBuses';
import BusDetails from './components/BusDetails';
import Booking from './components/Booking';
import Billing from './components/Billing';
import BookingSuccess from './components/BookingSuccess'

class App extends React.Component{
    constructor(props){
      super(props)
    }

    render(){
      return(
        <React.Fragment>
          <div>
            <Router>
              <Navbar />  
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register} />     
                    <Route path='/getBookings' component={GetBookings}></Route>     
                    <Route path='/findBuses' component={FindBuses}/>
                    <Route path='/busDetails' component={BusDetails} />
                    <Route path='/booking' component={Booking}/>
                    <Route path='/billing' component={Billing}/>
                    <Route path='/bookingSuccess' component={BookingSuccess}/>
                </Switch>
              </Router>
          </div>

        </React.Fragment>
        )
    }
}

export default App;
