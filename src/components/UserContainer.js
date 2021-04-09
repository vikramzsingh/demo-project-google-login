import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
const UserContainer = ({ userData, fetchUsers }) => {
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])
    console.log(userData.users)
    return (
        <div>
            {userData.loading && <h2>loading...</h2>}
            {userData.users && userData.users.map(user => (
                <div key={user.id}>
                    {user.name}
                </div>
            ))}
            {userData.error && <h2>{userData.error}</h2>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
