import React, { useState } from "react";
import { MidComponent } from "./components/MidComponent";
import { Theme } from "./context/Theme";

export function ContextProvider() {
    const [theme, setTheme] = useState('light');

    const handleClick = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }
    return (
        <Theme.Provider value={theme}>
            <div>
                <p>Current theme: {theme}</p>
                <button onClick={handleClick} id="id1">Change theme</button>
            </div>
            <MidComponent></MidComponent>
        </Theme.Provider>
    )
}