import React from "react";
import '../styles/globals.css'
import head from "./head";
import Header from "./Header";

const RootLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <main>
            <head />
            <body>
                <Header />
                {children}
            </body>
        </main>
    )
}

export default RootLayout;
// by Rokas with ❤️
