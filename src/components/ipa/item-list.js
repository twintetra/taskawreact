import React, {Component} from 'react';
import Pagination from "react-js-pagination";
import IPAService from "./ipa-service";

export default class ItemList extends Component {

    ipaService = new IPAService();


    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            beersPage: {}

        };
    }

    handlePagePrimary = (pageNumber) => {
        this.requestPageBeers(pageNumber);
    };

    componentDidMount() {
        console.log('1', this.state.beersPage);
        this.handlePagePrimary(1);
        (() => console.log( '2:  ',this.state.beersPage))();
    }

    handlePageChange = (pageNumber = 1) => {
        this.setState({activePage: pageNumber});
        this.requestPageBeers(pageNumber);
    };

    requestPageBeers = (pageNumber) => {
        let arrPageBeers = {};
        this.ipaService
            .getPageBeers(pageNumber)
            .then((beers) => {
                beers.map((b) =>  arrPageBeers[b.id] = b.name )
            });
        this.setState({beersPage: arrPageBeers});

    };


    render() {
        console.log( 'рендер:  ',this.state.beersPage);
        setTimeout(() => console.log( 'из рендера с таймаутом:  ',this.state.beersPage),200);

        return (

            <div className="border border-info p-3 m-1 rounded">
                <ul className="item-list list-group">
                {/*    */}
                </ul>
                <div>
                    <Pagination
                        itemClass="page-item"
                        linkClass="page-link"
                        activePage={this.state.activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={325}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}/>
                </div>
            </div>

        );
    }
}






//             <ul className="item-list list-group">
//                 <li className="list-group-item">
//                     AB:17
//                 </li>
//                 <li className="list-group-item">
//                     Hardcore IPA
//                 </li>
//                 <li className="list-group-item">
//                     American Wheat
//                 </li>
//                 <li className="list-group-item">
//                     Dog Wired (w/8 Wired)
//                 </li>
//                 <li className="list-group-item">
//                     The Physics
//                 </li>
//             </ul>
//
//
