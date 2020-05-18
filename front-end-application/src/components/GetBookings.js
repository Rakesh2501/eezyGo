import React from 'react'
import {BrowserRouter as Router,Link,Switch,Redirect} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar'
class GetBookings extends React.Component{
    constructor(){
        super()
        
    }

    render(){
        return(
            <React.Fragment>
                <h1>shbkh</h1>
            </React.Fragment>
        )
    }
}

export default GetBookings