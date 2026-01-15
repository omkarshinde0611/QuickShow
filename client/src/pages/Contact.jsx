import React from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-28 pb-20 px-6 md:px-16 lg:px-36 bg-black text-gray-200">
      
      {/* Header */}
      <div className="max-w-5xl mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Have a question, feedback, or need support?  
          Reach out to us and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-6xl">

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-medium text-white mb-6">
            Get in Touch
          </h2>

          <div className="space-y-6 text-gray-400">
            
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-primary" />
              <span>+1-234-567-890</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-primary" />
              <span>quickshow@example.com</span>
            </div>

          </div>

          <p className="mt-8 text-gray-400 leading-relaxed">
            Whether you’re facing an issue with bookings or have suggestions
            to improve the platform, we’re always open to hearing from you.
          </p>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-medium text-white mb-6">
            Send a Message
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-gray-200 focus:outline-none focus:border-primary"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-gray-200 focus:outline-none focus:border-primary"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-gray-200 focus:outline-none focus:border-primary resize-none"
            />

            <button
              type="submit"
              className="px-6 py-3 bg-primary hover:bg-primary-dull transition rounded-md font-medium text-black"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};

export default Contact;
