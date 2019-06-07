import React, {Component} from 'react';
import SignIn from './sign-in';
import SignUp from './sign-up';
import SuccessAuth from './success-auth';
import SuccessLogin from './success-login';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showSignIn: false,
            showSignUp: false,
            submitAuthSuccess: false,
            submitLoginSuccess: false
        };
    }

    onShowSignIn = () => {
        this.setState(({showSignIn}) => {
            return {showSignIn: !showSignIn}
        })
    };

    onShowSignUp = () => {
        this.setState(({showSignUp}) => {
            return {showSignUp: !showSignUp}
        })
    };

    handleCloseBtn = () => {
        this.setState({
            showSignUp: false,
            showSignIn: false,
            submitAuthSuccess: false,
            submitLoginSuccess: false
        })
    };

    handleChangeUpBtn = () => {
        this.setState({
            showSignUp: false,
            showSignIn: true
        })
    };

    handleChangeInBtn = () => {
        this.setState({
            showSignUp: true,
            showSignIn: false
        })
    };


    onSuccessAccess = (name) => {
        this.setState({[name]: true});
    };

    dataLogin = (value) => {
        this.setState({authLogin: value});
    };



    render() {

        const {showSignIn, showSignUp, submitAuthSuccess, submitLoginSuccess, authLogin} =this.state;

        return (
            <div className="container text-center p-5">
                <button type="button"
                        className="btn btn-outline-info btn-lg m-1"
                        onClick={this.onShowSignIn}>Sign in</button>
                {showSignIn && <SignIn onCloseBtn={this.handleCloseBtn}
                                                  onChangeBtn={this.handleChangeInBtn}
                                                  onLogin={() => this.onSuccessAccess('submitLoginSuccess')}/>}
                <button type="button"
                        className="btn btn-outline-warning btn-lg m-1"
                        onClick={this.onShowSignUp}>Sign up</button>
                {showSignUp && <SignUp onCloseBtn={this.handleCloseBtn}
                                                  onChangeBtn={this.handleChangeUpBtn}
                                                  onAuth={() => this.onSuccessAccess('submitAuthSuccess')}
                                                  dataLogin={this.dataLogin}/>}
                {submitAuthSuccess && <SuccessAuth onCloseBtn={this.handleCloseBtn}
                                                              authLogin={authLogin}/>}
                {submitLoginSuccess && <SuccessLogin onCloseBtn={this.handleCloseBtn}/>}
            </div>
        )
    }

}