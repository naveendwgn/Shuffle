import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';


import { Home, CreatePost } from './views';

const App = () => {
  return (
    <BrowserRouter>
       <header className="w-full flex justify-between items-center bg-[#FBFCFC] sm:px-8 px-4 py-2 ">
        <Link to="/">
           <h1 className=" text-2xl font-semibold text-[#000000]" >Shuffle</h1> 
        </Link>

        <Link to="/create-post" className="font-medium text-xl text-[#000000] px-4 py-2">
          Create
          </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#FBFCFC] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;