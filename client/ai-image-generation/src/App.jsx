import React from 'react'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import {Home, CreatePage} from "./pages"


const App = () => {
  return (
    <>
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 border-b border-b-[#e6ebf4]'>
        <Link to='/' className='w-28 object-contain'>
          <h1 className='font-extrabold text-[#932362] text-[25px]'>Open AI</h1>
        </Link>
        <Link to='/create-post' className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md my-2'>
          Create
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-2 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create-post' element={<CreatePage/>}/>
        </Routes>
      </main>
    </BrowserRouter>
    </>
  )
}

export default App
