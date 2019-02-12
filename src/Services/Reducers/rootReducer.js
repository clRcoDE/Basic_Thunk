
import { GET_USERS } from '../Types'
export default rootReducer = (state = {names:['hey']}, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                names:[...state.names,action.username]
            }
            case 'LOAD_DATA_SUCCESS':
            // console.log(action.data)
            return {
                ...state,
                names:[...state.names,action.data]
            }
        default:
            return state
    }
};