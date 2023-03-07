import React, { useState, useEffect} from 'react';

import { Loader, Card, FormField } from '../components';

const RenderCards = ({ data, title}) => {
  if (data?.length > 0) { 
    return data.map((post) => <Card key={post._id} {...post} />)
  }

  return (
    <h2 className='font-medium text-[#4b5563] text-[16px]'>
      {title}</h2>
  )
}

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [allposts, setAllPosts] = useState([]);

  const [searchText, setSearchText] = useState('apple');
  return (
    <section className="max-w7x1 mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Lets Shuffle!</h1>
        <p className='mt-2 text-[#4b5563] text-[16px]'>Shuffle: Where words meet art, powered by DALL-E AI.</p>
      </div>

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
              data={[]}
              title="No posts found" 
              />
          )}
        </div>
        </>  
        )}
        </div>
    </section>
  )
}

export default Home
