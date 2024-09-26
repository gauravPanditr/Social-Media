import React from 'react'

const navbar:React.FC = () => {
  return (
      <nav className='w-full h-14 flex text-white items-center bg-slate-600 justify-between md:px-4'>
      <div>Linux
      </div>
      <div><ul className='md:flex'>
        <li  className='mx-[10px]'>home</li> 
        <li  className='mx-[10px]'>contact</li>
        <li className='mx-[10px]'>about us</li>
      </ul></div>
      <div>login/signup</div></nav>
  )
}

export default navbar
