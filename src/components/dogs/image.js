import React from 'react';

const Image = ({image}) => {

    if (!image) {
        return (<h3 className="text-center mt-5">Select breed from list</h3>)
    }

    return (
        <img src={image}
             className="d-block rounded mw-100 mt-5 m-lg-auto"
             alt="dog"/>
    )
};

export default Image;