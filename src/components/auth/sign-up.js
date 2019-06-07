import React, {Component} from 'react';
import URL from './connectbase';

export default class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                name: '',
                email: '',
                password1: '',
                password2: ''
            },
            valid: {
                nameValid: false,
                emailValid: false,
                password1Valid: false,
                password2Valid: false
            },
            disabledSubmitAuth: true
        };
    }

    handleInput = (e) => {
        const name = e.target.name,
              value = e.target.value;

        const {data} = this.state;
        data[name] = value;

        this.setState({data},
            () => {this.validateField(name, value)});
    };

    validateField(fieldName, value) {
        let nameValid = this.state.valid.nameValid,
            emailValid = this.state.valid.emailValid,
            password1Valid = this.state.valid.password1Valid,
            password2Valid = this.state.valid.password2Valid;

        switch (fieldName) {
            case 'name':
                value.search(/(^[A-Za-zА-Яа-я]{1}[a-zа-я]{1,14} [A-Za-zА-Яа-я]{1}[a-zа-я]{1,14}$)/g) !== -1 ? nameValid = true : nameValid = false;
                break;
            case 'email':
                value.search( /(^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$)|(^(?!\+.*\(.*\).*--.*$)(?!\+.*\(.*\).*-$)(\+[0-9]{1,3}\([0-9]{1,3}\)[0-9]{1}[-0-9]{2,8}([0-9]{0,1})?)$)|(^[+]{1}[0-9]{5}([-0-9]{0,8})?([0-9]{0,3})?$)/g) !== -1 ? emailValid = true : emailValid = false;
                break;
            case 'password1':
                value.length >= 3 ? password1Valid = true : password1Valid = false;
                break;
            case 'password2':
                (value === this.state.data.password1) ? password2Valid = true : password2Valid = false;
                break;
            default:
                break;
        }
            this.setState({valid:{nameValid, emailValid, password1Valid, password2Valid}}, this.validateForm);
    };

    validateForm() {

        const {data: {password1, password2}, valid: {nameValid, emailValid, password2Valid}} = this.state;

        if (nameValid && emailValid && password2Valid && (password1 === password2)) {
            this.setState({disabledSubmitAuth: false})
        } else {
            this.setState( {disabledSubmitAuth: true})
        }
    };


    dataObjectCreate = () => {
        const {name, email, password1} = this.state.data;
        let objTest = {};

        objTest.firstName = name.split(' ').slice(0, -1).join(' ');
        objTest.lastName = name.split(' ').slice(-1).join(' ');
        objTest.email = '';
        objTest.phone = '';
        email.includes('@') ? objTest.email = email : objTest.phone = email;
        objTest.password = password1;

        this.props.dataLogin(objTest.email.length > 0 ? objTest.email : objTest.phone);

        return objTest;
    };


    postJSON = (URL) => {
        fetch(URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(this.dataObjectCreate())
        }).then(function(response){
            console.log('Success! Code: ', response.status);
        }).catch(function(error) {
            console.log('Error! Code: ', error.status);
        });
    };


    handleSubmit = (e) => {
        e.preventDefault();
        const {onAuth, onCloseBtn} =this.props;

        this.postJSON(URL);
        onCloseBtn();
        onAuth();

    };


    render() {

        const {valid: {nameValid, emailValid, password1Valid, password2Valid},
               data: {name, email, password1, password2}, disabledSubmitAuth} = this.state;
        const {onChangeBtn, onCloseBtn} = this.props;

        let classNamesName = "form-control",
            classNamesEmail = "form-control",
            classNamesPassword1 = "form-control",
            classNamesPassword2 = "form-control";

        nameValid  ? classNamesName += ' is-valid' : classNamesName += ' is-invalid';
        emailValid  ? classNamesEmail += ' is-valid' : classNamesEmail += ' is-invalid';
        password1Valid  ? classNamesPassword1 += ' is-valid' : classNamesPassword1 += ' is-invalid';
        password2Valid  ? classNamesPassword2 += ' is-valid' : classNamesPassword2 += ' is-invalid';

        return (


            <div className="modal d-block overflow-auto">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create account</h5>
                            <button type="button"
                                    className="close"
                                    onClick={() => onCloseBtn()}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group text-left">
                                    <label htmlFor="inputName2">Your name</label>
                                    <input type="text"
                                           name="name"
                                           title="Enter your first name and last name"
                                           className={classNamesName}
                                           id="inputName2"
                                           placeholder="Enter name"
                                           value={name}
                                           onChange={this.handleInput}/>
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor="inputEmail2">Email address or phone</label>
                                    <input type="text"
                                           name="email"
                                           title="Enter your email or phone"
                                           className={classNamesEmail}
                                           id="inputEmail2"
                                           placeholder="Enter email or phone"
                                           value={email}
                                           onChange={this.handleInput}/>
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor="inputPassword-1">Password</label>
                                    <input type="password"
                                           name="password1"
                                           title="Password must be at least 3 characters"
                                           className={classNamesPassword1}
                                           id="inputPassword-1"
                                           placeholder="Password"
                                           value={password1}
                                           onChange={this.handleInput}/>
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor="inputPassword-2">Re-enter password</label>
                                    <input type="password"
                                           name="password2"
                                           title="Password must be at least 3 characters"
                                           className={classNamesPassword2}
                                           id="inputPassword-2"
                                           placeholder="Password"
                                           value={password2}
                                           onChange={this.handleInput}/>
                                </div>
                                <button type="submit"
                                        disabled={disabledSubmitAuth}
                                        className="btn btn-warning btn-block">Create your account</button>
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
                        <div className="modal-footer">
                            <span className="align-middle">Already have an account?</span>
                            <button type="button"
                                    className="btn btn-outline-dark js-btn-sign-in"
                                    onClick={() => onChangeBtn()}>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}