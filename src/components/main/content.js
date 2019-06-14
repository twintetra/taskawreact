import React from 'react';

import NavBar from './navbar';
import ContentWindow from './content-window';

const Content = ({logout, content, contentLoad}) => {


    return (
        <div className="page-content-wrapper">
            <NavBar logout={logout}/>
            <ContentWindow content={content} contentLoad={contentLoad}/>
        </div>
    )
};

export default Content;