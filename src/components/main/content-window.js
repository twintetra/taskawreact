import React from 'react';



const ContentWindow = ({content}) => {

    console.log('win', content);

    return (
        <div className="container-fluid">
            <h1 className="mt-4">Simple ex 1</h1>
            <p className="text-justify">1</p>
        </div>

    )
};

export default ContentWindow;