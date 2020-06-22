import React from 'react'
import {BrowserRouter as Router,Link,Switch,Redirect} from 'react-router-dom'
import { Button } from '@material-ui/core'

class BookingSuccess extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isClicked:false
        }
    }

    handleClick=()=>{
        this.setState({isClicked:true})
    }

    componentDidMount=()=>{
        
    }

    render(){
        if(this.state.isClicked){
            return <Redirect to='/getBookings'/>
        }
        return(
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='card' style={{ borderRadius:40,width: '100%',marginTop:'5%', backgroundColor: 'rgba(255,255,250,0.7)' }}>
                                <div className='card-body'>
                                    <h4 className='display-4 text-center'>Booking Successful !!!</h4>
                                    <div className='text-center' style={{margin:'1%',marginTop:'2%'}}>
                                        <Button size='small' color='primary' variant='contained' onClick={this.handleClick}>View Bookings</Button>
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

export default BookingSuccess