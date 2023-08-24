import React, { useState } from "react";

const Beer = ({ beer, handleNewFavoriteBeer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    const addToFavorites = () => {
        handleNewFavoriteBeer(beer);
        setIsOpen(false);
    };

    return (
        <>
            <li>
                <div
                    className={`beer__item ${isOpen ? "open" : ""}`}
                    onClick={toggleDetails}>
                    {beer.name}
                </div>
                {isOpen && (
                    <div className="beer__details">
                        <p>{beer.description}</p>
                        <button onClick={addToFavorites}>
                            I like this beer, add it to my favorites!
                        </button>
                    </div>
                )}
            </li>
        </>
    );
};

export default Beer;
