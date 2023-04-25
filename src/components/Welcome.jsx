import React from 'react'
import ButtonWelcome from '../components/ButtonWelcome'

export default function Welcome() {
    return (
        <div className="text-center md:text-left absolute top-[3%] left-0 md:left-[-35px] w-[100vw] md:w-[100vw] flex flex-col items-center md:items-end">
            <h1 className="text-white mb-4 font-inter font-semibold text-5xl not-italic w-[70%] md:w-[40%]">
                Your favourite manga reader 😏
            </h1>
            <p className="text-white mb-4 font-inter font-normal text-base not-italic w-[70%] md:w-[40%]">
                Is an exceptional app for all manga lovers. With
                a wide range of titles available, from classics
                to the latest releases, this app is perfect for
                those who want to read manga anytime, anywhere.
            </p>
            <ButtonWelcome/>
        </div>
    )
}
