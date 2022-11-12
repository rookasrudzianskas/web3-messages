import React from "react";
import '../styles/globals.css'
import head from "./head";

const RootLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <main>
            <head />
            <body>
            {children}
            </body>
        </main>
    )
}

export default RootLayout;
// by Rokas with ❤️
