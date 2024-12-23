import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16 pt-28">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">About Us</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
          Welcome to <span className="text-[#F29C32]">Blog Site</span>, a
          platform dedicated to empowering content creators and writers. We
          strive to provide the best tools for publishing blogs, connecting with
          audiences, and growing a creative community. Our platform is designed
          to make blogging accessible, engaging, and fun for everyone, whether
          youre just starting or a seasoned writer.
        </p>

        <div className="grid md:grid-cols-2 gap-12 bg-gradient-to-r from-[#F29C32] to-[#f8a56b] p-8 rounded-xl shadow-lg">
          <div className="flex flex-col justify-center items-center space-y-6 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-900 text-lg leading-relaxed">
              Our mission is to create a space where content creators can
              express themselves freely. We aim to simplify the blogging
              process, provide insights through analytics, and ensure creators
              have the tools they need to succeed. Our team is committed to
              ensuring that writers feel valued, supported, and motivated to
              publish their content and engage with their audience.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center space-y-6 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-900 text-lg leading-relaxed">
              Our vision is to become a global leader in content creation by
              fostering a vibrant and diverse community of writers. We believe
              that everyone has a unique story to tell, and through our
              platform, we want to help individuals and brands to amplify their
              voices. We are here to shape the future of digital publishing.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Meet the Team
          </h2>
          <div className="flex justify-center space-x-12">
            <div className="text-center">
              <img
                src="/pp.jpg"
                alt="John Doe"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Co-Founder & CEO</p>
            </div>

            <div className="text-center">
              <img
                src="/pp.jpg"
                alt="Jane Smith"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Jane Smith
              </h3>
              <p className="text-gray-600">Co-Founder & CTO</p>
            </div>

            <div className="text-center">
              <img
                src="/pp.jpg"
                alt="Emily Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Emily Johnson
              </h3>
              <p className="text-gray-600">Marketing Manager</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-[#F29C32] text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Join Us Today!</h2>
          <p className="text-lg mb-4">
            Become a part of our growing community of content creators and get
            the support you need to thrive. Lets shape the future of digital
            publishing together.
          </p>
          <button className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
