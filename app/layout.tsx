import React from "react";
import '../styles/globals.css'

const RootLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <main>
            <head>
                <title>Web 3 Messenger</title>
            </head>
            <body>
            {children}
            </body>
        </main>
    )
}

export default RootLayout;
// by Rokas with ❤️
