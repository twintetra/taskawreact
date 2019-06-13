import React, {Component} from 'react';
import Menu from './menu';
import Content from './content';




const CONTENT = [{id: 1, title: 'Simple ex 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n' +
        ' ut labore et dolore magna aliqua. '},
    {id: 2, title: 'Simple ex 2', text: 'Duis aute irure dolor in reprehenderit\n' +
            ' in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n' +
            ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 3, title: 'Simple ex 3', text: 'Excepteur sint occaecat cupidatat\n' +
            ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},];



export default class AppMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menuSelect: 1
        }
    }

    onLogout = () => {
        this.props.onLogin(false);
    };

    menuSelect = (id) => {
        this.setState({menuSelect: id})
    };

    render() {
        return (

            <div className="d-flex">
                <Menu content={CONTENT}
                      menuSelect={this.menuSelect}/>
                <Content logout={this.onLogout}
                         contentLoad={this.state.menuSelect}
                         content={CONTENT}/>
            </div>

        )
    }


}