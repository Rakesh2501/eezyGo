import React from 'react'
import {BrowserRouter as Router,Link,Switch,Redirect} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {getUserDetails} from '../actions/actions'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar'
import {TextField,InputLabel,Button} from  '@material-ui/core'
import {DatePicker,MuiPickersUtilsProvider} from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import logo from '../img/hygiene1.jpg'

const url = 'http://localhost:2000/'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            date:null,
            src:'',
            dest:''
        }

        

    }

    componentDidMount=()=>{
    
    }

    setDate=(date)=>{
        this.setState({date:date.format('MM/DD/YYYY')})
    }

    handleChange=(e)=>{
        let field = e.target.name
        let value = e.target.value

        this.setState({[field]:value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        let formDetails = this.state  
        axios.post(url+'getTravelsByLocationAndDate',formDetails)
             .then((response)=>{
                this.props.history.push('/findBuses',response.data)
             })
    }
    
    render(){
        console.log(this.props.userDetails);

        
        return(
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <form onSubmit={this.handleSubmit}>
                                <div className='card' style={{ borderRadius: 40, backgroundColor: 'rgba(255,255,250,0.7)',margin: '5%' }}>
                                    <div className='card-body'>
                                        <div className='row' >
                                            <div className='col-sm-4'>
                                                <div>
                                                    <TextField onChange={this.handleChange} name='src' fullWidth placeholder='Eg- Pune' helperText='From Location' />
                                                </div>
                                            </div>
                                            <div className='col-sm-4'>
                                                <div>
                                                    <TextField onChange={this.handleChange} name='dest' fullWidth placeholder='Eg- Udupi' helperText='To Location' />
                                                </div>
                                            </div>
                                            <div className='col-sm-4'>
                                                <div>
                                                    <MuiPickersUtilsProvider utils={MomentUtils}>
                                                        <DatePicker name='date' fullWidth placeholder="MM/DD/YYYY" autoOk={true} format="MM/DD/YYYY" variant="inline" onChange={this.setDate} value={this.state.date} helperText="From Date" />
                                                    </MuiPickersUtilsProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row justify-content-center' style={{padding:5}}>
                                            <Button variant='contained' color='primary' type="submit">Search</Button>
                                        </div>

                                    </div>
                                </div> 
                            </form>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='card' style={{ borderRadius:40,width: '100%',  backgroundColor: 'rgba(255,255,250,0.7)' }}>
                            <div className='col-sm-12 text-center'>
                                <h3 className='display-4'>Why travel with eezyGo?</h3>
                            </div>
                        </div>
                    </div>
                    <div className='row text-center' style={{  marginTop: 35, height: 250 }}>
                        <div className='col-sm-3' style={{marginBottom:10}} >
                            <div className='card' style={{ borderRadius:25,height: '85%',backgroundColor:'rgba(255,255,250,0.7)' }}>
                                <img className='card-img-top' style={{ borderTopRightRadius:25,borderTopLeftRadius:25,opacity:1 }} height={'60%'} src={require('../img/insurance1.jpg')} />
                                <div className='card-body'>
                                    <p className='card-content' style={{}}>Health Insurance Cover</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-3' style={{marginBottom:10}}>
                            <div className='card' style={{ borderRadius:30,height: '85%' ,backgroundColor:'rgba(255,255,250,0.7)'}}>
                                <img className='card-img-top' style={{borderTopRightRadius:30,borderTopLeftRadius:30, opacity: 1 }} height={'60%'} src={require('../img/time.jpg')} />
                                <div className='card-body'>
                                    <p className='card-content' style={{}}>Bus On Time</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-3' style={{marginBottom:10}}>
                            <div className='card' style={{borderRadius:30,height: '85%' ,backgroundColor:'rgba(255,255,250,0.7)'}}>
                                <img className='card-img-top' style={{borderTopRightRadius:30,borderTopLeftRadius:30, opacity: 1 }} height={'60%'} src={require('../img/customer_service1.jpg')} />
                                <div className='card-body'>
                                    <p className='card-content' style={{}}>24/7 Customer Support</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-3' style={{marginBottom:10}}>
                            <div className='card' style={{ borderRadius:30,height: '85%' ,backgroundColor:'rgba(255,255,250,0.7)'}}>
                                <img className='card-img-top' style={{ borderTopRightRadius:30,borderTopLeftRadius:30,opacity: 1 }} height={'60%'} src={require('../img/hygiene3.jpg')} />
                                <div className='card-body'>
                                    <p className='card-content' style={{}}>Hygienic</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-3 offset-3' style={{marginBottom:10}}>
                            <div className='card' style={{borderRadius:30, height: '85%', backgroundColor: 'rgba(255,255,250,0.7)' }}>
                                <img className='card-img-top' style={{ borderTopRightRadius: 30, borderTopLeftRadius: 30, opacity: 1 }} height={'60%'} src={require('../img/variety.jpg')} />
                                <div className='card-body'>
                                    <p className='card-content' style={{}}>Variety Of Choices</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-3 ' style={{marginBottom:10}}>
                            <div className='card' style={{borderRadius:30, height: '85%', backgroundColor: 'rgba(255,255,250,0.7)' }}>
                                <img className='card-img-top' style={{ borderTopRightRadius: 30, borderTopLeftRadius: 30, opacity: 1 }} height={'60%'} src={require('../img/hassle.png')} />
                                <div className='card-body'>
                                    <p className='card-content' style={{}}>Hassle free booking</p>
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
        userDetails:state.userDetails
    }
}

const mapDispatchToProps={
 
    getUserDetails:getUserDetails
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)

