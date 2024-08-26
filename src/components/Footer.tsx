import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Customer Service Section */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Customer Service</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Track Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Returns & Refunds
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Shipping Info
              </a>
            </li>
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h5 className="text-lg font-semibold mb-4">About Us</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                About Jumia
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Make Money with Us Section */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Make Money with Us</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Sell on Jumia
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Become a Sales Consultant
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Become a Logistics Service Partner
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Join the Jumia Affiliate Program
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Email Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Call Us: +123 456 7890
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Follow Us on Social Media
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm">&copy; 2024 Jumia Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};
