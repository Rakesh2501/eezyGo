import React from 'react'
import {BrowserRouter,Link,Route,Redirect} from 'react-router-dom'
import axios from 'axios'
import {TextField,Button} from '@material-ui/core'
import {FaArrowRight} from 'react-icons/fa'

class FindBuses extends React.Component{
    constructor(props){
        super(props)
        this.state={
            clicked:false
        }
    }

    componentDidMount=()=>{
        console.log(this.props.history.location.state);
    }

    showDetailsClicked=(obj)=>{
        this.setState({clicked:!this.state.clicked})    
        this.props.history.push('/busDetails',obj)
    }

    render=()=>{

        return(
            <React.Fragment>
                <div className='container-fluid'>
                    <div className='row'>
                        <div style={{width:'100%',height:50,backgroundColor:'rgba(255,255,250,0.5)',marginTop:5}}>
                            <p style={{textAlign:'center',paddingTop:'1%'}}>{this.props.history.location.state[0].source} &nbsp; <FaArrowRight/> &nbsp; {this.props.history.location.state[0].Destination}</p>
                        </div>
                        {/* <div className='col-sm-3' style={{marginLeft:'-1%'}}>
                            <div className='card' style={{height:'100%',width:'80%',backgroundColor:'rgba(255,255,250,0.5)'}}>
                                <p>fghj</p>
                            </div>
                        </div> */}

                        <div className='offset-sm-2 col-sm-8' style={{marginTop:'3%'}}>
                            {this.props.history.location.state.map((obj)=>{
                                return(
                                    <div className='card ' style={{  padding: 10, backgroundColor: 'rgba(255,255,250,0.7)', height: 150, marginBottom: 20, borderRadius: 30 }}>
                                        <div className='flex-container' style={{display: 'flex', flexDirection: 'row',width:'100%',height:'60%',marginBottom:10}}>
                                            <div style={{ width: '20%',textAlign:'center' }}>
                                                <p style={{fontSize:20}}>Agency Name</p>
                                                <p>{obj.travelAgencyName}</p>
                                            </div>
                                            <div style={{ borderLeft: '1px solid gray', width: '20%',textAlign:'center' }}>
                                                <p style={{fontSize:20}}>Class</p>
                                                <p>{obj.class}</p>

                                            </div>
                                            <div style={{ borderLeft: '1px solid gray', width: '20%',textAlign:'center' }}>
                                                <p style={{fontSize:20}}>Fare</p>
                                                <p>{obj.fare}</p>
                                            </div>
                                            <div style={{ borderLeft: '1px solid gray', width: '20%',textAlign:'center'}}>
                                                <p style={{fontSize:20}}>Boarding Time</p>
                                                <p>{obj.boardingTime}</p>

                                            </div>
                                            <div style={{ borderLeft: '1px solid gray', width: '20%',textAlign:'center'}}>
                                                <p style={{fontSize:20}}>Journey Hours</p>
                                                <p>{obj.journeyHours}</p>
                                            </div>
                                        </div>

                                        <div className='flex-container' style={{justifyContent:'center',display:'flex',flexDirection:'row',textAlign:'center',height:'30%',padding:10,borderTop:'1px solid gray'}}>
                                            <div style={{margin:'5px'}}>
                                                <Button variant='contained' size='small' color='primary' onClick={(e)=>this.showDetailsClicked(obj)} >Show Details</Button>
                                            </div>
                                        </div>
                      
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FindBuses