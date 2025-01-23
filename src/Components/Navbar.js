import React from 'react';
import myntraLogo from '../assets/logo.png';
import { Link } from "react-router";


export default function Navbar() {
  return (
   <nav className='fixed w-full z-50 top-0 flex h-[80px] shadow-sm bg-white'>
      <div className='w-[10%]'>
        <img className='h-[60px] justify-self-center mt-[10px] ml-[30px]' src={myntraLogo} alt=''/>
      </div>
      <div className='w-[40%] flex flex-row justify-center items-center'>
        <div className='px-[15px] cursor-pointer hover:border-b-4 py-4 hover:border-b-blue-500'>
          <a className='font-bold text-sm' href='#'>MEN</a>
        </div>
        <div className='px-[15px] cursor-pointer hover:border-b-4 py-4 hover:border-b-red-500'>
          <a className='font-bold text-sm' href='#'>WOMEN</a>
        </div>
        <div className='px-[15px] cursor-pointer hover:border-b-4 py-4 hover:border-b-purple-500'>
          <a className='font-bold text-sm' href='#'>KIDS</a>
        </div>
        <div className='px-[15px] cursor-pointer hover:border-b-4 py-4 hover:border-b-pink-500'>
          <a className='font-bold text-sm' href='#'>HOME & LIVING</a>
        </div>
        <div className='px-[15px] cursor-pointer hover:border-b-4 py-4 hover:border-b-green-500'>
          <a className='font-bold text-sm' href='#'>BEAUTY</a>
        </div>
        <div className='px-[15px] cursor-pointer hover:border-b-4 py-4 hover:border-b-yellow-500'>
          <a className='font-bold text-sm' href='#'>STUDIO</a>
        </div>
      </div>
      <div className='w-[35%] flex justify-center items-center relative'>
        <div className='absolute left-[10px]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
        <input className='h-[50%] w-[100%] bg-[#F5F5F6] rounded-md pl-[40px] focus:bg-[white] focus:outline-none focus:border-[2px]' type='text' placeholder='Search for products, brands and many more'/>
      </div>
      <div className='w-[3%]'></div>
      <div className='w-[10%] flex flex-row items-center'>
        <div className='flex-1'>
          <Link to='/login'>
            <div className='flex justify-self-center cursor-pointer bg-transparent'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg> 
            </div>
          </Link>         
          <p className='flex justify-self-center text-[12px] font-bold'>Profile</p>
        </div>
        {/* <div className='flex-1'>
          <div className='flex justify-self-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </div>
          <p className='flex justify-self-center text-[12px] font-bold'>Whislist</p>
        </div> */}
        <div className='flex-1'>
          <div className='flex justify-self-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </div>
          <p className='flex justify-self-center text-[12px] font-bold'>Bag</p>
        </div>
      </div>      
   </nav>
  );
}

