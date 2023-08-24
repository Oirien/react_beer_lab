import React from "react";
import Beer from "./Beer";

const BeerList = ({ beers, handleNewFavoriteBeer, beerPage }) => {
    return (
        <>
            <ul>
                <h1>All the Beers</h1>

                {beers.map((beer, i) => (
                    <Beer
                        beer={beer}
                        handleNewFavoriteBeer={handleNewFavoriteBeer}
                        key={i}
                    />
                ))}
                <h3>You are currently enjoying page {beerPage} of 22</h3>
            </ul>
        </>
    );
};

export default BeerList;
