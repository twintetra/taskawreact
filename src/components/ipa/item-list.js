import React, {Component} from 'react';
import Pagination from "react-js-pagination";
import IPAService from "./ipa-service";
import Spinner from './spinner/spinner';

export default class ItemList extends Component {

    ipaService = new IPAService();


    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            loading: true,
            beersPage: null
        };
    }

    requestPageBeer = (pageNumber) => {
        let arrPageBeers = {};
        this.ipaService
            .getPageBeers(pageNumber)
            .then((beers) => {
                beers.map((b) =>  arrPageBeers[b.id] = b.name )
            });
        this.setState({beersPage: arrPageBeers, loading: false});
    };

    componentDidMount() {
        this.requestPageBeer(this.state.activePage);

    }

    handlePageChange = (pageNumber) => {
    this.setState({activePage: pageNumber});
    this.requestPageBeer(pageNumber);
};



    renderBeer = (arr) => {
        console.log('::::::',arr);
        // if (arr === null) {return (<li>1</li>)} else {
         for (let value in arr) {return (<li className="list-group-item">{arr[value]}</li>)}
            // return arr.map(({ name}) => {
            //     return (<li className="list-group-item">{name}</li>)
            // })
        // }
    };


    render() {
        const { loading, beersPage } = this.state;
        // this.renderBeers();
        // if (!loading) {
        //     console.log('spinner');
        //     return Spinner;
        // } else {
            console.log('render', beersPage);
            return (

                <div className="border border-info p-3 m-1 rounded">
                    <ul className="item-list list-group">
                        {this.renderBeer(beersPage)}
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
        // }
    }
}


// handlePagePrimary = (pageNumber) => {
//     this.requestPageBeers(pageNumber);
// };

// componentDidMount() {
//     console.log('1', this.state.beersPage);
//     this.handlePagePrimary(1);
//
//     this.requestPageBeers = (pageNumber) => {
//         let arrPageBeers = {};
//         this.ipaService
//             .getPageBeers(pageNumber)
//             .then((beers) => {
//                 beers.map((b) =>  arrPageBeers[b.id] = b.name )
//             });
//         this.setState({beersPage: arrPageBeers});
//
//     };

// (() => console.log( '2:  ',this.state.beersPage))();
// }
//
// handlePageChange = (pageNumber = 1) => {
//     this.setState({activePage: pageNumber});
//     this.requestPageBeers(pageNumber);
// };
//



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
