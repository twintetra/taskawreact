import React, { Component } from 'react';
import Input from "./input";
import Items from "./items";
import { store } from "../../index";
import { requestDogName, loading } from './actions';
import { connect } from 'react-redux';
import Image from "./image";
import DOGService from "./dog-api-service";
import Spinner from "./spinner/spinner";

class AppDogs extends Component {

    dogService = new DOGService();

    componentDidMount() {
        this.dogService
            .getAllList()
            .then(data => {
                store.dispatch(loading(false));
                store.dispatch(requestDogName(Object.keys(data.message)));
            })
            .catch(error => console.error(error));
    }


    render() {


        if (store.getState().loading) {
            return (
                <div className="jumbotron container-fluid m-1">
                    <Spinner />
                </div>
            )
        }

        return (
            <div className="jumbotron container-fluid m-1">
                <div className="row">
                    <div className="col-lg">
                        <Input />
                        <Items dogs={this.props.dogs} value={this.props.value}/>
                    </div>
                    <div className="col-lg">
                        <Image image={this.props.image}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        dogs: store.dogs,
        value: store.value,
        image: store.image
    }
};

export default connect(mapStateToProps)(AppDogs);