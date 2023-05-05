import React, { useContext, useState } from "react";
import Logo from "../../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import { AuthContext } from "../../../Providers/AuthProvider";
const Login = () => {
  const { signInUser, user, githubSignIn, googleSignIn } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [users, setUsers] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const mail = form.email.value;
    const pass = form.password.value;

    signInUser(mail, pass)
      .then((result) => {
        const signedUser = result.user;
        console.log(signedUser);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const signedUser = result.user;
        console.log(signedUser);
        setUsers(signedUser);
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err));
  };
  const handleGithubLogin = () => {
    githubSignIn()
      .then((result) => {
        const signedUser = result.user;
        console.log(signedUser);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <section className="pt-14 login-banner">
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
                Sign in to your account
              </h1>
              <form
                onSubmit={handleLoginForm}
                className="space-y-4 md:space-y-6"
                action="#"
              >
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Mail..."
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
                    required
                    className=" border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border  border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
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
                <p className="text-red-600 text-sm">{error}</p>
                <button
                  type="submit"
                  className="w-full mt-5 text-md bg-orange-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-center mb-0">Or</p>

                <button
                  onClick={handleGoogleLogin}
                  type="button"
                  className="w-full text-white   border-gray-400  bg-black border-[3px]  focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                >
                  <img
                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                    className="w-8"
                    alt="google logo png suite everything you need know about google newest"
                  />
                  Sign in with Google<div></div>
                </button>
                <button
                  onClick={handleGithubLogin}
                  type="button"
                  className="w-full  text-white bg-black border-[3px] border-gray-400  focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPPlnUnhPRbSLfZr0TctDI3RN7mB7hqw8aqJjMCZaS9NvUQk&s"
                    className="w-8 rounded-full"
                    alt="google logo png suite everything you need know about google newest"
                  />
                  Sign in with Github<div></div>
                </button>

                <p className="text-sm font-light  ">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/register"
                    className="font-medium  text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up Now
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
