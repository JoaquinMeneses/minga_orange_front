import React from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Main({ children }) {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}