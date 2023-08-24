import React, { useEffect, useState } from "react";

const Beer = ({ beer, handleNewFavoriteBeer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hops, setHops] = useState([]);
    const [malts, setMalts] = useState([]);

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

    const toggleDetails = () => {
        setIsOpen(!isOpen);
        {
            isRecipeOpen ? setIsRecipeOpen(!isRecipeOpen) : null;
        }
    };

    const [isRecipeOpen, setIsRecipeOpen] = useState(false);

    const toggleRecipeDetails = () => {
        setIsRecipeOpen(!isRecipeOpen);
    };

    const addToFavorites = () => {
        handleNewFavoriteBeer(beer);
        setIsOpen(false);
    };

    return (
        <>
            <li className="beer__item--container">
                <div className="beer__item" onClick={toggleDetails}>
                    <h3>{beer.name}</h3>
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
                        <button className="beer__button border--gradient" onClick={addToFavorites}>
                            I like this beer, add it to my favorites!
                        </button>
                    </div>
                )}
            </li>
        </>
    );
};

export default Beer;
