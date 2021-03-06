import React from 'react';
import {BrowserRouter,Route, Switch,Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginStatus} from '../actions/actions'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
// import '../index.css'
const url = 'http://localhost:2000/'

class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state={
           logoutClicked:false
        }

        if(localStorage.getItem('loggedIn')=='true'){
            this.props.changeLoginStatus(true)
        }

    }

    handleLogout=()=>{
        localStorage.setItem('loggedIn',false)
        localStorage.setItem('emailId','')
        localStorage.setItem('custId','')
        this.props.changeLoginStatus(false)
        this.setState({logoutClicked:true})      

    }


    render=()=>{
        
        return(this.props.loggedIn?
            (
                    <nav  className='navbar navbar-expand-sm nav-trans'>
                        <Link className='navbar-brand'><span style={{color:'black'}}>eezyGo</span></Link>
                        <ul  className='navbar-nav'>
                            <li className='nav-item'>
                                <Link className='nav-link text-body' to={'/'}>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link text-body' to={'/getBookings'}>Get Bookings</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link text-body' >About</Link>
                            </li>
                        </ul>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <Link className='nav-link text-body' to={'/login'}  onClick={this.handleLogout}>Logout</Link>
                            </li>
                        </ul>
                    </nav>
         
            )
            :
            this.props.loggedIn==false?
            (
                localStorage.getItem('loggedIn')=='true'?
                    (
                            <nav className='navbar navbar-expand-sm nav-trans'>
                                <Link className='navbar-brand text-body'>eezyGo</Link>
                                <ul className='navbar-nav'>
                                    <li className='nav-item'>
                                        <Link className='nav-link text-body' to={'/'}>Home</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link text-body' to={'/getBookings'}>Get Bookings</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link text-body'>About</Link>
                                    </li>
                                </ul>
                                <ul className='navbar-nav ml-auto'>
                                    <li className='nav-item'>
                                        <Link onClick={this.handleLogout} className=' text-body'>Logout</Link>
                                    </li>
                                </ul>
                            </nav>
                    )
                    :
                    (
                            <nav className='navbar navbar-expand-sm nav-trans'>
                                <Link className='navbar-brand text-body'>eezyGo</Link>
                                <ul className='navbar-nav'>
                                    <li className='nav-item'>
                                        <Link className='nav-link text-body'>Home</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link text-body'>About</Link>
                                    </li>
                                </ul>
                                <ul className='navbar-nav ml-auto'>
                                    <li className='nav-item'>
                                        <Link to='/login' className='nav-link text-body'>Sign In</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to='/register' className='nav-link text-body'>Register</Link>
                                    </li>
                                </ul>
                            </nav>
                    )
            )
            :
            null)
            
        
    }
}

const mapStateToProps = (state)=>{
    return(
        {
            loggedIn:state.loggedIn
            
        }
    )
}

const mapDispatchToProps={
    changeLoginStatus:loginStatus,
  
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
