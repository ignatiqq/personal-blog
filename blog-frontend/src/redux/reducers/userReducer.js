const initialState = {
    isAuth: false 
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_AUTH":
            return {
                ...state,
                isAuth: true
            }
            break;
    
        default: return state;
        break;
    }
}

export default userReducer;