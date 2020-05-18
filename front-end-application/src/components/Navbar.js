import React from 'react';
import {BrowserRouter,Switch,Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginStatus} from '../actions/actions'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import '../index.css'
const url = 'http://localhost:2000/'

class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state={
           
        }

        if(localStorage.getItem('loggedIn')=='true'){
            this.props.changeLoginStatus(true)
        }

    }

    handleLogout=()=>{
        localStorage.setItem('loggedIn',false)
        localStorage.setItem('emailId','')
        this.props.changeLoginStatus(false)
    }


    render=()=>{

        return(this.props.loggedIn?
            (
                    <nav  className='navbar navbar-expand-sm nav-trans'>
                        <Link className='navbar-brand text-white'>eezyGo</Link>
                        <ul  className='navbar-nav'>
                            <li className='nav-item'>
                                <Link className='nav-link text-white'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link text-white'>Get Bookings</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link text-white'>About</Link>
                            </li>
                        </ul>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <Link className='nav-link text-white' onClick={this.handleLogout}>Logout</Link>
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
                                <Link className='navbar-brand text-white'>eezyGo</Link>
                                <ul className='navbar-nav'>
                                    <li className='nav-item'>
                                        <Link className='nav-link text-white'>Home</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link text-white'>Get Bookings</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link text-white'>About</Link>
                                    </li>
                                </ul>
                                <ul className='navbar-nav ml-auto'>
                                    <li className='nav-item'>
                                        <Link onClick={this.handleLogout} className=' text-white'>Logout</Link>
                                    </li>
                                </ul>
                            </nav>
                    )
                    :
                    (
                            <nav className='navbar navbar-expand-sm nav-trans'>
                                <Link className='navbar-brand text-white'>eezyGo</Link>
                                <ul className='navbar-nav'>
                                    <li className='nav-item'>
                                        <Link className='nav-link text-white'>Home</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link text-white'>Get Bookings</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link text-white'>About</Link>
                                    </li>
                                </ul>
                                <ul className='navbar-nav ml-auto'>
                                    <li className='nav-item'>
                                        <Link to='/login' className='nav-link text-white'>Sign In</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to='/register' className='nav-link text-white'>Register</Link>
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
