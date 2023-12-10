import React from "react";
import { useState } from "react";


export function State(props) {
    const [click, setClick] = useState(0);
    
    const handle = (e) => {
        if (e.target.id === "plus") {
            setClick(click => click + 1);
        } else {
            setClick(click => click - 1);
        }
    }

    const redirect = async () => {
        window.location.href = "/";
    }

    return (
        <div className="home">
            <section>
                <h1>Props params value: {props.params.id}</h1>
            </section>
            <br />
            <p>Clicks number: {click}</p>
            <br />
            <button onClick={handle} id="plus">+</button>
            <br />
            <button onClick={handle} id="minus">-</button>
            <br />
            <a onClick={redirect}>Go to Home page</a>
        </div>
    )
}