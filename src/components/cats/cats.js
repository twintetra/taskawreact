import React from 'react';
import { connect } from 'react-redux';
import rndCat from './actions';


const fetchCat = (dispatch) => {
    dispatch(rndCat());
    return fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            console.log(data,'data');
            dispatch(rndCat(data))}
            )
};



const Cats = ({rndCats}) => {
    return (
        <div className="text-center">
            <button className="btn btn-outline-info m-2"
                    onClick={() => fetchCat(this.props.dispatch)}>Get cat!</button>
            <img className="d-block img-rounded img-thumbnail image-random-size"
                 src={this.props.url}
                 alt=""/>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        counter: state
    }
};


export default connect(mapStateToProps, rndCat)(Cats);