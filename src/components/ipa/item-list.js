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
            beersPage: null
        };
    }

    requestPageBeer = (pageNumber) => {
        this.ipaService
            .getPageBeers(pageNumber)
            .then((beers) => {
                this.setState({beersPage: beers})
            });
    };

    componentDidMount() {
        this.requestPageBeer(this.state.activePage);
    }

    handlePageChange = (pageNumber) => {
        this.setState({activePage: pageNumber});
        this.requestPageBeer(pageNumber);
    };



    renderBeer = (beersPage) => {
        if (!beersPage) return;
        return beersPage.map(({id, name}) => {
            return (<li key={id} onClick={() => this.props.itemSelected(id)} className="list-group-item list-cursor">{id}. {name}</li>)
        })
    };


    render() {
        const { beersPage } = this.state;
        const rendItem = this.renderBeer(beersPage);

        if (!beersPage) {
            return <Spinner/>;
        }
            return (
                <div className="border border-info p-3 m-1 rounded">
                    <ul className="item-list list-group">
                        {rendItem}
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
