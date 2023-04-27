import React from "react";

import imgFooter from "../assets/images/Footer.png";
import logoFooter from "../assets/images/Logo.png";

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <img
                className="w-[100vw] rounded-[100%_100%_100%_100%/_0%_0%_100%_100%]"
                src={imgFooter}
                alt="Footer"
            />
            <div className="bg-black h-auto flex flex-col sm:flex-row justify-center items-center py-12 gap-4">
                <div className="w-[30%] flex justify-center items-center gap-4">
                    <a
                        className="mx-[0.5rem] md:m-0 font-poppins text-base font-normal	"
                        href="#Home"
                    >
                        Home
                    </a>
                    <a
                        className="mx-[0.5rem] md:m-0 font-poppins text-base font-normal	"
                        href="#Mangas"
                    >
                        Mangas
                    </a>
                </div>
                <div className="w-[30%] flex justify-center items-center">
                    <img
                        className="h-[10vh]"
                        src={logoFooter}
                        alt="Logo"
                    />
                </div>
                <div className="w-[30%] flex justify-center items-center flex-col">
                    <div className="w-[100%] sm:w-[50%] flex justify-between">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            title="Facebook"
                            className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 fill-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                            </svg>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            title="Twitter"
                            className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 fill-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            title="Vimeo"
                            className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 fill-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22.875 10.063c-2.442 5.217-8.337 12.319-12.063 12.319-3.672 0-4.203-7.831-6.208-13.043-.987-2.565-1.624-1.976-3.474-.681l-1.128-1.455c2.698-2.372 5.398-5.127 7.057-5.28 1.868-.179 3.018 1.098 3.448 3.832.568 3.593 1.362 9.17 2.748 9.17 1.08 0 3.741-4.424 3.878-6.006.243-2.316-1.703-2.386-3.392-1.663 2.673-8.754 13.793-7.142 9.134 2.807z" />
                            </svg>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            title="Vimeo"
                            className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 fill-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>{" "}
                        </a>
                    </div>
                    <button className="w-[100%] sm:w-[50%] bg-gradient-to-r from-[#DEE4EA] to-[#F9FCFF] text-black rounded-[4px] p-[8px] flex justify-center">
                        Donate{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}
