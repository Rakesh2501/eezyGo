import React from 'react'
import {BrowserRouter as Router,Link,Switch,Redirect} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar'

class Home extends React.Component{
    constructor(){
        super()
        
    }

    render(){
        return(
            <React.Fragment>
                {/* <img src={require('../img/homepage1.jpg')}/> */}
                <div className='container-fluid'>
                    <div className='row'>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home

