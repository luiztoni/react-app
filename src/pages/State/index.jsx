import React from "react";
import { useState } from "react";


export default function State(props) {
    const [count, setCount] = useState(0);

    const handleClick = (e) => {
        if (e.target.id === "plus") {
            setCount(count => count + 1);
        } else {
            setCount(count => count - 1);
        }
    }

    const goToHome = async () => {
        window.location.href = "/";
    }

    return (
        <>
            <h1>Home</h1>
            <div className="home">
                <section>
                    <h1>Props params value: {props.params?.id}</h1>
                </section>
                <br />
                <p>Clicks number: {count}</p>
                <br />
                <button onClick={handleClick} id="plus">+</button>
                <br />
                <button onClick={handleClick} id="minus">-</button>
                <br />
                <a onClick={goToHome}>Go to Home page</a>
            </div>
        </>

    )
}