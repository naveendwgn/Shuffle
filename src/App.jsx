import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';


import { Home, CreatePost, History } from './views';

const App = () => {
  return (
    <BrowserRouter>
       <header className="w-full flex items-center bg-[#1E1C1C] sm:px-8 px-4 py-2">
          <Link to="/" className="mr-auto">
            <h1 className="text-2xl text-[#ffffff]">Shuffle</h1>
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
      <main className="sm:p-8 px-4 py-8 w-full bg-[#1E1C1C] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
        </main>
          <footer className="w-full bg-[#1E1C1C] py-4 px-4 text-center text-[#1b1719]">
            <p className="text-sm text-white">© 2023 Shuffle. All rights reserved.</p>
          </footer>
    </BrowserRouter>
  );
}

export default App;