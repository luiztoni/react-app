import React from "react";

import { Theme } from "../context/Theme";

export function ContextConsumer() {

    return (
        <Theme.Consumer>
            {state => <div>Theme in Current subcomponent: {state}</div>}
        </Theme.Consumer>
    )
}