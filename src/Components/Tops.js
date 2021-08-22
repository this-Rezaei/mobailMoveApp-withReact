import React, { useState, useEffect } from "react";
import "./TopsStyle.css";
import Content from "./Content";
import axios from "axios";

const Tops = ({ toggleState }) => {
    const [Api, setApi] = useState([]);
    useEffect(() => {
        axios
            .get("https://backendtask1234.herokuapp.com/recommend")
            .then((res) => {
                console.log(res.data.data);
                setApi(res.data.data);
            });
        //     .catch (error => {
        //     console.error("ارور داره");
        // }
    }, []);

    return (
        <div
            className={
                toggleState === 2 ? "content  active-content" : "content"
            }
        >
            <div className="containerTop">
                {Api.map((api, key) => (
                    <Content api={api} index={key} />
                ))}
                {/* {Api.map((api) => (
                    <Content api={api} />
                ))} */}
            </div>
        </div>
    );
};

export default Tops;
