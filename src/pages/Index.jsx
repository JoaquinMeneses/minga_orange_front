import React from 'react'
import Welcome from "../components/Welcome"
import Carousel from '../components/Carousel'
import Manga1 from "../assets/images/Manga1.png";
import Manga2 from "../assets/images/Manga2.png";
import Manga3 from "../assets/images/Manga3.png";

const images = [
    { src: Manga1, alt: 'Manga1' },
    { src: Manga2, alt: 'Manga2' },
    { src: Manga3, alt: 'Manga3' }
];

export default function Index() {
    return (
        <main id="Home">
            <Welcome />
            <div class="min-h-[100vh] relative">
                <Carousel images={images}/>
                <div class="text-center md:text-left absolute top-[3%] left-0 md:left-[-35px] w-[100vw] md:w-[100vw] flex flex-col items-center md:items-end">
                    <h1 className="text-white mb-4 font-inter font-semibold text-5xl not-italic w-[70%] md:w-[40%]">
                        Your favourite manga reader 😏
                    </h1>
                    <p className="text-white mb-4 font-inter font-normal text-base not-italic w-[70%] md:w-[40%]">
                        Is an exceptional app for all manga lovers. With
                        a wide range of titles available, from classics
                        to the latest releases, this app is perfect for
                        those who want to read manga anytime, anywhere.
                    </p>
                    <button class="flex w-[70%] md:w-[40%] mb-4 align-center justify-center bg-white/30 backdrop-blur-sm rounded-[5px] text-white text-center py-[0.5rem] px-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="w-6 h-6 text-white absolute left-[10px]"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                        <span class="w-[100%] font-inter font-normal text-base">
                            Search a mangas
                        </span>
                    </button>
                </div>
            </div>
        </main>
    )
}
