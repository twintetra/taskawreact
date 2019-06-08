import React from 'react';



const NavBar = ({logout}) => {


    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">

            {/*<button className="navbar-toggler" type="button">*/}
            {/*    <span className="navbar-toggler-icon"/>*/}
            {/*</button>*/}

            <div className="navbar-collapse">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <button className="btn btn-warning"
                                onClick={logout}>Log out</button>
                    </li>
                </ul>
            </div>
        </nav>

    )
};

export default NavBar;