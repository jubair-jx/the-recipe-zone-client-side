import React, { useContext, useState } from "react";

import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import "../Register/Register.css";
import { AuthContext } from "../../../Providers/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, user } = useContext(AuthContext);

  const [error, setError] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const mail = form.email.value;
    const pass = form.password.value;
    const picUrl = form.photourl.value;

    if (pass.length < 6) {
      setError("Please Enter more than 6 Character Password");
      toast.error("Please enter 6 Character Password", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    createUser(mail, pass)
      .then((result) => {
        result.user.displayName = name;
        result.user.photoURL = picUrl;
        setError("");
        form.reset();
      })
      .catch((err) => console.log(err));
  };
  console.log(error);
  return (
    <section className=" pt-5 register-banner">
      <div className="flex flex-col items-center justify-center px-4 py-4  mx-auto ">
        <a
          href="#"
          className="flex gap-2 items-center mb-6 text-2xl font-semibold text-gray-900 "
        >
          <img className="w-10" src={Logo} alt="" />
          <h2 className="text-lg items-center  font-bold">The Recipe Zone</h2>
        </a>
        <div className="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700">
          <div className="p-6 text-gray-800 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign Up in to your account
            </h1>
            <form
              onSubmit={handleFormSubmit}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Name
                </label>
                <input
                  type="name"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Mail Address"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Photo URL
                </label>
                <input
                  type="text"
                  name="photourl"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Photo URL..."
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password...."
                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <p className="text-red-600 text-sm">{error}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>

                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className=" ">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full  bg-orange-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign Up
              </button>
              <p className="text-center mb-0">Or</p>

              <p className="text-sm font-light  ">
                Already have a Account.?{" "}
                <Link
                  to="/login"
                  className="font-medium  text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign In Now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
