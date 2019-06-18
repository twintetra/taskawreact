import React, {Component} from 'react';

import IPAService from './ipa-service';
import RandomBeer from './random-beer';
import ItemList from './item-list';
import BeerDetails from './beer-details';


export default class AppIPA extends Component {


    ipaService = new IPAService();


    render() {

        console.log(this.ipaService.getBeerId(4));
        console.log(this.ipaService.getPageBeers(5));
        // this.ipaService.getPageBeers(2);
        return (

            <div>
                <RandomBeer/>
                <div className="row mb2">
                    <div className="col-md-4">
                        <ItemList />
                    </div>
                    <div className="col-md-8">
                        <BeerDetails />
                    </div>
                </div>
            </div>
        )
    }
};
