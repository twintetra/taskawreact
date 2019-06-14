import React, {Component} from 'react';
import Menu from './menu';
import Content from './content';



const CONTENT = [
    {id: 1, title: 'Simple ex 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit convallis dolor, eget ornare turpis fermentum id. Phasellus augue odio, tempor eget sem eget, rutrum volutpat nibh. Duis suscipit, sapien et venenatis condimentum, mauris metus gravida dui, ut fermentum nulla metus vel enim. Etiam consectetur euismod enim. Aenean lorem nisl, rhoncus ac dignissim vitae, imperdiet eu libero. Donec ut est tortor. Maecenas scelerisque, arcu sed porta commodo, nulla velit viverra dolor, dictum accumsan purus odio at ex. Nam a lacus sed nunc vehicula luctus. In hac habitasse platea dictumst. Aliquam nec posuere nunc, at feugiat enim.'},
    {id: 2, title: 'Simple ex 2', text: 'Suspendisse potenti. Donec lacinia urna in pellentesque ornare. Suspendisse molestie gravida euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ut faucibus nunc, nec tempor turpis. Nullam congue elementum dui lobortis hendrerit. Etiam tempor est odio, et maximus justo posuere ac. Mauris leo lacus, mattis non pulvinar iaculis, scelerisque eget lacus. Integer rutrum laoreet augue id pharetra.'},
    {id: 3, title: 'Simple ex 3', text: 'Fusce mollis volutpat hendrerit. Integer tincidunt nisl metus, ut rutrum quam venenatis ut. Sed luctus purus non lacus scelerisque volutpat. Nam nec tristique est. Aliquam leo augue, venenatis at neque ut, tincidunt imperdiet orci. Nam facilisis lorem tincidunt nisl sollicitudin sodales. Suspendisse bibendum a magna sed varius. Quisque blandit commodo ipsum at laoreet. Sed ut sapien et magna ornare dignissim. Fusce varius ornare lacus, non elementum massa consequat et. Sed quis diam tortor. Morbi feugiat turpis at lectus elementum, ac fringilla metus semper. Curabitur placerat tempus turpis sit amet pretium.'}
];


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