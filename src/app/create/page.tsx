"use client";
import React, { useEffect, useState } from "react";
import { blogs } from "@/app/blogs/page";
import { IData } from "@/app/blogs/page";

const Page = () => {
  const [data, setData] = useState<IData[]>([]);

  const [formData, setFormData] = useState<IData>({
    id: blogs.length++,
    title: "",
    image: null,
    description: "",
    author: "",
  });

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        image: imageUrl,
      }));

      setImageUrl(imageUrl);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.author) {
      alert("Please fill all required fields!");
      return;
    }

    setData((prevData) => [...prevData, formData]);

    const updatedBlogs = [...data, formData];
    localStorage.setItem("blogsData", JSON.stringify(updatedBlogs));

    setFormData({
      id: null,
      title: "",
      image: null,
      description: "",
      author: "",
    });
  };

  useEffect(() => {
    if (data.length > 0) {
      blogs.push(...data);
    }
  }, [data]);

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Create Your Blog And Publish
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Write your research on any topic and publish it here.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="title"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Title
                    </label>
                    <input
                      onChange={handleInputChange}
                      value={formData.title}
                      type="text"
                      id="title"
                      name="title"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="image"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="description"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Description
                    </label>
                    <textarea
                      onChange={handleInputChange}
                      value={formData.description}
                      id="description"
                      name="description"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="author"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Author
                    </label>
                    <input
                      onChange={handleInputChange}
                      value={formData.author}
                      type="text"
                      id="author"
                      name="author"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-[#F29C32] hover:bg-[#333333] border-0 py-2 px-8 focus:outline-none  text-lg"
                  >
                    Publish
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
