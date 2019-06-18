import React from 'react';



const RandomBeer = () => {

    return (
        <div className="d-flex justify-content-center m-1 border border-secondary p-3">
            <img src="https://images.punkapi.com/v2/48.png" className="img-rounded img-thumbnail image-random-size " alt="random-img"/>
                <div className="ml-5 w-75">
                    <h4 className="mt-0">Goldings - IPA Is Dead</h4>
                    <h5><strong>ABV: </strong>6.7%</h5>
                    <h5><strong>IBU: </strong>70</h5>
                    <p><strong>Description: </strong>This is East Kent Goldings re- invented and re-imagined and shows just what can be done with
                        English hops if you use enough of them. In this amped up Goldings reincarnation expect to be
                        slammed with floral lavender, a fruity riot of blackberries and spiced pears, bubblegum,
                        plums and the illusion of thyme.</p>
                </div>
        </div>
    )
};

export default RandomBeer;