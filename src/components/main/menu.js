import React, {Component} from 'react';



export default class Menu extends Component {




    renderMenu = () => {

        const {menuSelect, content} = this.props;
        let newsId = null;
        if (content.length) {
            newsId = content.map((item) => {
                return <button key={item.id} onClick={() => menuSelect(item.id)}  className="list-group-item list-group-item-action bg-light">{item.id}. {item.title}</button>
            });
        } else {
            newsId = <p>menu not load</p>
        }
        return newsId;
    };


    render() {



        return (


            <div className="bg-light border-right sidebar-wrapper">
                <div className="sidebar-heading text-center font-weight-bold text-info">MENU</div>
                <div className="list-group list-group-flush">
                    {this.renderMenu()}
                </div>


            </div>
        )
    }
};
