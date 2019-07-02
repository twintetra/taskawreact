import React, {Component} from 'react';
import RandomBeer from './random-beer';
import ItemList from './item-list';
import BeerDetails from './beer-details';


export default class AppIPA extends Component {

    state = {
        selectedId: null
    };


    itemSelected = (id) => {
        this.setState({selectedId: id})
    };


    render() {

        const {selectedId} = this.state;

        return (

            <div>
                <RandomBeer/>
                <div className="row mb2 row-flex">
                    <div className="col-md-6 content">
                        <ItemList itemSelected={this.itemSelected}/>
                    </div>
                    <div className="col-md-6 content">
                        <BeerDetails selectedId={selectedId}/>
                    </div>
                </div>
            </div>
        )
    }
};
