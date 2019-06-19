import React from 'react';



const BeerDetails = () => {
    return (
        <div className="border border-secondary p-3 m-1 d-flex">
            <img className="img-rounded img-thumbnail image-details-size"
                 src="https://images.punkapi.com/v2/41.png" alt=""/>

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


//
// abv: 10.7
// attenuation_level: 76.2
// boil_volume: {value: 25, unit: "litres"}
// brewers_tips: "Use freshly ground coffee for the best aromatic hit."
// contributed_by: "Sam Mason <samjbmason>"
// description: "A triple whammy of coffee from HasBean gives our 17th Abstrakt concept beer an intense and roasty, dark mocha character. We brewed with espresso in the mash, cafetiere in the boil, and whole roast beans in the whirlpool and the fermenter."
// ebc: 300
// first_brewed: "10/2014"
// food_pairing: (3) ["12hr smoked brisket", "Chocolate pistachio cakes", "Dulche de leche"]
// ibu: 100
// id: 41
// image_url: "https://images.punkapi.com/v2/41.png"
// ingredients: {malt: Array(7), hops: Array(2), yeast: "Wyeast 1272 - American Ale II™"}
// method: {mash_temp: Array(1), fermentation: {…}, twist: "Coffee: 25g at end, Coffee: 25g at end, Dark Muscavado Sugar: 250g at end"}
// name: "AB:17"
// ph: 4.3
// srm: 150
// tagline: "Three Coffee Rye Imperial Porter."
// target_fg: 1025
// target_og: 1105
// volume: {value: 20, unit: "litres"}