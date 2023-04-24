import React from "react";

import Logo from "../assets/images/Logo.png";

export default function Navbar() {
    return (
        <nav className="h-[10vh] flex justify-between p-4">
            <button className="contents">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-white"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>
            <img src={Logo} alt="logo" />
        </nav>
    );
}
