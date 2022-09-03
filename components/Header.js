import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {useRef} from 'react'
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';
function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if (!term) return;
        router.push(`search?term=${term}`)
    }

  return (
      <header className='sticky top-0 bg-white'>
          <div className='flex w-full p-6 items-center'>
              <Image
              src="/google.png"
              height={30}
              width={80}
              onClick={()=>router.push('/')}
              className="cursor-pointer"
          /> 
          <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
              <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-500 cursor-pointer transition
              duration-100 transform hover:scale-125 sm:mr-3"
              onClick={()=>(searchInputRef.current.value="")}
              viewBox="0 0 20 20" fill="currentColor">
              <path  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 mr-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 mr-3 text-blue-500 hidden sm:inline-flex" viewBox="0 0 20 20" fill="currentColor">
            <path  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"  />
              </svg>

            <button hidden type='submit' onClick={search}>Search</button>
              
              </form>
              <Avatar url="https://images.unsplash.com/photo-1657927869919-0f36cf2be427?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" className="ml-auto"/>
          </div>
          {/* Header Options*/}
         <HeaderOptions/> 
          
    </header>
  )
}

export default Header