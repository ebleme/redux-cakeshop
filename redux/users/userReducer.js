import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"

const initialState = {
    isLoading: false,
    users: [],
    error: undefined,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: action.payload,
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }

        default:
            return state;
    }
}