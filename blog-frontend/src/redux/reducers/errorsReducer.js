const initialState = {
    error: {}
}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case "SET_ERROR":
             return {
                ...state,
                error: action.payload
             }
            break;
        
        case "SET_ERROR_CLEAR":
            return {
                ...state,
                error: action.payload
            }
        
    
        default: return state;
        break;
    }
}

export default errorReducer;