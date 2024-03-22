const initialState={
    token:null,
    isLoggedIn:false
};

const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                token:action.payload.token,
                isLoggedIn:true,
            };
        case 'LOGOUT':
            return{
                ...state,
                token:null,
                isLoggedIn:false
            } ;
            default:
                return state;   
    };
}

export default authReducer;