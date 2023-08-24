import React from "react";
import Beer from "./Beer";

const BeerList = ({ beers, handleNewFavoriteBeer, beerPage }) => {
    return (
        <>
            <h1>All the Beers</h1>
            <ul className="beer__list--wrapper">
                {beers.map((beer, i) => (
                    <Beer beer={beer} handleNewFavoriteBeer={handleNewFavoriteBeer} key={i} />
                ))}
                <h3>You are currently enjoying page {beerPage} of 22</h3>
            </ul>
        </>
    );
};

export default BeerList;
