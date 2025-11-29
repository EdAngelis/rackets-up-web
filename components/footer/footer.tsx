import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand / Logo Area */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-2xl font-bold tracking-tighter">Rackets Up</h2>
          <p className="text-sm text-gray-400">
            Let's build it together.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h3 className="text-lg font-semibold mb-1">Contact Us</h3>
          <a
            href="mailto:contact@rivertech.com"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <MdEmail className="text-xl" />
            <span>contact@rivertech.com</span>
          </a>
          <a
            href="tel:+5511948589951"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <MdPhone className="text-xl" />
            <span>+55 (11) 9 4858-9951</span>
          </a>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="#"
              aria-label="X"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 border-t border-white/10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} River Tech. All rights reserved.
      </div>
    </footer>
  );
}
