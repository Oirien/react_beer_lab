import React from "react";
import Beer from "./Beer";

const BeerList = ({ beers, handleNewFavoriteBeer }) => {
    return (
        <>
            <h1 className="beer__title">All the Beers</h1>
            <ul className="beer__list--wrapper">
                {beers.map((beer, i) => (
                    <Beer beer={beer} handleNewFavoriteBeer={handleNewFavoriteBeer} key={i} />
                ))}
            </ul>
        </>
    );
};

export default BeerList;
