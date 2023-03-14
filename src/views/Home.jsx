import React, { useState, useEffect} from 'react';

import { Loader, Card, FormField } from '../components';
import CreatePost from './CreatePost';


const RenderCards = ({ data, title}) => {
  if (data?.length > 0) {
    return (
      data.map((post) => <Card key={post._id} {...post} />)
    );
  }

  return (
    <h2 className='font-medium text-[#4b5563] text-[16px]'>
      {title}</h2>
  )
}

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [allposts, setAllPosts] = useState([]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://brick-red-lamb-tux.cyclic.app/api/v1/post', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <section className="max-w7x1 mx-auto">
      <div className= "flex flex-col items-center justify-center mt-28">
        <h1 className="font-bold text-[#1b1719] text-[80px]">Discover the magic of Shuffle,</h1>
        <h3 className="text-[#1b1719] text-[30px]">the app that turns your words into incredible images.</h3>
        <p className='mt-1 text-[#4b5563] text-[15px]'>With DALL-E technology, your ideas will be brought to life like never before.</p>
        <button className='mt-8 bg-[#1b1719] text-[#fff] text-[16px] py-2 px-4 rounded-full'
        onClick={() => navigate('/create-post')}>
        Create</button>
      </div>
{/*
      <div className="mt-16">
        <FormField />
      </div>

      <div className="mt-10">
        { loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
        <>
        {searchText && (
          <h2 className='font-medium text-[#4b5563] text-[16px]'>
            Search results for: <span className="text-[#222328]">{searchText}</span>
          </h2>
        )}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4'>
          {searchText ? (
           <RenderCards 
              data={[]}
              title="No results found" 
              /> 
          ) : (
            <RenderCards 
              data={[allposts]}
              title="No posts found" 
              />
          )}
        </div>
        </>  
        )}
        </div>
*/}
    </section>
  )
}

export default Home;