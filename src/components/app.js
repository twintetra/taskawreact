import React, {Component} from 'react';
import AppAuth from './auth/app-auth';
// import AppMain from './main/app-main'



export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: false
        }
    }

    onLogin = () => {
        this.setState({login: true})
    };


    render() {

        return (
            <React.Fragment>
                <AppAuth onLogin={this.onLogin}/>
                {/*<AppMain/>*/}
            </React.Fragment>
        )
    }
};

