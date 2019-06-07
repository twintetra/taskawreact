import React, {Component} from 'react';
import URL from './connectbase';

export default class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                login: '',
                password: ''
            },
            errorText: false
        }
    }

    handleInputChange = (e) => {
        this.setState({errorText: false});
        const value = e.target.value;
        const name = e.target.name;
        const {data} = this.state;
        data[name] = value;
        this.setState({data});
    };

    getResource = () => {
        return fetch(URL)
            .then(response => {return response.json()})
            .catch(error => console.error(error));
    };


    handleSubmit = (e) => {
        e.preventDefault();
        const {data:{login, password}} = this.state;
        const {onCloseBtn, onLogin} = this.props;

        this.getResource()
            .then(answer => {
                let validObj =  answer.filter( (item) => ( (item.email === login || item.phone === login) && item.password === password ));

                if (validObj.length > 0) {
                    onCloseBtn();
                    onLogin();
                } else {
                    this.setState({errorText: true})
                }
            })
    };


    render() {

        const {onCloseBtn, onChangeBtn} = this.props;
        const {login, password, errorText} = this.state;

        return (
            <div className="modal d-block overflow-auto">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Sign in</h5>
                            <button type="button"
                                    className="close"
                                    onClick={onCloseBtn}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group text-left">
                                    <label htmlFor="inputEmail">Email address or phone</label>
                                    <input type="text"
                                           name="login"
                                           className="form-control"
                                           id="inputEmail"
                                           value={login}
                                           onChange={this.handleInputChange}
                                           placeholder="Enter email or phone" />
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor="inputPassword">Password</label>
                                    <input type="password"
                                           name="password"
                                           className="form-control"
                                           id="inputPassword"
                                           value={password}
                                           onChange={this.handleInputChange}
                                           placeholder="Password"/>
                                </div>
                                {errorText && <p className="mb-3 p-2 alert-danger">Wrong login or password. Please, repeat.</p>}
                                <button type="submit"
                                        className="btn btn-dark btn-block">Sign in</button>
                            </form>
                            <p className="mt-3 mb-0">or you can use social media for login:</p>
                            <button className="btn btn-social-icon btn-vk m-1">
                                <span className="fa fa-vk"/>
                            </button>
                            <button className="btn btn-social-icon btn-google m-1">
                                <span className="fa fa-google"/>
                            </button>
                            <button className="btn btn-social-icon btn-facebook m-1">
                                <span className="fa fa-facebook"/>
                            </button>
                            <button className="btn btn-social-icon btn-github m-1">
                                <span className="fa fa-github"/>
                            </button>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button"
                                    className="btn btn-outline-secondary "
                                    onClick={() => alert('DUMMY')}>Forgot your password?</button>
                            <button type="button"
                                    className="btn btn-warning js-btn-sign-up"
                                    onClick={onChangeBtn}>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

