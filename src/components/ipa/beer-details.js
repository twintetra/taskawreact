import React, {Component} from 'react';
import IPAService from "./ipa-service";
import Spinner from "./spinner/spinner";


export default class BeerDetails extends Component {

    ipaService = new IPAService();

    state = {
        beerDetails: null,
        error: false
    };


    componentDidMount() {
        this.updateBeer();
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedId !== prevProps.selectedId) {
            this.updateBeer();
        }
    }

    error = () => {
        this.setState({error: true})
    };

    updateBeer = () => {
        const {selectedId} = this.props;

        if (!selectedId) return;

        this.ipaService
            .getBeer(selectedId)
            .then((beer) => {
                this.setState({beerDetails: beer[0]})})
            .catch(this.error);
    };




    render() {

        const {beerDetails, error} = this.state;

        if (error) return <p>Error! Something has gone wrong</p>;

        if (!beerDetails) return <Spinner/>;

        const {id, name, abv, ibu, image_url, first_brewed, ebc, ph, boil_volume, description} = beerDetails;
        let imageSrc = 'https://b.radikal.ru/b40/1906/35/a9cbecf37df7.png';

        if (image_url !== null) imageSrc = image_url;

        console.log(beerDetails);

        return (
            <div className="border border-info p-3 m-1 d-flex rounded justify-content-center">
                <img className="img-rounded img-thumbnail image-details-size m-3"
                     src={imageSrc} alt=""/>

                <div className="card-body">
                    <h3 className="font-weight-bold">{id}. {name}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term"><strong>ABV: </strong></span>
                            <span>{abv}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term"><strong>IBU: </strong></span>
                            <span>{ibu}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term"><strong>EBC: </strong></span>
                            <span>{ebc}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term"><strong>PH: </strong></span>
                            <span>{ph}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term"><strong>Boil volume: </strong></span>
                            <span>{boil_volume.value} {boil_volume.unit}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term"><strong>First brewed: </strong></span>
                            <span>{first_brewed}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term"><strong>DESCRIPTION: </strong></span>
                            <span>{description}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};
