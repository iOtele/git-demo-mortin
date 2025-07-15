import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer
      className="bg-faded-secondary flex flex-col   p-8
   mx-auto py-14 px-[8%] sm:px-[12%] font-Poppins   bg-cover bg-right  w-full  "
    >
      <div className="container mx-auto flex flex-wrap justify-between px-6">
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <img src={logo} alt="Company Logo" className="w-20 md:w-24 mb-3" />
          <p>4 Mambolo Street, Wuse Zone 2, Abuja 900288.</p>
          <div className="flex space-x-4 mt-3">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-gray-600 hover:text-yellow-400 bg-secondary-color text-xl"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-gray-600 hover:text-yellow-400 bg-secondary-color  text-xl "
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-gray-600 hover:text-yellow-400 bg-secondary-color text-xl"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-gray-600 hover:text-yellow-400 bg-secondary-color text-xl"
              />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Call Us</h3>
          <p>
            Front desk:
            <a href="tel:+234-817-4300-051" className="text-blue-500">
              +234-817-4300-051
            </a>
          </p>
          <p>
            Operations:
            <a href="tel:+234-908-7302-031" className="text-blue-500">
              +234-908-7302-031
            </a>
          </p>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Links</h3>
          <ul>
            <li>
              <a href="/about" className="hover:text-yellow-400">
                About us
              </a>
            </li>
            <li>
              <a href="/mortgageCalculator" className="hover:text-yellow-400">
                Mortgage Calculator
              </a>
            </li>
            <li>
              <a href="/contactform" className="hover:text-yellow-400">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">Reach out to Us</h3>
          <p>
            For complaints or concerns, kindly send an email to
            <a href="mailto:info@mortln.com" className="text-blue-500">
              {" "}
              info@mortln.com
            </a>
            or call any of our customer service lines.
          </p>
        </div>
      </div>

      <div className="mt-20  pt-4 flex flex-col md:flex-row items-center justify-between px-6">
        <p>&copy; {new Date().getFullYear()}, Mortln. All Rights Reserved.</p>
        <p>
          <a href="/privacy" className="hover:text-yellow-400">
            Privacy Policy
          </a>
      { " "}
          <a href="/terms" className="hover:text-yellow-400">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
