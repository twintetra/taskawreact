import React, {Component} from 'react';
import AppAuth from './auth/app-auth';
import AppMain from './main/app-main';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: false    // with or without auth
        }
    }

    onLogin = (value) => {
        this.setState({login: value})
    };

    render() {
        const {login} = this.state;

        return (
            <>
                {!login && <AppAuth onLogin={() => this.onLogin(true)}/>}
                {login && <AppMain onLogin={() => this.onLogin(false)}/>}
            </>
        )
    }
};

