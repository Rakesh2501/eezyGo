import React from 'react';
import { BrowserRouter as Router,Link,Switch,Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import {loginStatus} from '../actions/actions'
import axios from 'axios'
import loginPageImage from '../img/homepage1.jpg'
import '../index.css'
import {MDBBtn,MDBInput,MDBCard,MDBModal,MDBModalBody,MDBModalHeader,MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from 'mdbreact'
import {TextField,InputLabel,Button} from  '@material-ui/core'
import {makeStyles,ThemeProvider} from '@material-ui/core/styles'
const url = 'http://localhost:2000/'


// const useStylesBase = makeStyles({
//     root: {
//       color: 'blue', 
//     },
//   });

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            formValue:{
                email:'',
                password:''
            },
            errorMsg:'',
            successMsg:'',
            loginSuccess:false
        }

    }

    handleChange=(e)=>{

        let name=e.target.name
        let value=e.target.value
        let {formValue}=this.state

        formValue[name]=value
        this.setState({formValue:formValue})
        
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const {formValue} = this.state
        axios.post(url+'login',formValue)
            .then((response)=>{
                this.setState({successMsg:response.data.message,errorMsg:''})
                this.props.changeLoginStatus(true)
                localStorage.setItem('loggedIn',true)
                localStorage.setItem('emailId',formValue.email)
            })
            .catch((err)=>{
                if(err.response){
                    this.setState({successMsg:'',errorMsg:err.response.data.message})
                }else{
                    this.setState({successMsg:'',errorMsg:'Server Failure'})
                }
            })
        
    }



    render(){
        
        // const classesBase = useStylesBase();

        if(this.state.successMsg){
            return(<Redirect to={'/home'} />)
        }
        if(this.state.errorMsg){
            console.log(this.state.errorMsg);
        }
        
        return(
            <React.Fragment>
                    <div className='container'>
                        <div className='row justify-content-center' >
                            <div className='col-md-6 |sm-12'>
                                    <div className='card-transparent' style={{marginTop:100}}>
                                        <div className={'card-body'}>
                                            <form onSubmit={this.handleSubmit} >
                                                <div className='form-group'>
                                                    
                                                    {/* <input type='text' name='email' onChange={this.handleChange} value={this.state.formValue.email} className='form-control' /> */}
                                                    <TextField autoFocus autoComplete="off"  label='Email:' name='email' onChange={this.handleChange} value={this.state.formValue.email}/>
                                                   
                                                    {/* <MDBInput label='Email:'/> */}
                                                </div>
                                                <div className='form-group'>
                                                    
                                                    <TextField autoComplete="off"  label='Password:' name='password' onChange={this.handleChange} value={this.state.formValue.password}/>                                            </div>
                                                <div>
                                                    {/* <button type='submit' className='btn btn-primary'>Login</button> */}
                                                    <Button variant='outlined' color='secondary' type='submit'>Login</Button>
                                                    <br/>
                                                    <p className='text-danger'>{this.state.errorMsg!=''?this.state.errorMsg:''}</p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                            
                            </div>
                        </div>
                    </div>
                
            </React.Fragment>
        )
 

    }
}

const mapStateToProps=(state)=>{
    return{
    loggedIn:state.loggedIn,
 
        }
}

const mapDispatchToProps={
    changeLoginStatus:loginStatus,

}

export default connect(mapStateToProps,mapDispatchToProps)(Login)