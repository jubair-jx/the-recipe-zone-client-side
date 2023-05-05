import React from "react";
import titleImg from "../../../../assets/vector.png";
const Contact = () => {
  return (
    <div>
      <section class="mt-6  py-12">
        <h2 class="text-4xl font-bold text-center text-gray-800 ">
          Contact Us
          <img className="h-14 w-96 mx-auto" src={titleImg} alt="" />
        </h2>
        <p class="text-gray-600 text-center md:w-[500px] mx-auto">
          Have a question or want to give feedback? Fill out the form below and
          we'll get back to you as soon as possible.
        </p>
        <div class="mx-auto px-10 py-8 mt-5 bg-gray-100">
          <div class="max-w-2xl mx-auto mb-12"></div>
          <form class="max-w-xl mx-auto">
            <div class="flex flex-wrap -mx-2 mb-4">
              <div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="name"
                >
                  Name
                </label>
                <input
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </div>
              <div class="w-full md:w-1/2 px-2">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter Your Mail"
                />
              </div>
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="message"
              >
                Message
              </label>
              <textarea
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="5"
              ></textarea>
            </div>
            <button
              class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
