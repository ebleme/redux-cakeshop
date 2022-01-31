import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"
import axios from 'axios'

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserFail = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest);

        return axios.get('https://jsonplaceholder.typicode.com/users').then(res => {

            const users = res.data;
            dispatch( fetchUserSuccess(users));
    })
            .catch (err => {
    const error = err.message;
    dispatch(fetchUserFail(error));
})
    }
}