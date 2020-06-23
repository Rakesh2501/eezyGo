import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import { Button, TextField,MenuItem,FormControl} from '@material-ui/core';
import { connect } from 'react-redux'

class Booking extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:this.props.history.location.state,
            passengers:[],
            noOfPassengers:0,
            seatsSelected:[],
            tempForm:{
                passengerNo:'',
                pName:'',
                age:'',
                contact:'',
                gender:''
            },
            disablebtn:true,
            errMsg:'',
        
        }
        
    }

    addPassenger=(e)=>{
        let {tempForm} = this.state;
                
        let obj = {pName:'',age:'',contact:'',gender:''}

        let tempArray = [...this.state.passengers]
        let noOfPassengers = this.state.noOfPassengers
        noOfPassengers=noOfPassengers+1

        tempForm["passengerNo"] = noOfPassengers
        tempArray.push(tempForm)

        this.setState({passengers:tempArray,noOfPassengers:noOfPassengers},()=>{
            this.setState({tempForm:obj})
        })
        
        
    }

    handlePassengerForm=(e)=>{
        
        let name=e.target.name
        let value = e.target.value
        
        let {tempForm} = this.state
        tempForm[name]=value
        this.setState({tempForm:tempForm})
        console.log(this.state.tempForm)
    }

    reEditPassengerForm=(e,index)=>{

        let field = e.target.name
        let value = e.target.value
        let {passengers} = this.state

        passengers[index][field] = value;
        
        this.setState({passengers:passengers})
            
    }

    reEditGender=(e,passengerNo)=>{
        
        console.log(e.target);
        console.log(passengerNo);
        passengerNo = passengerNo-1

        let passengers = [...this.state.passengers]

        passengers[passengerNo][e.target.name] = e.target.value
            
        this.setState({passengers:passengers})    
        
    }

    deletePassenger=(e,passengerNo)=>{
        
        let passengersArray = [...this.state.passengers]
        let numOfPassengers = this.state.noOfPassengers-1

        passengersArray.splice(passengerNo,1)
        
        console.log(passengersArray);

        passengersArray.map((obj,i)=>{
            if(obj.passengerNo>passengerNo+1){
                obj.passengerNo = obj.passengerNo - 1
            }
        })

        this.setState({passengers:passengersArray,noOfPassengers:numOfPassengers})

    }

    onSeatSelection=(e,seat)=>{
        let {data,seatsSelected} = this.state

        if(seat.availabilityStatus==true){
            data.seatAvailability[seat.seatNo-1]["isSelected"] = !data.seatAvailability[seat.seatNo-1]["isSelected"]
            if(seat.isSelected==true){
                seatsSelected.push(seat)           
            }else{
                seatsSelected =seatsSelected.filter((obj)=>{
                    if(obj.seatNo!=seat.seatNo){
                        return obj
                    }
                })

            }
        }

        this.setState({data:data,seatsSelected:seatsSelected}) 
        
    }

    onProceed=(e)=>{
        let proceed = true
        let errMsg=''

        this.state.passengers.map((obj)=>{
            if(!(obj.pName && obj.age && obj.contact && obj.gender)){
                proceed = false
     
            }
        })


        if(this.state.seatsSelected.length != this.state.passengers.length || this.state.seatsSelected.length<1){
            proceed=false 
            
        }

        if(proceed==true){
            this.props.history.push('/billing',this.state)            
        }else{
            errMsg="Please select seats for all passengers"
            this.setState({errMsg:errMsg})
        }

    }

    componentDidMount=()=>{
    
    }

    render=()=>{ 
        console.log(this.state.data);
        
        let row1=[];
        let row2=[];
        let row3=[];
        let row4=[];

        let {seatAvailability} = this.state.data
        
        for(let i=0;i<seatAvailability.length;i++){
            if(seatAvailability[i].seatRow==1){
                row1.push(
                    <div style={{margin:'7px',width:'15px',height:'15px',
                    border:seatAvailability[i].availabilityStatus==true && seatAvailability[i].isSelected==true?'2px solid yellow':'',
                    backgroundColor:seatAvailability[i].availabilityStatus?'black':'gray'}}
                    onClick={(e)=>this.onSeatSelection(e,seatAvailability[i])}
                    >

                    </div>
                )
            }
            else if(seatAvailability[i].seatRow==2){
                row2.push(
                    <div style={{margin:'7px',width:'15px',height:'15px',
                                border:seatAvailability[i].availabilityStatus==true && seatAvailability[i].isSelected==true?'2px solid yellow':'',
                                backgroundColor:seatAvailability[i].availabilityStatus?'black':'gray'}}
                                onClick={(e)=>this.onSeatSelection(e,seatAvailability[i])}
                                >

                    </div>
                )
            }
            else if(seatAvailability[i].seatRow==3){
                row3.push(
                    <div style={{margin:'7px',width:'15px',height:'15px',
                    border:seatAvailability[i].availabilityStatus==true && seatAvailability[i].isSelected==true?'2px solid yellow':'',
                    backgroundColor:seatAvailability[i].availabilityStatus?'black':'gray'}}
                    onClick={(e)=>this.onSeatSelection(e,seatAvailability[i])}
                    >

                    </div>
                )
            }
            else if(seatAvailability[i].seatRow==4){
                row4.push(
                    <div style={{margin:'7px',width:'15px',height:'15px',
                    border:seatAvailability[i].availabilityStatus==true && seatAvailability[i].isSelected==true?'2px solid yellow':'',
                    backgroundColor:seatAvailability[i].availabilityStatus?'black':'gray'}}
                    onClick={(e)=>this.onSeatSelection(e,seatAvailability[i])}
                    >

                    </div>
                )
            }
        }        

        return(
           
            
            <React.Fragment>
                <div className='container-fluid' style={{marginTop:'20px'}}>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='card responsive-text' style={{ backgroundColor: 'rgba(255,255,250,0.7)', width: '100%', marginBottom: 15, borderRadius: 25 }}>
                                <h4 className='display-4 text-center'>Book Tickets</h4>
                                <div className='card-body'>
                                    <div style={{display:'flex',flexDirection:'row',borderBottom:'1px solid gray',padding:'10px'}}>
                                        <div style={{width:'17%',textAlign:'center'}}>
                                            <p style={{}}>Bus</p>
                                            <p>{this.state.data.travelAgencyName}</p>
                                        </div>
                                        <div style={{width:'17%',borderLeft:'1px solid gray',textAlign:'center'}}>
                                            <p style={{}}>Class</p>
                                            <p>{this.state.data.class}</p>
                                        </div>
                                        <div style={{width:'17%',borderLeft:'1px solid gray',textAlign:'center'}}>
                                            <p style={{}}>Departure</p>
                                            <p>{this.state.data.boardingTime}</p>
                                        </div>
                                        <div style={{width:'17%',borderLeft:'1px solid gray',textAlign:'center'}}>
                                            <p style={{}}>Journey</p>
                                            <p>{this.state.data.journeyHours} hrs</p>
                                        </div>
                                        <div style={{width:'17%',borderLeft:'1px solid gray',textAlign:'center'}}>
                                            <p style={{}}>Fare</p>
                                            <p>	&#8377; {this.state.data.fare}</p>
                                        </div>
                                        <div style={{width:'17%',borderLeft:'1px solid gray',textAlign:'center'}}>
                                            <p style={{}}>Passengers</p>
                                            <p>{this.state.noOfPassengers}</p>
                                        </div>
                                    </div>
                                    <div style={{marginTop:'5px'}}>
                                        <p style={{textAlign:'center'}}>Add Passengers</p>
                                        <form style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div className='form-group' >
                                                <TextField style={{marginRight:'3px'}} onChange={this.handlePassengerForm} value={this.state.tempForm.pName} type='text' label='Name' name='pName' autoComplete='off' color='primary' />
                                            </div>
                                            <div className='form-group' >
                                                <TextField style={{marginRight:'3px'}} onChange={this.handlePassengerForm} value={this.state.tempForm.age} type='number' label='Age' name='age' autoComplete='off' color='primary' />
                                            </div>
                                            <div className='form-group' >
                                                <TextField style={{marginRight:'3px'}} onChange={this.handlePassengerForm} value={this.state.tempForm.contact} type='text' label='Contact' name='contact' autoComplete='off' color='primary' />
                                            </div>
                                            <div className='form-group' >
                                                <TextField  onChange={this.handlePassengerForm} name='gender'  label='Gender' select={true} value={this.state.tempForm.gender} style={{ width: '25ch' }}>
                                                    <MenuItem value='Male'>Male</MenuItem>
                                                    <MenuItem value='Female'>Female</MenuItem>
                                                    <MenuItem value='Others'>Others</MenuItem>
                                                </TextField>
                                            </div>
                                        </form>
                                    </div>
                                    <div style={{marginTop:'15px',textAlign:'center'}}>
                                        <Button color="primary" variant="contained" onClick={this.addPassenger}>Add Passengers</Button>
                                    </div>
                                </div>
                            </div>

                            {this.state.passengers.map((obj,i)=>{
                                return(

                                    <div key={obj.name} className='card responsive-text' style={{ padding: '20px', marginTop: '15px',marginBottom:'15px', width: '100%', backgroundColor: 'rgba(255,255,250,0.7)', borderRadius: 25 }}>
                                        <p style={{ fontSize: '17px' }} className='text-center'>Passenger {obj.passengerNo}</p>
                                        <form style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div className='form-group' style={{ margin: '5px' }}>
                                                <TextField id={obj.passengerNo} onChange={(e)=>this.reEditPassengerForm(e,i)} value={this.state.passengers[i].pName} type='text' label='Name' name='pName' autoComplete='off' color='primary' />
                                            </div>
                                            <div className='form-group' style={{ margin: '5px', }}>
                                                <TextField id={obj.passengerNo} onChange={(e)=>this.reEditPassengerForm(e,i)} value={this.state.passengers[i].age} type='number' label='Age' name='age' autoComplete='off' color='primary' />
                                            </div>
                                            <div className='form-group' style={{ margin: '5px', }}>
                                                <TextField id={obj.passengerNo} onChange={(e)=>this.reEditPassengerForm(e,i)} value={this.state.passengers[i].contact} type='text' label='Phone' name='contact' autoComplete='off' color='primary'  />
                                            </div>
                                            <div className='form-group' style={{ margin: '5px', }}>
                                                <FormControl>
                                                    <TextField id={obj.passengerNo} onChange={(e)=>this.reEditGender(e,obj.passengerNo)} name='gender' label='Gender' select={true} value={this.state.passengers[i].gender} style={{ width: '25ch' }}>
                                                        <MenuItem value='Male'>Male</MenuItem>
                                                        <MenuItem value='Female'>Female</MenuItem>
                                                        <MenuItem value='Others'>Others</MenuItem>
                                                    </TextField>
                                                </FormControl>

                                            </div>
                                        </form>
                                        <div>
                                            <Button type='button' color='primary' variant='contained' onClick={(e)=>this.deletePassenger(e,i)}>Delete Passenger</Button>
                                        </div>
                                    </div>

                                )
                            }
                                
                            )}
                            

                        </div>
                        <div className='col-md-4'>
                            <div className='card responsive-text' style={{ backgroundColor: 'rgba(255,255,250,0.7)', width: '100%',  marginBottom: 15, borderRadius: 25 }}>
                                <h4 className='display-4 text-center'>Select Seats</h4>
                                <div className='card-body'>

                                    <div className='flex-container' style={{ display: 'flex', flexDirection: 'row',justifyContent:'center' }}>
                                        <div style={{marginRight:'10px'}}>{row1}</div>
                                        <div style={{marginRight:'50px'}}>{row2}</div>
                                        <div style={{marginRight:'10px'}}>{row3}</div>
                                        <div>{row4}</div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row',marginTop:'10px',}}>
                                        <div style={{ margin: '7px', width: '15px', height: '15px', backgroundColor: 'black' }}>
                                        </div>
                                        <p style={{marginRight:'10px'}}>Available Seats</p>

                                        <div style={{ margin: '7px', width: '15px', height: '15px', backgroundColor: 'gray' }}>
                                        </div>
                                        <p>Booked Seats</p>
                                    </div>

                                </div>
                            </div>

                            <div className='card responsive-text' style={{ backgroundColor: 'rgba(255,255,250,0.7)', width: '100%', marginBottom: 20, borderRadius: 25 }}>
                                <h4 className='display-4 text-center'>Bill Amount</h4>
                                {this.state.errMsg?<p style={{textAlign:'center',color:'red'}}>{this.state.errMsg}</p>:''}
                                <div className='card-body'>
                                    <ul>
                                        <li>No. of Passengers : {this.state.noOfPassengers}</li>
                                        <li>Fare per Ticket &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {this.state.data.fare}</li>
                                        <li>Total Amount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {this.state.noOfPassengers*this.state.data.fare}</li>
                                    </ul>
                                    <div style={{textAlign:'center'}}>
                                        <Button variant="contained" color="primary" size='small' onClick={this.onProceed}>Proceed</Button>
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



export default Booking
