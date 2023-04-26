import React from 'react';
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Main({ children }) {
    return (
        <div className="min-h-screen bg-black">
            <Nav />
            {children}
            <Footer />
        </div>
    )
}
