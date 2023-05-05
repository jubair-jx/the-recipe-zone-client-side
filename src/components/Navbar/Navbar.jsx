import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { AuthContext } from "../../Providers/AuthProvider";
import ActiveRoute from "../ActiveRoute/ActiveRoute";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const signOutHandler = () => {
    signOutUser()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="relative flex flex-wrap items-center justify-between  bg-[#9873FF0D] lg:pl-32 border-[1px]">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            to="/"
            className="text-xl items-center  font-bold leading-relaxed gap-2 flex mr-10 py-3 whitespace-nowrap uppercase text-black"
          >
            <img className="w-10" src={Logo} alt="" />
            The Recipe Zone
          </Link>
          <button
            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex md:items-center justify-center flex-col lg:flex-row list-none lg:mx-auto ">
            <li className="nav-item">
              <ActiveRoute
                to="/"
                className="px-3 py-2 flex items-center text-xs uppercase font-semibold leading-snug duration-300 text-[#0a0a0a] hover:text-orange-400"
              >
                <i className="fab fa-facebook-square text-lg leading-lg text-[#060505]"></i>
                <span className="ml-2 text-md font-medium">Home</span>
              </ActiveRoute>
            </li>

            <li className="nav-item">
              <Link
                to="/"
                className="px-3 py-2 flex items-center text-xs uppercase font-semibold leading-snug duration-300 text-[#0a0a0a] hover:text-orange-400"
              >
                <i className="fab fa-facebook-square text-lg leading-lg text-[#060505]"></i>
                <span className="ml-2 text-md">Chef</span>
              </Link>
            </li>

            <li className="nav-item">
              <ActiveRoute
                to="/blog"
                className="px-3 py-2 flex items-center text-xs uppercase font-semibold leading-snug duration-300 text-[#0a0a0a] hover:text-orange-400"
              >
                <i className="fab fa-twitter text-lg leading-lg text-[#000000]"></i>
                <span className="ml-2 text-md font-medium">Blog</span>
              </ActiveRoute>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="px-3 py-2 flex items-center text-xs uppercase font-semibold leading-snug duration-300 text-[#0a0a0a] hover:text-orange-400"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-[#0a0a0a] "></i>
                <span className="ml-2 text-md">Contact Us</span>
              </Link>
            </li>

            <div className="lg:ml-72 flex items-center  gap-4">
              <div>
                {user ? (
                  <Link
                    onClick={signOutHandler}
                    className=" text-white  bg-orange-400  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-7 py-2 text-center"
                  >
                    Sign Out
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className=" text-white  bg-orange-400  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-7 py-2 text-center"
                  >
                    Login
                  </Link>
                )}
              </div>
              <div>
                {user?.photoURL ? (
                  <span title={user?.displayName}>
                    <img
                      className="rounded-full w-10 h-10"
                      src={user?.photoURL}
                      alt=""
                    />
                  </span>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
