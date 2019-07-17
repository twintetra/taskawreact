import React, {Component} from 'react';
import Menu from './menu';
import Content from './content';



const CONTENT = [
    {id: 1, title: 'IPA db api'},
    {id: 2, title: 'Cats photo api'},
    {id: 3, title: 'Simple ex/empty', text: 'Fusce mollis volutpat hendrerit. Integer tincidunt nisl metus, ut rutrum quam venenatis ut. Sed luctus purus non lacus scelerisque volutpat. Nam nec tristique est. Aliquam leo augue, venenatis at neque ut, tincidunt imperdiet orci. Nam facilisis lorem tincidunt nisl sollicitudin sodales. Suspendisse bibendum a magna sed varius. Quisque blandit commodo ipsum at laoreet. Sed ut sapien et magna ornare dignissim. Fusce varius ornare lacus, non elementum massa consequat et. Sed quis diam tortor. Morbi feugiat turpis at lectus elementum, ac fringilla metus semper. Curabitur placerat tempus turpis sit amet pretium.'}
];


export default class AppMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menuSelect: 2
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