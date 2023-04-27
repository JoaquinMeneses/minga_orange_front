import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";

export default function Nav() {
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
                <div className="flex flex-col items-center w-auto h-[100%] fixed bg-gradient-to-r from-neutral-700 to-black order-2 top-0 left-0 text-black z-50">
                    <div className="flex justify-between">
                        <div className="flex items-center p-2">
                            <img className="bg-black w-[40px] h-[40px] rounded-[100%] mr-2" src="https://gluc.mx/u/fotografias/m/2020/4/9/f850x638-25498_102987_5050.jpg" alt="" />
                            <div className="ml-1 text-white">
                                <h4>Carlos Arturo Torres</h4>
                                <h5>carlosat95@gmail.com</h5>
                            </div>
                        </div>
                        <button
                            className="text-white rounded p-2"
                            onClick={handleCloseOffcanvas}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-[100%] text-white flex-col mt-3 cel:order-3 sm:order-2 flex items-center">
                        <ul className="w-[80%] flex flex-col items-center gap-2 text-center">
                            <a className=" p-2 bg-white text-black rounded-md w-[70%]" href="#">Home</a>
                            <a className=" p-2  text-white rounded-md w-[70%]" href="#">Mangas</a>
                            <a className=" p-2  text-white rounded-md w-[70%]" href="#">My Mangas</a>
                            <a className=" p-2  text-white rounded-md w-[70%]" href="#">Favourites</a>
                            <a className=" p-2  text-white rounded-md w-[70%]" href="#">Logout</a>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
}
