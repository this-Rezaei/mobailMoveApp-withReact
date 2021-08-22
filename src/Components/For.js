import React from "react";
import Pics1 from "../assets/Her-2013.jpg.webp";
import Pics2 from "../assets/Dear-Christmas-2020.jpg.webp";
import Pics3 from "../assets/Cordelia-2019.jpg.webp";
import "./ForStyle.css";
import { AiOutlineArrowRight, AiFillStar } from "react-icons/ai";



const For = ({ toggleState }) => {
    return (
        <div
            className={
                toggleState === 1 ? "content  active-content" : "content"
            }
        >
            <div className="containerFor">
                <div className="hed">
                    <div className="title">
                        <h4>Early access movies & more</h4>
                        <p>From the big screen to your scren</p>
                    </div>
                    <AiOutlineArrowRight className="arrow" />
                </div>
                <div className="descripFor">
                    <div className="des1">
                        <img src={Pics1} alt="" />
                        <p>Her</p>
                        <div className="price">
                            <h5>
                                8.5
                                <AiFillStar className="star" />
                            </h5>
                            <h5>$5.99</h5>
                        </div>
                    </div>
                    <div className="des1">
                        <img src={Pics2} alt="" />
                        <p>Dear-Christmas</p>
                        <div className="price">
                            <h5>
                                7.5
                                <AiFillStar className="star" />
                            </h5>
                            <h5>$4.99</h5>
                        </div>
                    </div>
                    <div className="des1">
                        <img src={Pics3} alt="" />
                        <p>Cordelia</p>
                        <div className="price">
                            <h5>
                                5.5
                                <AiFillStar className="star" />
                            </h5>
                            <h5>$8.99</h5>
                        </div>
                    </div>
                </div>

                <div className="hed">
                    <div className="title">
                        <h4>Early access movies & more</h4>
                        <p>From the big screen to your scren</p>
                    </div>
                    <AiOutlineArrowRight className="arrow" />
                </div>
                <div className="descripFor">
                    <div className="des1">
                        <img src={Pics1} alt="" />
                        <p>Her</p>
                        <div className="price">
                            <h5>
                                8.5
                                <AiFillStar className="star" />
                            </h5>
                            <h5>$5.99</h5>
                        </div>
                    </div>
                    <div className="des1">
                        <img src={Pics2} alt="" />
                        <p>Dear-Christmas</p>
                        <div className="price">
                            <h5>
                                7.5
                                <AiFillStar className="star" />
                            </h5>
                            <h5>$4.99</h5>
                        </div>
                    </div>
                    <div className="des1">
                        <img src={Pics3} alt="" />
                        <p>Cordelia</p>
                        <div className="price">
                            <h5>
                                5.5
                                <AiFillStar className="star" />
                            </h5>
                            <h5>$8.99</h5>
                        </div>
                    </div>
                </div>


                <div className="hed">
                    <div className="title">
                        <h4>Early access movies & more</h4>
                        <p>From the big screen to your scren</p>
                    </div>
                    <AiOutlineArrowRight className="arrow" />
                </div>
                <div className="descripFor">
                    <div className="des1">
                        <img src={Pics1} alt="" />
                        <p>Her</p>
                        <div className="price">
                            <h5>
                                8.5
                                <AiFillStar className="star" />
                            </h5>
                            <h5>$5.99</h5>
                        </div>
                    </div>
                    <div className="des1">
                        <img src={Pics2} alt="" />
                        <p>Dear-Christmas</p>
                        <div className="price">
                            <h5>
                                7.5
                                <AiFillStar className="star" />
                            </h5>
                            <h5>$4.99</h5>
                        </div>
                    </div>
                    <div className="des1">
                        <img src={Pics3} alt="" />
                        <p>Cordelia</p>
                        <div className="price">
                            <h5>
                                5.5
                                <AiFillStar className="star" />
                            </h5>
                            <h5>$8.99</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default For;
