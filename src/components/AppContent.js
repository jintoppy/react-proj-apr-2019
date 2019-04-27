import React from 'react';

const AppContent = (props) => {
    const trItems = props.data.map((item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.age}</td>
            </tr>
        )
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {trItems}
            </tbody>
        </table>
    )
};

export default AppContent;