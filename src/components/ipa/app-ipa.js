import React, {Component} from 'react';
import RandomBeer from './random-beer';
import ItemList from './item-list';
import BeerDetails from './beer-details';


export default class AppIPA extends Component {



    render() {

        return (

            <div>
                <RandomBeer/>
                <div className="row mb2 row-flex">
                    <div className="col-md-6 content">
                        <ItemList />
                    </div>
                    <div className="col-md-6 content">
                        <BeerDetails />
                    </div>
                </div>
            </div>
        )
    }
};
