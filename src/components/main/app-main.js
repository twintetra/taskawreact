import React, {Component} from 'react';
import Menu from './menu';
import Content from './content';


export default class AppMain extends Component {


    onLogout = () => {
        this.props.onLogin(false);
    };

    render() {
        return (

            <div className="d-flex">
                <Menu/>
                <Content logout={this.onLogout}/>
            </div>

        )
    }


}