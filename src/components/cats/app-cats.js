import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import Cats from "./cats";


const catStore = createStore(reducer);


const AppCats = () => {
    return (
        <Provider store={catStore}>
            <Cats/>
        </Provider>
    )
};


export default AppCats;