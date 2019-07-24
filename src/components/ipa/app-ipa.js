import React, {Component} from 'react';
import RandomBeer from './random-beer';
import ItemList from './item-list';
import BeerDetails from './beer-details';

export default class AppIPA extends Component {

    state = {
        selectedId: 1
    };

    itemSelected = (id) => {
        this.setState({selectedId: id})
    };

    render() {

        const {selectedId} = this.state;

        return (
            <div className="m-1 jumbotron container-fluid">
                <h2>IPA information page / used ReactJS without Redux</h2>
                <RandomBeer/>
                <div className="row row-flex no-gutters">
                    <div className="col-lg-6 content">
                        <ItemList itemSelected={this.itemSelected}/>
                    </div>
                    <div className="col-lg-6 content">
                        <BeerDetails selectedId={selectedId}/>
                    </div>
                </div>
            </div>
        )
    }
};
