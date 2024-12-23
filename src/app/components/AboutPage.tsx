


import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <section id='about' className="text-gray-600 min-h-[97vh] h-full body-font overflow-hidden mb-16 mt-10 bg-white">
   <h1 className='mx-auto flex justify-center items-center pt-4 text-3xl font-bold text-black'>About us</h1>
   <p className='md:max-w-3xl max-w-2xl text-center mx-auto py-2'>A platform that empowers creators, writers, 
    and bloggers to share their stories with the world. Our mission is to simplify the blog publishing process, 
    offering a seamless, intuitive, and engaging experience for both seasoned writers and new bloggers</p>
    <div className="container px-5 py-24 mx-auto">
      
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <Image
        height={600}
        width={600}
          alt="blog"
          className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src={"/bloghero.jpg"}
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">
            OUR BLOGS
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
          A Platform Built for Creators
          </h1>
          <div className="flex mb-4">
            <span className="flex items-center">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 text-[#ff7f00]"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4  text-[#ff7f00]"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 text-[#ff7f00]"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 text-[#ff7f00]"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 text-[#ff7f00]"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
           
            </span>
             
          </div>
          <p className="leading-relaxed">
          We believe that every creator deserves a space to showcase their ideas and connect with the world. Our platform is designed with
           creators in mind—whether you're a writer, photographer, artist, or influencer. 
           We provide the tools and features you need to easily publish and share your content with a global audience.
          </p>
          <p className='leading-relaxed pt-5'>
          With intuitive design, customizable themes, and powerful SEO tools, our platform makes it 
          simple for creators to focus on what matters most: their craft. We give you the freedom to create, 
          
          share, and grow, all in one place. Whether you're just starting your journey or looking to elevate your existing blog, we have got everything you need to succeed.
          </p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
             
            
          </div>
        <Link href={'/blogs'} >  <button className='px-10 py-2 text-lg font-medium bg-[#ff7f00] hover:bg-[#333333] transition text-white  w-full md:w-40'>Blogs </button></Link>
        </div>
      </div>
    </div>
  </section>
  

   
  )
}

export default AboutPage