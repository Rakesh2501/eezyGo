 let initialState =  {
    loggedIn:false,
    isSignInClicked:false,
    userDetails:{},
    noOfPassengers:null,
    passengers:[],
    seatsBooked:[]
 }

 const rootReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'CHANGE_LOGIN_STATUS':
            return{
                ...state,
                loggedIn:action.status
            }
            break
        case 'GET_USER_DETAILS':
            
            return{
                ...state,
                userDetails:action.userDetails
            }
            break
        case 'ADD_PASSENGER_DETAILS':

            let tempArray = [...state.passengers]
            let noOfPassengers = state.noOfPassengers
            noOfPassengers=noOfPassengers+1
            action.data["passengerNo"] = noOfPassengers

            tempArray.push(action.data)

            return{
                ...state,
                passengers:tempArray,
                noOfPassengers:noOfPassengers
            }
            
            break

        case 'CHANGE_PASSENGER_DETAILS':

            let passenger = state.passengers[action.index]
            let passengers = [...state.passengers]
            if(action.field=='gender'){
                console.log(action.index);
               
                console.log(passengers[action.index]);

                passengers[action.index][action.field] = action.value
                

            }else{
                passenger[action.field] = action.value
                passengers[action.index] = passenger
            }

             
            return{
                ...state,
                passengers:passengers
            }
            break
        
        case 'DELETE_PASSENGER':

            let passengersArray = [...state.passengers]
            let numOfPassengers = state.noOfPassengers-1

            passengersArray.splice(action.passengerNo,1)
            
            console.log(passengersArray);

            passengersArray.map((obj,i)=>{
                if(obj.passengerNo>action.passengerNo+1){
                    obj.passengerNo = obj.passengerNo - 1
                }
            })
            

            return{
                ...state,
                passengers:passengersArray,
                noOfPassengers:numOfPassengers
            }

            break
            
        default:
            return state
    }
 }

 export default rootReducer;