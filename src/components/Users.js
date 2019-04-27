import React from 'react';
import withMountAlert from '../withMountAlert';
const Users = ({users, selectUser}) => {
    const trItems = users.map(user =>{
        return (
            <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                    <button onClick={() => selectUser(user)}>
                        Select
                    </button>
                </td>
            </tr>
        )
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>Nage</th>
                    <th>Age</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {trItems}
            </tbody>
        </table>
    )
};

export default withMountAlert(Users, 'Users');