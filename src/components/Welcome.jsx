import React from 'react'

import anime1 from "../assets/images/anime1.png";
import anime2 from "../assets/images/anime2.png";
import anime3 from "../assets/images/anime3.png";
import anime4 from "../assets/images/anime4.png";
import Button from "../components/Button";

export default function Welcome() {
    return (
        <div className="h-[90vh] flex">
            <div className="h-[60%] w-[50%] rounded-full bg-gradient-to-r from-black to-[#15803d] blur-[115px]"></div>
            <div className="h-[60%] w-[50%] rounded-full bg-gradient-to-r from-black to-indigo-600 blur-[115px]"></div>
            <div className="h-[100vh] w-[100%] absolute top-[25%]">
                <div className="flex justify-center align-center ">
                    <img
                        className="h-[50%] origin-center rotate-[20deg] absolute brightness-50	"
                        src={anime4}
                        alt="anime4"
                    />
                    <img
                        className="h-[50%] origin-center rotate-[-10deg] absolute brightness-50	"
                        src={anime3}
                        alt="anime3"
                    />
                    <img
                        className="h-[50%] origin-center rotate-[10deg] absolute brightness-50	"
                        src={anime2}
                        alt="anime2"
                    />
                    <img
                        className="h-[50%] origin-center absolute ease-in duration-300 hover:scale-110 brightness-50	"
                        src={anime1}
                        alt="anime1"
                    />
                    <div className='absolute h-[65vh] flex flex-col items-center justify-between'>
                        <h1 className="mt-[15%] mb-[2rem] text-white font-bold	text-7xl not-italic flex text-center sm:justify-center font-montserrat">
                            Best manga reader
                        </h1>
                        <Button/>
                    </div>
                </div>
            </div>
        </div>
    )
}
