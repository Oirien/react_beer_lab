import React, { useState, useEffect } from "react";

const FavoriteBeer = ({ beer, handleRemoveFavoriteBeer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isRecipeOpen, setIsRecipeOpen] = useState(false);
    const [hops, setHops] = useState([]);
    const [malts, setMalts] = useState([]);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
        {
            isRecipeOpen ? setIsRecipeOpen(!isRecipeOpen) : null;
        }
    };

    const toggleRecipeDetails = () => {
        setIsRecipeOpen(!isRecipeOpen);
    };

    useEffect(() => {
        const hopsNames = beer.ingredients.hops.map(hop => hop.name);
        const maltsNames = beer.ingredients.malt.map(malt => malt.name);

        setHops(
            hopsNames.filter((hop, i) => {
                return hopsNames.indexOf(hop) === i;
            })
        );
        setMalts(
            maltsNames.filter((malt, i) => {
                return maltsNames.indexOf(malt) === i;
            })
        );
    }, [isOpen]);

    return (
        <li className="beer__item--container">
            <div className="beer__item" onClick={toggleDetails}>
                {beer.name}
            </div>
            {isOpen && (
                <div className="beer__details border--gradient">
                    <p>"{beer.tagline}"</p>
                    <p>{beer.description}</p>
                    {isRecipeOpen === true ? (
                        <button className="beer__button border--gradient" onClick={toggleRecipeDetails}>
                            Close Recipe
                        </button>
                    ) : (
                        <button className="beer__button border--gradient" onClick={toggleRecipeDetails}>
                            Show Recipe
                        </button>
                    )}
                    {isRecipeOpen && (
                        <div className="beer__details">
                            <p>{beer.brewers_tips}</p>
                            <h3>Hop types used</h3>
                            <div className="ingredients">
                                {hops.map((name, i) => (
                                    <p key={i}>{name}, </p>
                                ))}
                            </div>
                            <h3>Malt types used</h3>
                            <div className="ingredients">
                                {malts.map((name, i) => (
                                    <p key={i}>{name}, </p>
                                ))}
                            </div>
                            <p className="yeast">We used {beer.ingredients.yeast} yeast</p>
                        </div>
                    )}
                    <button
                        className="beer__button border--gradient"
                        onClick={() => {
                            handleRemoveFavoriteBeer(beer);
                            toggleDetails();
                        }}>
                        I've decided I no longer like this beer!
                    </button>
                </div>
            )}
        </li>
    );
};

export default FavoriteBeer;
