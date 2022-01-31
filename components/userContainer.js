import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux';

function UserContainer() {

    const user = useSelector(state => state.user)
    {console.warn(user)}
   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());

    }, [dispatch]);


    return (
        user.isLoading === true ? (
            <h2>Loading</h2>
        ) : user.error ? (
            <h2>{user.error}</h2>
        ) :
            (
                <div>
                    <h2>Users</h2>
                    {user.users && user.users.map(u => {
                        return <p>{u.name}</p>
                    })}
                </div>
            )
    )
}

export default UserContainer;
