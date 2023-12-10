import React, { useEffect } from "react";
import { useState } from "react";
import { SubComponent } from "./components/subcomponent";

export function ShareState() {

    let [state, setState] = useState("Init state")

    useEffect(() => {
        console.log("load component");
    }, [])

    const handle = (c) => {
        alert(c);
        setState(c);
    }

    return (
        <>
            <SubComponent myparam1={15} myfuntion={handle}>Children Prop</SubComponent>
            <p>{state}</p>
        </>
    )
}