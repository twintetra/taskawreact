import React, {Component} from 'react';
import DOGService from "./dog-api-service";
import { store } from "../../index";
import {breedImage} from './actions';

export default class Items extends Component {

    dogService = new DOGService();

    filterByValue = (arr, value) => {
        if (value !== undefined) {
            return arr.filter((el) => {
                return el.toLowerCase().indexOf(value.toLowerCase()) === 0;
            });
        }
    };


    handleDogImage = (item) => {

        this.dogService.getBreedImage(item)
            .then(data => store.dispatch(breedImage(data.message)))
            .catch(error => console.error(error));
    };


    renderDogs = (dogs) => {

        const {value} = this.props;
        const dogFilter = this.filterByValue(dogs, value);

        if (!dogs) return;

        if (dogFilter) {
            return dogFilter.map((item, index) => {
                return (
                    <li key={index}
                        onClick={() => this.handleDogImage(item)}
                        className="list-group-item cursor-pointer">{item}</li>)
            });
        }

        return dogs.map((item, index) => {
            return (<li key={index}
                        onClick={() => this.handleDogImage(item)}
                        className="list-group-item cursor-pointer">{item}</li>)
        });
    };


    render() {

        const { dogs } = this.props;

        return (
            <ul className="list-group scroll">
                {this.renderDogs(dogs)}
            </ul>
        )
    }
};
