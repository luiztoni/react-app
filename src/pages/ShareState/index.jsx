import React, { useEffect } from "react";
import { useState } from "react";
import { SubComponent } from "./components/subcomponent";

export function ShareState() {

    let [prop, setProp] = useState("Init state")

    useEffect(() => {
        console.log("load component");
    }, [])

    const handleAnyFunction = (arg) => {
        alert(arg);
        setProp(arg);
    }

    return (
        <>
            <SubComponent anyParam={15} anyFuntion={handleAnyFunction}>Children Prop</SubComponent>
            <p>{prop}</p>
        </>
    )
}