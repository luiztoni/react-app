import React from "react";

export function SubComponent(props) {
    return (
        <>
            <div>
                <p id="id">{props.anyParam}</p>
                <button onClick={() => props.anyFuntion("Click in subcomponent")}>Function</button>
                <p>{props.children}</p>
                <br />
            </div>

        </>
    )
}