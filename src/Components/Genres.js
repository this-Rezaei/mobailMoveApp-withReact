import React from "react";

const Genres = ({ toggleState }) => {
    return (
        <>
            <div
                className={
                    toggleState === 3 ? "content  active-content" : "content"
                }
            ></div>
        </>
    );
};

export default Genres;
