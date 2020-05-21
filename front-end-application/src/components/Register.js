import React from 'react'
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {Paper, Grid} from '@material-ui/core'
// import '../index.css'

class Register extends React.Component{
    constructor(props){
        super(props)
    }
    render=()=>{
        return(
            <div className='card'>
                <div className='card-content'>
                    <h1>shcbn</h1>
                </div>
            </div>
        )
    }
}

export default Register