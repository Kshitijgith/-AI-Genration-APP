import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Cards from '../components/Cards'
import Form from '../components/Form'
import Loader from '../components/Loader'
const Rendercards=({data,title})=>{
if(data.length>0){return 
  data.map((post)=><Card key={post.id} {...post}/>)}

  return(
  <div className='h-20 w-20'>{title}</div>
)
}

const Home = () => {
  const [loading,setloading]=useState(false);
  const [post,setpost]=useState(null);
  const [text,settext]=useState();

  return (
    <section className='h-full w-full flex flex-col items-center '>
      <div className='h-30p w-full xl:w-full xl:text-9xl  bg-slate-50'>
        <h1 className="font-extrabold text-black sm:text-4xl md:text-6xl xl:text-9xl lg:text-7xl"> The Community showcase</h1>
        <p className='text-6xl sm:text-2xl  sm:text-start text-center font-semibold'>genrate wide range of images with our ai</p>
      </div>
      <div className='h-40p w-full bg-slate-100'>
        <Form/>
        {loading?<div className='h-20 w-40 '><Loader/></div>:<></>}
    {text?<div className='h-10 w-40 text-black '>Search  for{text}</div>:<></>}
    <div className='h-60 w-96 grid  lg:grid-cols-4 sm:grid-cols-3'>
      {text?<Rendercards data={[]} title='post found' />:
      // <rendercards data={[]} title=" found" />
      <Rendercards data={[]} title='post not found' />
      }
    </div>
      </div>

    
    </section>
  )
}

export default Home