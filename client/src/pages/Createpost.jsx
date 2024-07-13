import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import preview from '../assets/preview.png'
import Form from '../components/Form'
import Loader from '../components/Loader'
import { Getrandomprompt } from '../utils'

const Createpost = () => {
  const Navigate=useNavigate();
  const [form,setform]=useState({
    name :'',
    photo:'',
    promt :''
  })
  const [loading,setloading]=useState(false);
  const [genrating,setgenrating]=useState(false);
  const HandleSubmit=()=>{

  }
  const Handlechange =(e)=>{
    setform({ ...form,[e.target.name]:e.target.value})
  }
  const HandleSurpriseme=()=>{
const genrateprompt=Getrandomprompt(form.promt);
setform({...form,promt:genrateprompt})
  }
  const genrateimage=async()=>{

   
    try{
      if(form.promt){
        setgenrating(true);
      }
      else{
        alert('plese enter a prompt')
      }
    
       const response=await fetch('http://localhost:4000/api/dalliroutes/getimage',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({prompt:form.promt})

       })
       const data=await response.json();
       setform({...form, photo: `data:image/jpeg;base64,${data.photo}`});
    }
    catch(err){
      console.log(err)
    }
    finally{
      setgenrating(false);
    }

   }
  
  const Share=()=>{

  }
  return (
    <section className='w-full h-full items-center flex flex-col'>
            <div className='h-20p w-full xl:w-full xl:text-9xl  bg-slate-50'>
        <h1 className="font-extrabold text-black sm:text-4xl md:text-6xl xl:text-9xl lg:text-7xl"> The Community showcase</h1>
        <p className='text-5xl sm:text-2xl  sm:text-start text-center font-semibold xl:text-5xl'> __Genrate wide range of images with our ai</p>
      </div>
      <form className='w-full h-70p flex-col flex items-center' onSubmit={HandleSubmit}>
         <div className='h-10p sm:w-80p md:w-60p xl:w-50p'>
         <Form   Labelname='Your Name' type='text' name='name' placeholder='name'
          value={form.name} handlechange={Handlechange}/>
         </div>
         <div className='h-20p w-80p'><Form Labelname='prompt' type='text' name='prompt' placeholder='an astronaut lounging in a tropical resort in space,'
          value={form.promt} handlechange={Handlechange} isSurpriseMe HandleSurpriseme={HandleSurpriseme}/></div>
          <div className='h-50p w-30p bg-slate-400'>
            
            {Form.photo?<img className='h-full w-full ' src={Form.photo}/>:<></>}
            {genrating&&<div className='h-full w-full flex  justify-center items-center '>
              <Loader/>
              </div>}
              {genrating?<></>:<img src={preview} className='h-full w- full bg-contain'/>}
          </div>
          <div className='h-10p w-30p bg-slate-300 '>
            <button className='h-full w-full md:text-1xl  sm:text-1xl lg:text-3xl bg-lime-400' type='button' onClick={genrateimage}>
              {genrating?'Genrating':'Genrate Image'}
            </button>
          </div>
        <div className='h-20p w-30p flex flex-col items-center'>
          <p className='text-2xl'> Share with Community</p>
          <button className='h-90p w-full bg-blue-500 text-2xl' onClick={Share}>Share</button>
        </div>
      </form>
    </section>
  )
}

export default Createpost