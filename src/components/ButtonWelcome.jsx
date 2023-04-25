import React from 'react'

export default function ButtonWelcome() {
    return (
        <button className="flex w-[70%] md:w-[40%] mb-4 align-center justify-center bg-white/30 backdrop-blur-sm rounded-[5px] text-white text-center py-[0.5rem] px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white absolute left-[10px]"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
            </svg>
            <span className="w-[100%] font-inter font-normal text-base">
                Search a mangas
            </span>
        </button>
    )
}
