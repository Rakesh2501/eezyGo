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
            },
            errMsgs:{
                fname:'',
                lname:'',
                email:'',
                age:null,
                address:'',
                password:''
            },
            formError:''
        }
    }

    handleChange=(e)=>{
        let field = e.target.name
        let value = e.target.value

        let {formValues} = this.state
        formValues[field] = value

        this.validate(field,value)

        this.setState({formValues:formValues})
    }

    validate=(field,value)=>{
        let {errMsgs} = this.state

        if(field==='fname'){
            if(value===''){
                errMsgs.fname='Required Field'
                this.setState({errMsgs:errMsgs})
            }else{
                errMsgs.fname=''
                this.setState({errMsgs:errMsgs})
            }
        }

        if(field==='lname'){
            if(value===''){
                errMsgs.lname='Required Field'
                this.setState({errMsgs:errMsgs})
            }else{
                errMsgs.lname=''
                this.setState({errMsgs:errMsgs})
            }
        }

        if(field==='age'){
            if(value===null){
                errMsgs.age='Required Field'
                this.setState({errMsgs:errMsgs})
            }else if(value<18){
                errMsgs.age='Age should be greater than 18'
                this.setState({errMsgs:errMsgs})
            }
            else{
                errMsgs.age=''
                this.setState({errMsgs:errMsgs})
            }
        }

        if(field==='password'){
            if(value===''){
                errMsgs.password='Required Field'
                this.setState({errMsgs:errMsgs})
            }else{
                errMsgs.lname=''
                this.setState({errMsgs:errMsgs})
            }
        }

        if(field==='address'){
            if(value===''){
                errMsgs.address='Required Field'
                this.setState({errMsgs:errMsgs})
            }else{
                errMsgs.address=''
                this.setState({errMsgs:errMsgs})
            }
        }

        if(field==='email'){
            let patt = new RegExp(/^[A-Za-z]+[A-Za-z\.]*[0-9]*@[A-Za-z]+.com$/)
            if(value===''){
                errMsgs.email='Required Field'
                this.setState({errMsgs:errMsgs})
            }
            else if(!patt.test(value)){
                errMsgs.email='Enter valid email id'
                this.setState({errMsgs:errMsgs})
            }
            else{
                errMsgs.email=''
                this.setState({errMsgs:errMsgs})
            }
        }


    }

    handleSubmit=(e)=>{
        e.preventDefault();
        let {errMsgs,formValues} = this.state
        if(errMsgs.fname || errMsgs.lname || errMsgs.password || errMsgs.age || errMsgs.email || errMsgs.address){
            this.setState({formError:'Ensure correct data in all the fields'})
        }
        else if(formValues.fname=='' || formValues.lname=='' || formValues.password=='' || formValues.age==null || formValues.email=='' || formValues.address==''){
            this.setState({formError:'Ensure correct data in all the fields'})
        }
        else{
            this.setState({formError:''})
        }

    }

    render=()=>{

        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12' style={{right:'1%',margin:'2%'}}>
                        <div className='card' style={{position:'absolute',right:'1%',backgroundColor:'rgba(255,255,250,0.6)',width:400}}>
                            <h5 className='display-4 text-center'>Registration</h5>
                            <div className='card-body'>
                                <form onSubmit={this.handleSubmit}>
                                    <div className='form-group'>
                                        <TextField label='First Name' name='fname' onChange={(e) => this.handleChange(e)} value={this.state.formValues.fname} autoComplete='off' color='primary' fullWidth={true} />
                                        <span className='text-danger'>{this.state.errMsgs.fname}</span>
                                    </div>
                                    <div className='form-group'>
                                        <TextField label='Last Name' name='lname' onChange={(e) => this.handleChange(e)} value={this.state.formValues.lname} autoComplete='off' color='primary' fullWidth={true} />
                                        <span className='text-danger'>{this.state.errMsgs.lname}</span>
                                    </div>
                                    <div className='form-group'>
                                        <TextField label='Email' name='email' onChange={(e) => this.handleChange(e)} value={this.state.formValues.email} autoComplete='off' color='primary' fullWidth={true} />
                                        <span className='text-danger'>{this.state.errMsgs.email}</span>
                                    </div>
                                    <div className='form-group'>
                                        <TextField type='number' label='Age' name='age' onChange={(e) => this.handleChange(e)} value={this.state.formValues.age} autoComplete='off' color='primary' fullWidth={true} />
                                        <span className='text-danger'>{this.state.errMsgs.age}</span>
                                    </div>
                                    <div className='form-group'>
                                        <TextField label='Address' name='address' onChange={(e) => this.handleChange(e)} value={this.state.formValues.address} autoComplete='off' color='primary' fullWidth={true} />
                                        <span className='text-danger'>{this.state.errMsgs.address}</span>
                                    </div>
                                    <div className='form-group'>
                                        <TextField type='password' label='Password' name='password' onChange={(e) => this.handleChange(e)} value={this.state.formValues.password} autoComplete='off' color='primary' fullWidth={true} />
                                        <span className='text-danger'>{this.state.errMsgs.password}</span>
                                    </div>
                                    <div className='text-center'>
                                        <Button  variant='contained' color='primary' type='submit'>SUBMIT</Button>
                                        <p className='text-danger'>{this.state.formError}</p>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register