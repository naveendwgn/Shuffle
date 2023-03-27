import React from 'react';
import { useNavigate} from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()

  return (
    <section className="max-w7x1 mx-auto">
      <div className= "flex flex-col items-center justify-center mt-28">
        <h1 className="mt-12 font-semibold text-[#fdfdff] text-[70px]">Discover the magic of Shuffle,</h1>
        <h3 className="text-[#ffffff] text-[30px]">the app that turns your words into incredible images.</h3>
        <p className='mt-2 text-[#eeeeee] text-[15px]'>With DALL-E technology, your imagination will be brought to life like never before.</p>
        
        <button className="mt-9 bg-[#ff4545] text-[#ffffff] py-3 px-7 rounded-full hover:bg-[#ea3e3e] focus:outline-none" onClick={() => navigate('/create-post')}>
          Create
        </button>
      </div>
    </section>
  )
}

export default Home;