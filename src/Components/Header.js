import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { BiSearchAlt2 } from "react-icons/bi";
import { TiTimes } from "react-icons/ti";

const Header = () => {
    const [Search, SetSearch] = useState(false);
    const SearchHandler = () => {
        SetSearch(!Search);
    };
    return (
        <header>
            <GoThreeBars className="icon" />
            <div className="search-fild">
                {Search ? <input type="text" className="search-input" /> : null}
                {Search ? (
                    <TiTimes onClick={SearchHandler} className="icon " />
                ) : (
                    <BiSearchAlt2 onClick={SearchHandler} className="icon " />
                )}
            </div>
        </header>
    );
};

export default Header;
