import React from "react";
import Content2 from "./Content2";

const Content = ({ api }) => {
    return (
        <>
            {api.cards.map((item) => (
                <Content2 content={item} />
            ))}
        </>
    );
};

export default Content;
