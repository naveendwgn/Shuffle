import React, { useState, useEffect} from 'react';
import { useNavigate} from 'react-router-dom';

import { Loader, Card, FormField } from '../components';
import CreatePost from './CreatePost';

const RenderCards = ({ data, title}) => {
  if (data?.length > 0) {
    return (
      data.map((post, i) => <Card key={post + i} {...post} />)
    );
  }

  return (
    <h2 className='font-medium text-[#4b5563] text-[16px]'>
      {title}</h2>
  )
}

function History() {

  const [loading, setLoading] = useState(false);
  const [allposts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState('');
  const [SearchedResults, setSearchedResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/api/v1/post', {
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

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allposts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.prompt.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedResults(searchResult);
      }, 500),
    );
  };


  return (
    <div>
    <div className="mt-2">
    <FormField
    LabelName="Search through history"
    type="text"
    placeholder="Search"
    name="text"
    value={searchText}
    handleChange={handleSearchChange}
    />
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
          data={SearchedResults}
          title="No results found" 
          /> 
      ) : (
        <RenderCards 
          data={allposts}
          title="No posts found" 
          />
      )}
    </div>
    </>  
    )}
    </div>
   </div>
  )
}

export default History