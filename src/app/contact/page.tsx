import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-16 pt-28">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
          We love to hear from our community! If you have any questions,
          feedback, or partnership inquiries, feel free to reach out to us. Our
          team is here to help you with any concerns you might have. Use the
          form below, and we will get back to you as soon as possible.
        </p>

        <div className="grid md:grid-cols-2 gap-12 bg-gradient-to-r from-[#F29C32] to-[#f8a56b] p-8 rounded-xl shadow-lg">
          <div className="flex flex-col justify-center items-center space-y-6 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Location
            </h2>
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_URL"
                frameBorder="0"
                style={{ border: 0 }}
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center space-y-6 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Please fill out the form below, and we will get back to you shortly!
            </p>

            <form
              action="#"
              method="POST"
              className="space-y-6 w-full max-w-lg"
            >
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 bg-transparent rounded-md"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 bg-transparent rounded-md"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border border-gray-300 bg-transparent rounded-md"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 bg-transparent rounded-md"
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

        <div className="mt-12 bg-[#F29C32] text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Need Immediate Help?</h2>
          <p className="text-lg mb-4">
            Our support team is available 24/7. Reach out through the contact
            form or use the information below to contact us directly.
          </p>
          <div className="flex space-x-8 justify-center">
            <div className="text-lg">
              <p className="font-semibold">Email:</p>
              <p className="text-white">support@blogsite.com</p>
            </div>
            <div className="text-lg">
              <p className="font-semibold">Phone:</p>
              <p className="text-white">+1 123-456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
