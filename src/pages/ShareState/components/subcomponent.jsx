import React from "react";

export function SubComponent(props) {
    return (
        <>
            <div>
                <p id="id">{props.myparam1}</p>
                <button onClick={() => props.myfuntion("Click in subcomponent")}>Function</button>
                <p>{props.children}</p>
                <br />
            </div>

        </>
    )
}