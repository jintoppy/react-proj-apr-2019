import React from 'react';

const AppHeader = (props) => {
    const liItems = props.menu.map((menuItem, index) => {
        return (<li key={menuItem}>{menuItem}</li>);
    });
    return (
        <header className="App-header">
            { props.appTitle }
            <ul>
                {liItems}
            </ul>
      </header>
    )
};

export default AppHeader;