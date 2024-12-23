"use client";

import Link from "next/link";
import React from "react";
 export  interface IData {
  id:number;
  title: string;
  image?: string | null;
  description: string;
  author: string;
}
// blogs
 export  const blogs :IData[] = [
  {
    id: 1,
    title: "The Rise of Artificial Intelligence",
    author: "Salina Smith",
    description:'Artificial Intelligence (AI) has come a long way from being a concept in science fiction to becoming an integral part of our daily lives',

    image: "/blog1-AI.jpg",
  },
  {
    id: 2,
    title: "5 Must-Have Apps for Productivity in 2024",
    author: "John Smith",
    description:
      "Staying productive in todays fast-paced world can be challenging, but the right tools can make all the difference With countless apps available, finding the ones that truly enhance productivity is essential. In 2024,",
    image: "/blog2-Apps.jpg",
  },
  {
    id: 3,
    title: "The Future of Quantum Computing",
    author: "Julis Brown",
    description:
      "Quantum computing, once a theoretical concept confined to academic research, has now become one of the most exciting and transformative fields of technology.",
    image: "/blog4-CC.jpg",
  },
  {
    id: 4,
    title: "The Power of Mindfulness",
    author: "Gabriel Cruise",
    description:
      "In todays fast-paced world, where distractions abound and stress levels are ever-increasing, mindfulness has emerged as a powerful tool to bring calm, focus, and balance to our lives",
    image: "/blog4-Mind.jpg",
  },
  {
    id: 5,
    title: "Plant-Based Diets",
    author: "Alizabeth Raef",
    description:
      "Plant-based diets offer a wealth of health benefits and contribute to a more sustainable future. By incorporating more plant-based foods into your diet, you can improve your well-being,",
    image: "/blog5-Plant.jpg",
  },
  {
    id: 6,
    title: "Exercises for a Healthier Lifestyle",
    author: "Sam Doe",
    description:
      "Exercise is a cornerstone of a healthy lifestyle. It helps improve physical health, boosts mental well-being, and contributes to a long, fulfilling life. Whether youre looking to improve cardiovascular",
    image: "/blog6-Health.jpg",
  },
  
];

const BlogsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <h2 className="text-4xl font-bold p-2 mt-7 text-myHead">BLOGS </h2>

      <p className="max-w-4xl text-center px-6">
      This space is dedicated to sharing insightful articles, inspiring stories, and valuable tips across a wide range of topics. Whether you're here to learn, explore, or simply enjoy a good read, our blog has something for everyone
      </p>
      <section className="text-myHead body-font ">
        <div className="felx justify-center items-center p-5 -mb-10">
          <ul className="flex justify-center items-center lg:space-x-10 md:space-x-8 space-x-2 text-lg font-medium  ">
            <li className="px-3 py-2 border border-[#F29C32] rounded-xl">Fitness</li>
            <li className="px-3 py-2 border border-[#F29C32] rounded-xl">Health</li>
            <li className="px-3 py-2 border border-[#F29C32] rounded-xl">Arts</li>
            <li className="px-3 py-2 border border-[#F29C32] rounded-xl">Technology</li>
          </ul>
        </div>
        <div className="container px-5 py-24 mx-auto  ">
          <div className="flex flex-wrap -m-4 ">
            {blogs &&
              blogs.map((blog , index) => (
                <div key={blog.id} className="p-4 md:w-1/3 group ">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center group-hover:scale-110 duration-300"
                      src={blog.image}
                      alt="blog"
                    />
                    <div className="p-6  ">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {blog.title}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {blog.author}
                      </h1>
                      <p className="leading-relaxed mb-3 line-clamp-2">
                        {blog.description}
                      </p>
                      <div className="flex items-center flex-wrap ">
                         
                          {index <=9 ?(
                                 <Link

                                 href={`/blogs/${blog.id}`}
                                 className="  inline-flex items-center md:mb-2 lg:mb-0 text-indigo-600"
                               >
                                 Learn More
                                 <svg
                                   className="w-4 h-4 ml-2"
                                   viewBox="0 0 24 24"
                                   stroke="currentColor"
                                   strokeWidth={2}
                                   fill="none"
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                 >
                                   <path d="M5 12h14" />
                                   <path d="M12 5l7 7-7 7" />
                                 </svg>
                               </Link>
                          ):(
                            <div className="text-lg font-normal  text-red-300">
                              description is not availabel
                            </div>
                          )
                          
                          }
                       
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"></span>

                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                          </svg>
                          6
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="mx-auto text-center mt-3">
          <Link href={'/create'}>
       <button className='px-8 py-3 hover:bg-[#333333] text-white bg-[#F29C32] text-lg font-semibold'>Creat Blogs</button>
       </Link>
          </div>
        </div>
       
      </section>

       
    </div>
  );
};

export default BlogsPage;
