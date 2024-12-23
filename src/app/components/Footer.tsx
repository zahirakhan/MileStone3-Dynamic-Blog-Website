import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 py-8 px-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="text-black font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-myButton">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-myButton">
                  Help Forum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-myButton">
                  Video Tutorials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-myButton">
                  Blogger Buzz
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-4">Developers</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-myButton">
                  Blogger API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-myButton">
                  Developer Forum
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm space-x-4">
            <a href="#" className="hover:text-myButton">
              Terms of Service
            </a>
            <span>|</span>
            <a href="#" className="hover:text-myButton">
              Privacy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-myButton">
              Content Policy
            </a>
          </div>

          <div className="mt-4 md:mt-0">
            <select className="bg-gray-300 text-gray-900 px-2 py-2 focus:outline-none ">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
