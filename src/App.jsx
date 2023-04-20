import Logo from "./assets/images/Logo.png";
import anime1 from "./assets/images/anime1.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black sm:bg-orange-500">
        <nav className="h-[10vh] flex justify-between p-4">
          <button className="contents">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <img src={Logo} alt="" />
        </nav>
        <main>
          <div className="h-screen flex">
            <div className="bg-white h-[100%] w-[50%] rounded-full bg-gradient-to-r from-black to-[#15803d] blur-[115px]"></div>
            <div className="bg-red-500 h-[100%] w-[50%] rounded-full bg-gradient-to-r from-black to-indigo-600 blur-[115px]"></div>
            <div className="h-[100vh] w-[100vw] absolute">
              <div className="flex justify-center align-center">
              <img src={anime1} alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              </div>
            </div>
          </div>
          <div className="h-[80vh] mt-[10vh] bg-MangasHome bg-no-repeat	fit-contain bg-center flex justify-center align-center ">
            <div className="text-center flex flex-col justify-center w-4/5">
              <h1 className="text-white font-semibold	text-5xl not-italic">Your favourite manga reader 😏</h1>
              <p className="text-white font-normal text-base not-italic">Is an exceptional app for all manga lovers. With a wide range of titles available, from classics to the latest releases, this app is perfect for those who want to read manga anytime, anywhere.</p>
              <button class="flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-[5px] text-white text-center py-[0.5rem] px-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-white absolute left-[10px]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <span class="text-base w-[100%]">Search a mangas</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;