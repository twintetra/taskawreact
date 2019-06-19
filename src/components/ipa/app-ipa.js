import React, {Component} from 'react';

import IPAService from './ipa-service';
import RandomBeer from './random-beer';
import ItemList from './item-list';
import BeerDetails from './beer-details';


export default class AppIPA extends Component {


    ipaService = new IPAService();


    render() {

        console.log(this.ipaService.getBeer(266));
        console.log(this.ipaService.getPageBeers(2));
        // this.ipaService.getPageBeers(2);
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
