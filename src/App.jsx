import Logo from "./assets/images/Logo.png";
import anime1 from "./assets/images/anime1.png";
import anime2 from "./assets/images/anime2.png";
import anime3 from "./assets/images/anime3.png";
import anime4 from "./assets/images/anime4.png";
import MangasHome from "./assets/images/MangasHome.png";
import Footer from "./assets/images/Footer.png";

import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black">
        <nav className="h-[10vh] flex justify-between p-4">
          <button className="contents">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <img src={Logo} alt="" />
        </nav>
        <main id="Home">
          <div className="h-[90vh] flex">
            <div className="h-[60%] w-[50%] rounded-full bg-gradient-to-r from-black to-[#15803d] blur-[115px]"></div>
            <div className="h-[60%] w-[50%] rounded-full bg-gradient-to-r from-black to-indigo-600 blur-[115px]"></div>
            <div className="h-[100vh] w-[100%] absolute top-[30%]">
              <div className="flex justify-center align-center">
                <img className="h-[50%] origin-center rotate-[20deg] absolute" src={anime4} alt="" />
                <img className="h-[50%] origin-center rotate-[-10deg] absolute" src={anime3} alt="" />
                <img className="h-[50%] origin-center rotate-[10deg] absolute" src={anime2} alt="" />
                <img className="h-[50%] origin-center absolute ease-in duration-300 hover:scale-110" src={anime1} alt="" />
              </div>
            </div>
          </div>
          <h1 className="relative mb-[2rem] text-white font-bold	text-7xl not-italic hidden md:flex sm:justify-center font-montserrat">Best manga reader</h1>
          <div class="min-h-[80vh] relative">
            <img src={MangasHome} alt="Imagen" class="w-[100vw] md:w-[40%] md:ml-[8%] object-cover filter brightness-75 md:filter md:brightness-100" />
            <div class="text-center md:text-left absolute top-[3%] left-0 md:left-[-35px] w-[100vw] md:w-[100vw] flex flex-col items-center md:items-end">
              <h1 className="text-white mb-4 font-inter font-semibold text-5xl not-italic w-[70%] md:w-[40%]">Your favourite manga reader 😏</h1>
              <p className="text-white mb-4 font-inter font-normal text-base not-italic w-[70%] md:w-[40%]">Is an exceptional app for all manga lovers. With a wide range of titles available, from classics to the latest releases, this app is perfect for those who want to read manga anytime, anywhere.</p>
              <button class="flex w-[70%] md:w-[40%] mb-4 align-center justify-center bg-white/30 backdrop-blur-sm rounded-[5px] text-white text-center py-[0.5rem] px-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-white absolute left-[10px]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <span class="w-[100%] font-inter font-normal text-base">Search a mangas</span>
              </button>
            </div>
          </div>
        </main>
        <footer className="bg-black text-white">
          <img className="w-[100vw] h-[20vh] rounded-[100%_100%_100%_100%/_0%_0%_100%_100%]" src={Footer} alt="" />
          <div className="flex justify-evenly flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
            <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:justify-start">
              <a className="mx-[0.5rem] md:m-0 font-poppins text-base	font-normal	" href="#Home">Home</a>
              <a className="mx-[0.5rem] md:m-0 font-poppins text-base	font-normal	" href="#Mangas">Mangas</a>
            </ul>
            <div className="flex flex-col justify-center pt-6 lg:pt-0">
              <div className="flex justify-center space-x-4">
                <img className="w-[20vw] sm:w-[10vw]" src={Logo} alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-center pt-6 lg:pt-0">
              <div className="flex justify-center space-x-4">
                <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 fill-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                </a>
                <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 fill-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                </a>
                <a rel="noopener noreferrer" href="#" title="Vimeo" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 fill-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.875 10.063c-2.442 5.217-8.337 12.319-12.063 12.319-3.672 0-4.203-7.831-6.208-13.043-.987-2.565-1.624-1.976-3.474-.681l-1.128-1.455c2.698-2.372 5.398-5.127 7.057-5.28 1.868-.179 3.018 1.098 3.448 3.832.568 3.593 1.362 9.17 2.748 9.17 1.08 0 3.741-4.424 3.878-6.006.243-2.316-1.703-2.386-3.392-1.663 2.673-8.754 13.793-7.142 9.134 2.807z" /></svg>
                </a>
                <a rel="noopener noreferrer" href="#" title="Vimeo" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 fill-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>                </a>
              </div>
              <button className="bg-gradient-to-r from-[#DEE4EA] to-[#F9FCFF] text-black rounded-[4px] p-[8px] flex justify-center">Donate <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-[0.5rem]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;