import React from 'react'
import {BrowserRouter as Router,Link,Switch,Redirect} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import { Button } from '@material-ui/core'

const url = 'http://localhost:2000/'

class GetBookings extends React.Component{
    constructor(props){
        super(props)
        this.state={
            bookings:[],
            isClicked:false
        }
        console.log(this.props.userDetails);
               
    }
    // this.props.userDetails.custId
    componentDidMount=()=>{
        axios.get(url+'getBookings/'+ 101)
             .then((response)=>{
                this.setState({bookings:response.data})
             })
    }

    showDetails=()=>{
        this.setState({isClicked:!this.state.isClicked})
    }

    render(){

        console.log(this.state.bookings);
        
        return(
            <React.Fragment>
                <div className='container' style={{marginTop:'2%'}}>
                    <div className='row'>
                        <div className='col-md-12'>
                        {this.state.bookings.length>0?this.state.bookings.map((booking,i)=>{
                            return(
                                <div className='card' style={{ backgroundColor: 'rgba(255,255,250,0.7)', width: '100%', marginBottom: 15, borderRadius: 25 }}>
                                    <div style={{textAlign:'center',paddingTop:'1%'}}>
                                        <p >Booking Id : {booking.bId}</p>
                                    </div>
                                    <div className='card-body'>
                                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap',padding:'10px',borderBottom:'1px solid grey' }}>
                                            <div style={{ width:'16.6%',textAlign:'center' }}>
                                                <p>Bus</p>
                                                <p>{booking.travelAgencyName}</p>
                                            </div>
                                            <div style={{ borderLeft: '1px solid grey',width:'16.6%',textAlign:'center' }}>
                                                <p>Source</p>
                                                <p>{booking.source}</p>
                                            </div>
                                            <div style={{ borderLeft: '1px solid grey',width:'16.6%',textAlign:'center' }}>
                                                <p>Destination</p>
                                                <p>{booking.Destination}</p>
                                            </div>
                                            <div style={{ borderLeft: '1px solid grey',width:'16.6%',textAlign:'center' }}>
                                                <p>Date</p>
                                                <p>{new Date(booking.boardingDate).toLocaleDateString()}</p>
                                            </div>
                                            <div style={{ borderLeft: '1px solid grey',width:'16.6%',textAlign:'center' }}>
                                                <p>Time</p>
                                                <p>{booking.boardingTime}</p>
                                            </div>
                                            <div style={{ borderLeft: '1px solid grey',width:'16.6%',textAlign:'center' }}>
                                                <p>Amount</p>
                                                <p>	&#8377; {booking.totalCost}</p>
                                            </div>
                                        </div>

                                        {this.state.isClicked?
                                            <div style={{ display: 'flex', flexDirection: 'column',marginTop:'1%' }}>
                                                <p style={{ textAlign: 'center' }}>Passenger Details</p>
                                                {booking.passengerDetails.map((passenger) => {
                                                    return (<div style={{ display: 'flex', flexDirection: 'row' }}>
                                                        <div style={{ width: '25%' ,textAlign:'center'}}>
                                                            <p>{passenger.pName}</p>
                                                        </div>
                                                        <div style={{ width: '25%',textAlign:'center' }}>
                                                            <p>{passenger.age} years</p>
                                                        </div>
                                                        <div style={{ width: '25%',textAlign:'center' }}>
                                                            <p>{passenger.contact}</p>
                                                        </div>
                                                        <div style={{ width: '25%',textAlign:'center' }}>
                                                            <p>{passenger.gender}</p>
                                                        </div>
                                                    </div>)
                                                })}
                                            </div>
                                            :''
                                        }
                                        
                                        <div style={{textAlign:'center',marginTop:'1%'}}>
                                            <Button color='primary' size='small' variant='contained' onClick={this.showDetails}>{this.state.isClicked?'Hide Details':'Show Details'}</Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }):
                        <div className='card'  style={{ backgroundColor: 'rgba(255,255,250,0.7)', width: '100%', marginBottom: 15, borderRadius: 25 }}>
                            <div className='card-body'>
                                <h4 className='display-4 text-center'>No Bookings Done Yet!!</h4>
                            </div>
                        </div>
                        }
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

}

export default connect(mapStateToProps,mapDispatchToProps)(GetBookings)