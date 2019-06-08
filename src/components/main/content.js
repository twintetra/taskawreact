import React from 'react';

import NavBar from './navbar';
import ContentWindow from './content-window';

const Content = ({logout}) => {


    return (

        <div className="page-content-wrapper">

            <NavBar logout={logout}/>
            <ContentWindow />

        </div>

    )
};

export default Content;