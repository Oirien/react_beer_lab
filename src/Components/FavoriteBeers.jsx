import React, { useState } from "react";
import FavoriteBeer from "./FavoriteBeer";

const FavoriteBeers = ({ favoriteBeers, handleRemoveFavoriteBeer }) => {
    return (
        <>
            <ul className="beer__favorites border--gradient">
                <h1>My Favorite Beers</h1>
                {favoriteBeers.map((beer, i) => (
                    <FavoriteBeer beer={beer} handleRemoveFavoriteBeer={handleRemoveFavoriteBeer} key={i} />
                ))}
            </ul>
        </>
    );
};

export default FavoriteBeers;
