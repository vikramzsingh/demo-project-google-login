import React from 'react';
import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { fetchUsers } from '../redux';

export const HooksUserContainer = () => {
    const usersData = useSelector((state) => state.user)
    //FOR USING SAME STATE OF REDUX IN MULTIPLE COMPONENTS

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [])

    return (
        <div>
            {usersData.loading && <h2>loading...</h2>}
            {usersData.users && usersData.users.map(user => (
                <div key={user.id}>
                    {user.email}
                </div>
            ))}
            {usersData.error && <h2>{usersData.error}</h2>}
        </div>
    );
}

export default HooksUserContainer;
