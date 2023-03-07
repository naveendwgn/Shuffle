import React, { useState, useEffect} from 'react'

import { Loader, Card, FormField } from '../components'

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [allposts, setAllPosts] = useState([]);

  return (
    <section className="max-w7x1 mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Lets Shuffle!</h1>
        <p className='mt-2 text-[#4b5563] text-[16px]'>Shuffle: Where words meet art, powered by DALL-E AI.
</p>
      </div>
    </section>
  )
}

export default Home
