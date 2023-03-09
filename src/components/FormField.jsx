import React from 'react'

const FormField = ({ LabelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
      <label
        htmlFor={name}
        className='block text-sm font-medium text-[#373b42]'>
        {LabelName}
        </label>
        {isSurpriseMe && (
          <button
            type='button'
            onClick={handleSurpriseMe}
            className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-md text-[#373b42]'>
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='w-full px-4 py-2 border border-[#ECECF1] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ECECF1] focus:border-transparent'
        />
    </div>
  )
}

export default FormField
