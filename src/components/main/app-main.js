import React, {Component} from 'react';
import Menu from './menu';
import Content from './content';


export default class AppMain extends Component {


    render() {
        return (

            <div className="d-flex">
                <Menu/>
                <Content/>
            </div>

        )
    }


}