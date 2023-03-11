import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';
 
const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generating, setGenerating] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
      if(form.prompt){
        try {
          setGenerating(true);
          const response = await fetch('https://brick-red-lamb-tux.cyclic.app/api/v1/dalle', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({  prompt: form.prompt }),
        });
        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
        } catch (error) {
          alert(error.message);
        } finally {
          setGenerating(false);
        }
      } else {
        alert('Please enter a prompt');
      }
  }

  const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.name && form.prompt && form.photo) {
          try {
            setLoading(true);
            const response = await fetch('https://brick-red-lamb-tux.cyclic.app/api/v1/post', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(form),
            });
            const data = await response.json();
            if (data.success) {
              navigate('/');
            }
          } catch (error) {
            alert(error);
          } finally {
            setLoading(false);
          }
        } else {
          alert('Please fill all the fields');
        }
  } 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  }

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#151616] text-[32px]">Create</h1>
        <p className='mt-2 text-[#4b5563] text-[16px]'>Add a prompt of your choice or tap surprise me button to generate</p>
      </div>

      <form className="mt-8 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4">
          <FormField
            LabelName="Name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            handleChange={handleChange}
          />
           <FormField
            LabelName="Prompt"
            type="text"
            name="prompt"
            placeholder="an oil painting by Matisse of a humanoid robot playing chess"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className='relative bg-gray-50 border border-gray-200 rounded-md text-grey-900 text-sm focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] w-64 p-3 h-64 flex items-center justify-center'>
            {form.photo ? (
              <img 
              src={form.photo}
              alt={form.prompt}
              className='w-full h-full object-contain rounded-md'
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className='w-full h-full object-contain rounded-md opacity-40'
              />
            )}
            {generating && (
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center rounded-md">
              <Loader />
            </div>
            )}
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}

            className="w-full sm:w-auto py-2.5 px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#0f0f0f] hover:bg-[#ea3e3e] focus:outline-none"
          >
            {generating ? 'Generating...' : 'Generate'}
          </button>
        </div>
      {/* THIS IS FOR SHARING IN THE WILD
        <div className="mt-5">
          <p className='mt-2 text-[#4b5563] text-[16px]'>
            If you want to share the post in the wild you can.
          </p>
          <button
            type="submit"
            className='mt-5 ml-auto w-full sm:w-auto py-2.5 px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#0f0f0f] hover:bg-[#ea3e3e] focus:outline-none'
            >
            {loading ? 'Sharing...' : 'Share in the wild'}
          </button>
        </div>
        */}
      </form> 
    </section>
  )
}

export default CreatePost
