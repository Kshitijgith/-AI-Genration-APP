import React from 'react'

const Form = ({Labelname,type,name,placeholder,value,handlechange,isSurpriseMe,HandleSurpriseme}) => {
  return (
    <div className='h-full w-full flex flex-col items-center'>
        <label htmlFor={name} className='block text-sm font-medium text-black'>
            {Labelname}
        </label>
        {isSurpriseMe&&<button type='button' onClick={HandleSurpriseme} className=' h-50p w-40p bg-gray-400 rounded-2xl'>Surprise Me</button>}
        <input  type={type}
         id={name}
         name={name}
          placeholder={placeholder} 
          className='h-full w-full text-black'
          value={value}
          onChange={handlechange}
          required
          
          />
          
    </div>
  )
}

export default Form