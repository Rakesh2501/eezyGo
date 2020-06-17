export const loginStatus=(status)=>{
    return{
        type:'CHANGE_LOGIN_STATUS',
        status:status
    }
}

export const getUserDetails=(userDetails)=>{
    return{
        type:'GET_USER_DETAILS',
        userDetails:userDetails
    }
}







// export const isSigninClicked=(status)=>{
//     return{
//         type:'IS_SIGNIN_CLICKED',
//         status:status
//     }
// }



