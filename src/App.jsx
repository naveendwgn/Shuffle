import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';


import { Home, CreatePost } from './views';

const App = () => {
  return (
    <BrowserRouter>
       <header className="w-full flex justify-between items-center bg-[#1E1C1C] sm:px-8 px-4 py-2 ">
        <Link to="/">
           <h1 className=" text-2xl text-[#ffffff]" >Shuffle</h1> 
        </Link>

        <Link to="/create-post" className="text-lg text-[#ffffff] px-5 py-2 border rounded-2xl">
          Create
          </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#1E1C1C] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
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