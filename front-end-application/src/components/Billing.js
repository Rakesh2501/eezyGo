import React from 'react'
import {Link,Redirect} from 'react-router-dom'
import { Button } from '@material-ui/core'


class Billing extends React.Component{
    constructor(props){
        super(props)
        this.state={
            details :  this.props.history.location.state,
            passengersBtn:false
        }
    }

    showPassengers=()=>{
        this.setState({passengersBtn:!this.state.passengersBtn})
    }

    render=()=>{
        console.log(this.props.history.location.state);
        let seats = [];
        let passengerDetails = [];

        for(let i=0;i<this.state.details.seatsSelected.length;i++){
            if(i==this.state.details.seatsSelected.length-1){
                seats.push(<span>{this.state.details.seatsSelected[i].seatNo}</span>)
            }else{
                seats.push(<span>{this.state.details.seatsSelected[i].seatNo} ,</span>)
            }
        }

        for(let i=0;i<this.state.details.passengers.length;i++){
            passengerDetails.push(
                <div className='card' style={{ backgroundColor: 'rgba(255,255,250,0.7)', width: '100%', margin: 15, borderRadius: 25 }}>
                <div className='card-body'>
                    
                    <div className='text-center' style={{fontSize:'20px'}}>
                        <p>Passenger {i+1}</p>
                    </div>
                 
                    <div style={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid gray',borderTop:'1px solid gray', padding: '10px',marginBottom:'3px'}}>
                        <div style={{ width: '25%', textAlign: 'center' }}>
                            <p style={{ fontSize: '20px' }}>Name</p>
                            <p>{this.state.details.passengers[i].pName}</p>
                        </div>
                        <div style={{ width: '25%', borderLeft: '1px solid gray', textAlign: 'center' }}>
                            <p style={{ fontSize: '20px' }}>Age</p>
                            <p>{this.state.details.passengers[i].age}</p>
                        </div>
                        <div style={{ width: '25%', borderLeft: '1px solid gray', textAlign: 'center' }}>
                            <p style={{ fontSize: '20px' }}>Contact</p>
                            <p>{this.state.details.passengers[i].contact}</p>
                        </div>
                        <div style={{ width: '25%', borderLeft: '1px solid gray', textAlign: 'center' }}>
                            <p style={{ fontSize: '20px' }}>Gender</p>
                            <p>{this.state.details.passengers[i].gender}</p>
                        </div>

                    </div>
                </div>
            </div>
            )
        }
        
        return(
            <React.Fragment>
                <div className='container' style={{marginTop:'20px'}}>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='card' style={{ backgroundColor: 'rgba(255,255,250,0.7)', width: '100%', marginBottom: 15, borderRadius: 25 }}>
                                <h4 className='display-4 text-center'>Billing Details</h4>
                                <div className='card-body'>
                                    <div style={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid gray', padding: '10px',marginBottom:'3px'}}>
                                        <div style={{ width: '20%', textAlign: 'center' }}>
                                            <p style={{ fontSize: '20px' }}>Bus</p>
                                            <p>{this.state.details.data.travelAgencyName}</p>
                                        </div>
                                        <div style={{ width: '17%', borderLeft: '1px solid gray', textAlign: 'center' }}>
                                            <p style={{ fontSize: '20px' }}>Class</p>
                                            <p>{this.state.details.data.class}</p>
                                        </div>
                                        <div style={{ width: '17%', borderLeft: '1px solid gray', textAlign: 'center' }}>
                                            <p style={{ fontSize: '20px' }}>Source</p>
                                            <p>{this.state.details.data.source}</p>
                                        </div>
                                        <div style={{ width: '17%', borderLeft: '1px solid gray', textAlign: 'center' }}>
                                            <p style={{ fontSize: '20px' }}>Destination</p>
                                            <p>{this.state.details.data.Destination}</p>
                                        </div>
                                        <div style={{ width: '17%', borderLeft: '1px solid gray', textAlign: 'center' }}>
                                            <p style={{ fontSize: '20px' }}>Boarding Date</p>
                                            <p>{this.state.details.data.boardingDate}</p>
                                        </div>
                                        <div style={{ width: '17%', borderLeft: '1px solid gray', textAlign: 'center' }}>
                                            <p style={{ fontSize: '20px' }}>Boarding Time</p>
                                            <p>{this.state.details.data.boardingTime}</p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid gray', padding: '10px',marginBottom:'3px'}}>
                                        <div style={{ width: '20%', textAlign: 'center' }}>
                                            <p style={{ fontSize: '20px' }}>Journey Hours</p>
                                            <p>{this.state.details.data.journeyHours}</p>
                                        </div>
                                        <div style={{ width: '17%', borderLeft: '1px solid gray', textAlign: 'center' }}>
                                            <p style={{ fontSize: '20px' }}>Bus No</p>
                                            <p>{this.state.details.data.busNo}</p>
                                        </div>
                                        <div style={{ width: '17%', borderLeft: '1px solid gray', textAlign: 'center' }}>
                                            <p style={{ fontSize: '20px' }}>Seat No(s)</p>
                                            {seats}
                                        </div>
                                        <div style={{ width: '17%', borderLeft: '1px solid gray', textAlign: 'center' }}>
                                            <p style={{ fontSize: '20px' }}>Fare</p>
                                            <p>{this.state.details.data.fare}</p>
                                        </div>
                                        <div style={{ width: '17%', borderLeft: '1px solid gray', textAlign: 'center' }}>
                                            <p style={{ fontSize: '20px' }}>Passengers</p>
                                            <p>{this.state.details.noOfPassengers}</p>
                                        </div>
                                        <div style={{ width: '17%', borderLeft: '1px solid gray', textAlign: 'center' }}>
                                            <p style={{ fontSize: '20px' }}>Payable</p>
                                            <p>{this.state.details.data.fare*this.state.details.noOfPassengers}</p>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'row',marginTop:'5px',justifyContent:'center'}}>
                                        <div style={{marginRight:'5px'}}>
                                            <Button color="primary" size="small" variant="contained" onClick={this.showPassengers}>Show Passengers Details</Button>
                                        </div>
                                        <div>
                                            <Button color="primary" size="small" variant="contained">Book</Button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {this.state.passengersBtn?passengerDetails:''}


                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Billing