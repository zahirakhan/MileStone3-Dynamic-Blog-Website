import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="text-mytext body-font px-10 bg-white fixed top-0 left-0 right-0 z-20">
        <div className="container bg-white mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
      
          <div className="flex items-center">
            <img
              src="logo.png"
              alt="Logo"
              className="w-30 h-16"
            />
          </div>

       
          <nav className="md:ml-auto flex flex-wrap items-center text-lg font-normal cursor-pointer justify-center">
            <Link href={'/'} className="mr-5 hover:text-myButton relative group">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px]  bg-myButton transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href={'/blogs'} className="mr-5 hover:text-myButton relative group">
              Blogs
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-myButton transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href={'/about'} className="mr-5 hover:text-myButton relative group">
              About
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-myButton transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href={'/contact'} className="mr-5 hover:text-myButton relative group">
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-myButton transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
          
          <Link
            href="/create"
            className="bg-[#F29C32] text-white px-4 py-2 rounded-md font-medium hover:bg-[#333333] transition"
          >
            Create Blog
          </Link>
        </div>
        </div>
        
      </header>
    </div>
  )
}

export default Header
