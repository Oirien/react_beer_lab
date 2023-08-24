import React, { useEffect, useState } from "react";
import BeerList from "../Components/BeerList";
import FavoriteBeers from "../Components/FavoriteBeers";

const BeerContainer = () => {
    const [beers, setBeers] = useState([]);
    const [favoriteBeers, setFavoriteBeers] = useState([]);
    const [beerPage, setBeerPage] = useState(1);

    useEffect(() => {
        fetch(`https://api.punkapi.com/v2/beers?page=${beerPage}&per_page=15`)
            .then(res => res.json())
            .then(data => {
                setBeers(data);
            });
    }, [beerPage]);

    const handleNewFavoriteBeer = beer => {
        if (!favoriteBeers.includes(beer)) {
            setFavoriteBeers([...favoriteBeers, beer]);
        }
    };

    const handleRemoveFavoriteBeer = beer => {
        const removedFavoriteBeers = favoriteBeers.filter(favoriteBeer => favoriteBeer !== beer);
        setFavoriteBeers(removedFavoriteBeers);
    };

    return (
        <>
            <div className="beer__container">
                <div className="beer__list border--gradient">
                    <BeerList beers={beers} handleNewFavoriteBeer={handleNewFavoriteBeer} beerPage={beerPage} />
                    <button
                        onClick={() => {
                            setBeerPage(beerPage === 22 ? 1 : beerPage + 1);
                        }}>
                        Show me more Beer!
                    </button>
                </div>
                <FavoriteBeers favoriteBeers={favoriteBeers} handleRemoveFavoriteBeer={handleRemoveFavoriteBeer} />
            </div>
        </>
    );
};

export default BeerContainer;
