import { useState } from "react";
import "./TabStyle.css";
import Tops from "./Tops";
import Genres from "./Genres";
import For from "./For";

function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container2">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    For you
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Tops
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    Genres
                </button>
            </div>
            <Tops toggleState={toggleState} />
            <Genres toggleState={toggleState} />
            <For toggleState={toggleState} />
        </div>
    );
}

export default Tabs;
