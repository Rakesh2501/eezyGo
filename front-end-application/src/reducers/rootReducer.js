 let initialState =  {
    loggedIn:false,
    isSignInClicked:false
 }

 const rootReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'CHANGE_LOGIN_STATUS':
            return{
                ...state,
                loggedIn:action.status
            }
            break
        // case '':
        //     return{
        //         ...state,
        //         isSignInClicked:action.status
        //     }
        // break
        default:
            return state
    }
 }

 export default rootReducer;