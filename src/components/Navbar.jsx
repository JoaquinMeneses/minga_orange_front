import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";

function NavBar() {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    const handleCloseOffcanvas = () => {
        setIsOffcanvasOpen(false);
    };
    return (
        <nav className="h-[10vh] flex justify-between p-4">
            <button className="contents" onClick={handleMenuClick}>
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
                        d={isOffcanvasOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}
                    />
                </svg>
            </button>
            <img className="h-[5vh]" src={Logo} alt="logo" />
            {isOffcanvasOpen && (
                <div className="fixed w-full sm:w-[48vw] z-10 top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-[#434343] to-[#000000]">
                    <div className="flex flex-col h-full p-4">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex flex-col sm:flex-row">
                                <img className="bg-black w-[40px] h-[40px] rounded-[100%] mr-2" src="https://gluc.mx/u/fotografias/m/2020/4/9/f850x638-25498_102987_5050.jpg" alt="" />
                                <div>
                                    <h1 className="text-white">Joaquin Isaac Meneses</h1>
                                    <p className="text-white">joakinmeneses.jm@gmail.com</p>
                                </div>
                            </div>
                            <button
                                className="text-white bg-transparent rounded p-2"
                                onClick={handleCloseOffcanvas}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <ul className="flex flex-col items-center font-poppins font-semibold text-base">
                            <button className="w-[80%] sm:w-[40%] my-1 text-black bg-white p-[12px] rounded-[8px]">Home</button>
                            <button className="w-[80%] sm:w-[40%] my-1 text-black bg-white p-[12px] rounded-[8px]">Mangas</button>
                            <button className="w-[80%] sm:w-[40%] my-1 text-black bg-white p-[12px] rounded-[8px]">My mangas</button>
                            <button className="w-[80%] sm:w-[40%] my-1 text-black bg-white p-[12px] rounded-[8px]">Favourites</button>
                            <button className="w-[80%] sm:w-[40%] my-1 text-black bg-white p-[12px] rounded-[8px]">Logout</button>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavBar