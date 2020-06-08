 let initialState =  {
    loggedIn:false,
    isSignInClicked:false,
    userDetails:{}
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
        default:
            return state
    }
 }

 export default rootReducer;