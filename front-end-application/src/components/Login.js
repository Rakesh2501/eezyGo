import React from 'react';
import { BrowserRouter as Router,Link,Switch,Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import {loginStatus} from '../actions/actions'
import axios from 'axios'
// import {MDBBtn,MDBInput,MDBCard,MDBModal,MDBModalBody,MDBModalHeader,MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from 'mdbreact'
import {TextField,InputLabel,Button} from  '@material-ui/core'
import {makeStyles,ThemeProvider,createMuiTheme,withStyles} from '@material-ui/core/styles'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const url = 'http://localhost:2000/'


class Login extends React.Component{
    constructor(props){
        super(props)
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

        const {classes} = this.props 

        if(this.state.successMsg){
            return(<Redirect to={'/home'} />)
        }
        if(this.state.errorMsg){
            console.log(this.state.errorMsg);
        }
        
        return(
            <React.Fragment>
                    <div className='container' >
                        <div className='row '>
                            <div className='col-lg-12 col-md-12 |sm-12' style={{borderWidth:3,borderColor:'black'}}>
                                    <div className='card' style={{position:'absolute',right:'1%',width:350,marginTop:'5%',background:'rgba(255, 255, 250,0.4)'}}>
                                        <div className='text-center' style={{margin:10}}>
                                            <h6 className='display-4' style={{color:'black'}}>Sign Up</h6>
                                        </div>
                                        <div className={'card-body'} >
                                            <form onSubmit={this.handleSubmit} >
                                                <div className='form-group'>
                                            
                                                    <TextField color="primary" size='small' fullWidth={true} autoFocus autoComplete="off"  label='Email:' name='email' onChange={this.handleChange} value={this.state.formValue.email}/>
                                                    {/* <input type='text' className='form-control'/> */}
                                                </div>
                                                <div className='form-group'>  
                                                    <TextField  color="primary" fullWidth={true} autoComplete="off"  label='Password:' name='password' onChange={this.handleChange} value={this.state.formValue.password}/>         
                                                </div>
                                                <div style={{textAlign:'center'}}>
                                                    <Button variant='contained' color='primary' type='submit'>Login</Button>
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


