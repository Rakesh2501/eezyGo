import React from 'react'
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {Paper, Grid,TextField, Button} from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';


class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            formValues:{
                fname:'',
                lname:'',
                email:'',
                age:null,
                address:'',
                password:''
            }
        }
    }

    handleChange=(e)=>{
        let field = e.target.name
        let value = e.target.value

        let {formValues} = this.state
        formValues[field] = value

        this.setState({formValues:formValues})
    }

    render=()=>{
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12' style={{right:'1%',margin:'2%'}}>
                        <div className='card' style={{position:'absolute',right:'1%',backgroundColor:'rgba(255,255,250,0.6)',width:400}}>
                            <h5 className='display-4 text-center'>Registration</h5>
                            <div className='card-body'>
                                <div className='form-group'>
                                    <TextField label='First Name' name='fname' onChange={(e)=>this.handleChange(e)} value={this.state.formValues.fname} autoComplete='off' color='primary' fullWidth={true}/> 
                                </div>
                                <div className='form-group'>
                                    <TextField label='Last Name' name='lname' onChange={(e)=>this.handleChange(e)} value={this.state.formValues.lname} autoComplete='off' color='primary' fullWidth={true}/> 
                                </div>
                                <div className='form-group'>
                                    <TextField label='Email' name='email' onChange={(e)=>this.handleChange(e)} value={this.state.formValues.email} autoComplete='off' color='primary' fullWidth={true}/> 
                                </div>
                                <div className='form-group'>
                                    <TextField type='number' label='Age' name='age' onChange={(e)=>this.handleChange(e)} value={this.state.formValues.age} autoComplete='off' color='primary' fullWidth={true}/> 
                                </div>
                                <div className='form-group'>
                                    <TextField label='Address' name='address' onChange={(e)=>this.handleChange(e)} value={this.state.formValues.address} autoComplete='off' color='primary' fullWidth={true}/> 
                                </div>
                                <div className='form-group'>
                                    <TextField type='password' label='Password' name='password' onChange={(e)=>this.handleChange(e)} value={this.state.formValues.password} autoComplete='off' color='primary' fullWidth={true}/> 
                                </div>
                                <div className='text-center'>
                                    <Button variant='contained' color='primary' type='submit'>SUBMIT</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register