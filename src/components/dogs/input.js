import React from 'react';
import { store } from "../../index";
import {inputValue} from "./actions";

const Input = ({value}) => {

    const handleChange = (event) => {
        store.dispatch(inputValue(event.target.value));
    };

    return (
        <form className="input-group mb-3">
            <input type="text" className="form-control" placeholder="name" value={value} onChange={handleChange}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-success">Reset</button>
                </div>
        </form>
    )
};

export default Input;