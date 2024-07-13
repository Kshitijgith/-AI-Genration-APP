import React from 'react'
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'
import Createpost from './pages/Createpost'
import Home from './pages/Home'
import logo from './assets/logo.svg'
const App = () => {
  return (
    <BrowserRouter>
    <div className='h-screen w-full bg-white flex flex-col'>
    <header className='w-full h-10p flex justify-between items-center bg-white sm:px-8 px-5 py-5 border-b border-black'>
    <Link to ="/"><img src={logo} className='h-50p w-50p flex justify static items-center'></img></Link>
    <Link to ="/createpost " className='h-90p w-20p sm:w-30p'><button className='h-full w-full  sm:text-1xl  text-2xl bg-slate-300 '>Create</button></Link>
    </header>
    <main className='h-90p w-full flex flex-col overflow-y-auto bg-slate-200'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/createpost" element={<Createpost/>}/>
    </Routes>
   </main>
    </div>
    
   
    </BrowserRouter>
   
  )
}

export default App