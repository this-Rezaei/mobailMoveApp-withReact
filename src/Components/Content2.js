import React from "react";
import { AiFillStar } from "react-icons/ai";
const Content2 = ({ content }) => {
    return (
        <div className="Top">
            <p>{content.id}</p>
            <img src={content.image} alt="" />
            <div className="descripTop">
                <h3>{content.title}</h3>
                <h4>action & adventure</h4>
                <h5>
                    8.5
                    <AiFillStar className="star" />
                </h5>

                <p>{content.price}</p>
            </div>
        </div>
    );
};

export default Content2;
