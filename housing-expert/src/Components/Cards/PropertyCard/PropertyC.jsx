import React from "react";
import { Heart } from "./Heart";
import photo from "./photo.svg";
import "./style.css";

export const Frame = () => {
    return (
        <div className="frame">
            <img className="photo" alt="Photo" src={photo} />

            <div className="div">
                <div className="div-2">
                    <div className="title">Nano House</div>

                    <div className="text">Downtown, Dubai</div>
                </div>

                <div className="love">
                    <Heart className="vuesax-linear-heart" />
                </div>
            </div>

            <div className="amount-wrapper">
                <div className="amount">AED 20,000</div>
            </div>
        </div>
    );
};
