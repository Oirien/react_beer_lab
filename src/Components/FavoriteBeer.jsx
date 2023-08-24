import React, { useState } from "react";

const FavoriteBeer = ({ beer, handleRemoveFavoriteBeer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li>
            <div
                className={`beer__item ${isOpen ? "open" : ""}`}
                onClick={toggleDetails}>
                {beer.name}
            </div>
            {isOpen && (
                <div className="beer__details">
                    <p>{beer.description}</p>
                    <button onClick={() => handleRemoveFavoriteBeer(beer)}>
                        I've decided I no longer like this beer!
                    </button>
                </div>
            )}
        </li>
    );
};

export default FavoriteBeer;
