import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';


import { Home, CreatePost, History } from './views';

const App = () => {
  return (
    <BrowserRouter>
       <header className="w-full flex items-center bg-[#000000] sm:px-8 px-4 py-2">
          <Link to="/" className="mr-auto">
            <a href='https://shuffle-eosin.vercel.app/'>
            <h1 className="text-2xl text-[#ffffff]"
            >Shu<span class="text-[#ff4545]">ff</span>le</h1>
            </a>
          </Link>
          <div className="ml-auto flex">
            <Link to="/history" className="text-lg text-[#ffffff] px-5 py-2 border rounded-2xl mr-2">
              History
            </Link>
            <Link to="/create-post" className="text-lg text-[#ffffff] px-5 py-2 border rounded-2xl">
              Create
            </Link>
          </div>
        </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#000000] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
        </main>
          <footer className="w-full bg-[#000000] py-4 px-4 text-center text-[#1b1719]">
            <div className="flex flex-col items-center">
            <p className="text-sm text-white">Powered by <a className=' text-sm font-semibold text-[#ff4545]'
            href="https://openai.com/">Open AI</a> © 2023 Shuffle.</p>
            <p className="text-sm text-white">Made with ❤️ by <span className='text-[#ff4545]'>Naveen Dewangan</span></p>
            </div>
          </footer>
    </BrowserRouter>
  );
}

export default App;