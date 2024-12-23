import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('globalnetwork.avif')" }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="container mx-auto h-full flex items-center justify-center relative z-10 p-6 sm:px-12 ">
        <div className="flex flex-col md:flex-row w-full h-screen md:h-full max-w-6xl bg-transparent rounded-lg overflow-hidden shadow-lg">
          
          <div className="w-full md:w-1/2 h-60  md:h-full p-4">
            <div className="h-full bg-gray-200 rounded-lg">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_URL"
              
                style={{ border: 0 }}
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-6 bg-transparent flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-semibold text-gray-100 mb-6 text-center md:text-left">
              Contact Us
            </h1>
            <p className="text-white text-sm md:text-base mb-4 text-center md:text-left">
              We value your thoughts, questions, and feedback! Reach out to us using the form, and our team will get back to you.
            </p>
            <form action="#" method="POST" className="space-y-4">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 bg-transparent rounded-md text-white"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 bg-transparent rounded-md text-white"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border border-gray-300 bg-transparent rounded-md text-white"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 bg-transparent rounded-md text-white"
                  rows={6}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#F29C32] text-white font-semibold rounded-md hover:bg-[#333333] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
