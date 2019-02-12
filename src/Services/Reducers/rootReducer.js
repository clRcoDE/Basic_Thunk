
import { GET_USERS } from '../Types'
export default rootReducer = (state = {names:['hey']}, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                names:[...state.names,action.username]
            }
        default:
            return state
    }
};