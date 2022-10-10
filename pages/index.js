import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import Avatar from '../components/Avatar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null)
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`)
  };

  return (
    <div className='flex flex-col items-center  h-screen'>
      <Head>
        <title>GoogleAt</title>
        <link rel='icon' href=''></link>
      </Head>

      {/*  Header*/}
      <header className='flex w-full p-5 justify-between text-sm  text-gray-700 '>
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        <div className='flex space-x-4 items-center '>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          {/* Icon*/}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          {/* Avatar*/}
          <Avatar url="https://images.unsplash.com/photo-1657927869919-0f36cf2be427?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" />
        </div>
      </header>


      {/* Body */}
      <form className='flex flex-col items-center mt-40 flex-grow w-4/5 '>
        <Image
          src="/google.png"
          width={500}
          height={180}
          alt="logo"
        />

        <div className='flex w-full mt-5 hover-shadow-lg 
        focus-within:shadow-lg max-w-md rounded-full border
         border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
          </svg>

          <input ref={searchInputRef} type="text" className='focus:outline-none flex-grow' />

          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" />
          </svg>
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>Google Search</button>
          <button onClick={search} className='btn'>Im feeling lucky</button>
        </div>
      </form>

      {/*  Footer*/}

      <Footer />



    </div>
  )
}
