import React, {Component} from 'react';
import IPAService from "./ipa-service";
import Spinner from './spinner/spinner';



export default class RandomBeer extends Component {

    ipaService = new IPAService();

    state = {
        beer: {},
        loading: true,
        error: false
    };

    constructor(props) {
        super(props);
        this.updateBeer();
        setInterval(() => this.updateBeer(),4000);
    }

    error = () => {
        this.setState({error: true, loading: false})
    };

    updateBeer() {
        this.ipaService
            .getRandomBeer()
            .then((beer) => {
                this.setState({ beer: beer, loading: false })})
            .catch(this.error)
    }


    render() {

        const { beer, loading, error} = this.state;

        const spinner = loading ? <Spinner /> : null;
        if (error && !loading) return <p>Error! Something has gone wrong</p>;
        const content = !loading ? <RandomContent beer={beer} /> : null;


        return (
            <div className="d-flex justify-content-center m-1 border border-info p-3 block-random-size rounded">
                {spinner}
                {content}
            </div>
        )
    }
}


const RandomContent = ({beer}) => {

    const { image, name, abv, ibu, description } = beer;

    let imageSrc = 'https://b.radikal.ru/b40/1906/35/a9cbecf37df7.png';
    if (image !== null) imageSrc = image;

    return (
        <>
            <img src={imageSrc} className="img-rounded img-thumbnail image-random-size " alt="random-img"/>
            <div className="ml-5 w-75 border-1 p-3 border-left">
                <h4 className="mt-0 font-weight-bold">{name}</h4>
                <h5><strong>ABV: </strong>{abv}%</h5>
                <h5><strong>IBU: </strong>{ibu}</h5>
                <p><strong>Description: </strong>{description}</p>
            </div>
        </>
    )


};

