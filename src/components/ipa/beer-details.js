import React from 'react';



const BeerDetails = () => {
    return (
        <div className="border border-info p-3 m-1 d-flex rounded">
            <img className="img-rounded img-thumbnail image-details-size"
                 src="https://b.radikal.ru/b40/1906/35/a9cbecf37df7.png" alt=""/>

            <div className="card-body">
                <h3 className="font-weight-bold">AB:17</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term"><strong>ABV: </strong></span>
                        <span>10.7</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term"><strong>IBU: </strong></span>
                        <span>100</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term"><strong>DESCRIPTION: </strong></span>
                        <span>A triple whammy of coffee from HasBean gives our 17th Abstrakt concept beer
                            an intense and roasty, dark mocha character. We brewed with espresso in the mash,
                            cafetiere in the boil, and whole roast beans in the whirlpool and the fermenter."</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BeerDetails;