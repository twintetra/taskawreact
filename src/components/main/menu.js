import React from 'react';



const Menu = () => {


    return (
        <div className="bg-light border-right sidebar-wrapper">
            <div className="sidebar-heading text-center font-weight-bold text-info">MENU</div>
            <div className="list-group list-group-flush">
                <button className="list-group-item list-group-item-action bg-light">menu item 1</button>
                <button className="list-group-item list-group-item-action bg-light">menu item 2</button>
                <button className="list-group-item list-group-item-action bg-light">menu item 3</button>
            </div>
        </div>
    )
};

export default Menu;