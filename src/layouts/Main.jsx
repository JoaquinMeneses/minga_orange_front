import React from 'react';
import Footer from "../components/Footer.jsx";
import NavBar from "../components/NavBar.jsx";

export default function Main({ children }) {
    return (
        <div className="min-h-screen bg-black">
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}
