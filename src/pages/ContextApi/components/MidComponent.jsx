import React from "react";
import { ContextConsumer } from "./ContextConsumer";

export function MidComponent() {
    return (
        <>
            <div>Mid Component with subcomponent context consumer</div>
            <ContextConsumer></ContextConsumer>
        </>
    )
}