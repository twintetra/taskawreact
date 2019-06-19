import React from 'react';



const ItemList = () => {
    return (
        <div className="border border-secondary p-3 m-1">
            <ul className="item-list list-group">
                <li className="list-group-item">
                    AB:17
                </li>
                <li className="list-group-item">
                    Hardcore IPA
                </li>
                <li className="list-group-item">
                    American Wheat
                </li>
                <li className="list-group-item">
                    Dog Wired (w/8 Wired)
                </li>
                <li className="list-group-item">
                    The Physics
                </li>
            </ul>


            <nav>
                <ul className="pagination justify-content-center mt-3">
                    <li className="page-item"><button className="page-link">Previous</button></li>
                    <li className="page-item"><button className="page-link">1</button></li>
                    <li className="page-item"><button className="page-link">2</button></li>
                    <li className="page-item"><button className="page-link">3</button></li>
                    <li className="page-item"><button className="page-link">Next</button></li>
                </ul>
            </nav>
        </div>
    );
};

export default ItemList;