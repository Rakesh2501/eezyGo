import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core'

class BusDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:this.props.history.location.state,
            seats:this.props.history.location.state.seatAvailability,
            seatsSelected:[],
        }

    }

    book=()=>{
        this.props.history.push('/booking',this.state.data)
    }

    render=()=>{
        console.log(this.state.data);
        
        let row1=[];
        let row2=[];
        let row3=[];
        let row4=[];

        for(let i=0;i<this.state.seats.length;i++){
            if(this.state.seats[i].seatRow==1){
                row1.push(
                    <div style={{margin:'7px',width:'15px',height:'15px'
                    ,backgroundColor:this.state.seats[i].availabilityStatus?'black':'gray'}}
    
                    >

                    </div>
                )
            }
            else if(this.state.seats[i].seatRow==2){
                row2.push(
                    <div style={{margin:'7px',width:'15px',height:'15px',
                                backgroundColor:this.state.seats[i].availabilityStatus?'black':'gray'}}
                        
                                >

                    </div>
                )
            }
            else if(this.state.seats[i].seatRow==3){
                row3.push(
                    <div style={{margin:'7px',width:'15px',height:'15px',
                    backgroundColor:this.state.seats[i].availabilityStatus?'black':'gray'}}
                   
                    >

                    </div>
                )
            }
            else if(this.state.seats[i].seatRow==4){
                row4.push(
                    <div style={{margin:'7px',width:'15px',height:'15px',
                    backgroundColor:this.state.seats[i].availabilityStatus?'black':'gray'}}
                   
                    >

                    </div>
                )
            }
        }        

        return(
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9'>
                            <div className='card' style={{ borderRadius: 30, backgroundColor: 'rgba(255,255,250,0.7)',margin: '5%'}}>
                                <h3 className='display-4' style={{textAlign:'center'}}>Bus Details</h3>
                                <div className='card-body'>
                                    <ul>
                                        <li>
                                            <div style={{margin:'5px'}}>
                                                <span>Bus Name : </span><span>{this.state.data.travelAgencyName}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div style={{margin:'5px'}}>
                                                <span>Class : </span><span>{this.state.data.class}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div style={{margin:'5px'}}>
                                                <span>Source : </span><span>{this.state.data.source}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div style={{margin:'5px'}}>
                                                <span>Destination : </span><span>{this.state.data.Destination}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div style={{margin:'5px'}}>
                                                <span>Departure Date : </span><span>{this.state.data.boardingDate}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div style={{margin:'5px'}}>
                                                <span>Departure Time : </span><span>{this.state.data.boardingTime} hrs</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div style={{margin:'5px'}}>
                                                <span>Journey : </span><span>{this.state.data.journeyHours} hrs</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div style={{margin:'5px'}}>
                                                <span>Seats Available : </span><span>{this.state.data.seats}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div style={{margin:'5px'}}>
                                                <span>Bus No. : </span><span>{this.state.data.busNo}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div style={{margin:'5px'}}>
                                                <span>Fare : </span><span>	&#8377; {this.state.data.fare}</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div style={{margin:'5px',textAlign:'center'}}>
                                        <Button onClick={this.book} variant="contained" color="primary">Book Tickets</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card' style={{ backgroundColor: 'rgba(255,255,250,0.7)', width: '100%',marginTop:'15%' , borderRadius: 30 }}>
                                <h4 className='display-4 text-center'>Chart</h4>
                                <div className='card-body'>

                                    <div className='flex-container' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                        <div style={{ marginRight: '10px' }}>{row1}</div>
                                        <div style={{ marginRight: '50px' }}>{row2}</div>
                                        <div style={{ marginRight: '10px' }}>{row3}</div>
                                        <div>{row4}</div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', }}>
                                        <div style={{ margin: '7px', width: '15px', height: '15px', backgroundColor: 'black' }}>
                                        </div>
                                        <p style={{ marginRight: '10px' }}>Available Seats</p>

                                        <div style={{ margin: '7px', width: '15px', height: '15px', backgroundColor: 'gray' }}>
                                        </div>
                                        <p>Booked Seats</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default BusDetails
