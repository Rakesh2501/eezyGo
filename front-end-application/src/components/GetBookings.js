import React from 'react'
import {BrowserRouter as Router,Link,Switch,Redirect} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar'
class GetBookings extends React.Component{
    constructor(props){
        super(props)
        
    }

    componentDidMount=()=>{
        
    }

    render(){
        return(
            <React.Fragment>

            </React.Fragment>
        )
    }
}

export default GetBookings