import React from 'react';
import './spinner.css';

const Spinner = () => {

    return (
        <div className="lds-css ng-scope m-auto" style={{width: 200, height: 200}}>
            <div className="lds-spinner" style={{width:100,height:100}}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
};

export default Spinner;

