import React from 'react';
import Image from "next/image";

const Header = ({}) => {
    return (
        <header>
            <div>
                <div>
                    <Image
                        src={"https://links.papareact.com/jne"}
                        alt={"logo"}
                        width={50}
                        height={10}
                    />
                    <p className="text-blue-400">Welcome to Meta Messenger</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
// by Rokas with ❤️
