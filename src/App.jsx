import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';


import { Home, CreatePost } from './views';

const App = () => {
  return (
    <BrowserRouter>
       <header className="w-full flex justify-between items-center bg-[#000000f1] sm:px-8 px-4 py-3 border-b border-b-gray-200">
        <Link to="/">
           <h1 className="font-sans text-2xl font-semibold text-slate-50" >Shuffle</h1> 
        </Link>

        <Link to="/create-post" className="font-inter font-medium  text-white px-4 py-2">
          Create
          </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;