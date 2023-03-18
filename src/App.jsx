import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';


import { Home, CreatePost } from './views';

const App = () => {
  return (
    <BrowserRouter>
       <header className="w-full flex justify-between items-center bg-[#efeae3] sm:px-8 px-4 py-2 ">
        <Link to="/">
           <h1 className=" text-2xl font-semibold text-[#1b1719]" >Shuffle</h1> 
        </Link>

        <Link to="/create-post" className="font-medium text-xl text-[#1b1719] px-4 py-2">
          Create
          </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#efeae3] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
        </main>
          <footer className="w-full bg-[#efeae3] py-4 px-4 text-center text-[#1b1719]">
            <p className="text-sm">© 2023 Shuffle. All rights reserved.</p>
          </footer>
    </BrowserRouter>
  );
}

export default App;