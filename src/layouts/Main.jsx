import React from 'react';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Main({ children }) {
    return (
        <div className="min-h-screen bg-black">
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}
