import React, { createRef } from "react";
import Pdf from "react-to-pdf";

const ref = createRef();
const Blog = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <h1 className=" relative text-center sm:text-9xl text-3xl md:text-4xl font-bold pt-6">
            Blogs
          </h1>
        </div>
        <div className="mt-4 grid md:grid-cols-3 lg:grid-cols-3  sm:grid-cols-1 gap-6 px-16 py-10">
          <div className="mx-auto">
            <a
              ref={ref}
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Tell us the differences between uncontrolled and controlled
                components...?
              </h5>
              <p className="mb-2 text-gray-800 font-lg dark:text-gray-800">
                In React, form components can be either controlled or
                uncontrolled, for Example
                <ol className="list-decimal mt-5">
                  <li>
                    Controlled Components: In controlled components, the state
                    of the component is managed by React. This means that the
                    data displayed in the component is bound to the component's
                    state,
                  </li>
                  <li className="mt-5">
                    Uncontrolled Components: In uncontrolled components, the
                    state of the component is managed by the browser. The data
                    displayed in the component is not bound to the component's
                    state,
                  </li>
                </ol>
              </p>
              <Pdf targetRef={ref} filename="Blog-1">
                {({ toPdf }) => (
                  <button
                    className="text-center px-3 py-1  text-white rounded-lg bg-green-500"
                    onClick={toPdf}
                  >
                    Download PDF
                  </button>
                )}
              </Pdf>
            </a>
          </div>
          {/*============ Second Card-=========== */}
          <div className="mx-auto">
            <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                How to validate React props using PropTypes....?
              </h5>
              <div>
                <p className="mb-2 text-gray-800 font-lg dark:text-gray-800">
                  To validate React props using PropTypes, you can follow these
                  steps
                  <ol className="list-decimal mt-5">
                    <li>
                      Install the PropTypes library by running npm install
                      prop-types in your project directory.
                    </li>
                    <li className="mt-5">
                      Import the PropTypes library at the top of your component
                      file like this: import PropTypes from 'prop-types';
                    </li>
                    <li className="mt-5">
                      Define the propTypes object within your component class
                      and specify the type and validation rules for each prop.
                    </li>
                  </ol>
                </p>
              </div>
              <Pdf targetRef={ref} filename="Blog-2">
                {({ toPdf }) => (
                  <button
                    className="text-center px-3 py-1  text-white rounded-lg bg-green-500"
                    onClick={toPdf}
                  >
                    Download PDF
                  </button>
                )}
              </Pdf>
            </a>
          </div>
          {/* =============Third Card ===============*/}
          <div className="mx-auto">
            <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Tell us the difference between nodejs and express js.....?
              </h5>
              <div>
                <p className="mb-2 text-gray-800 font-lg dark:text-gray-800">
                  Node.js and Express.js are two different technologies that are
                  commonly used in web development. Here are some of the key
                  differences between the two:
                  <ol className="list-decimal mt-5">
                    <li>
                      Node.js is a runtime environment for executing JavaScript
                      code outside of a web browser. It allows developers to
                      write server-side applications in JavaScript. On the other
                      hand, Express.js is a web framework for Node.js.
                    </li>
                    <li className="mt-5">
                      Node.js provides a set of core modules that can be used to
                      build a variety of applications. Express.js builds on top
                      of Node.js and provides additional features
                    </li>
                  </ol>
                </p>
              </div>
              <Pdf targetRef={ref} filename="Blog-3">
                {({ toPdf }) => (
                  <button
                    className="text-center px-3 py-1  text-white rounded-lg bg-green-500"
                    onClick={toPdf}
                  >
                    Download PDF
                  </button>
                )}
              </Pdf>
            </a>
          </div>
          {/* =================Fourth Card============== */}
          <div className="mx-auto">
            <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                What is a custom hook, and why will you create a custom hook?
              </h5>
              <div>
                <p className="mb-2 text-gray-800 font-lg dark:text-gray-800">
                  In React, a custom hook is a JavaScript function that starts
                  with the use keyword and follows the standard React Hook
                  rules. It allows you to extract and reuse some stateful logic
                  from one or more components. Custom hooks are not part of the
                  React API, but rather a convention that allows developers to
                  write reusable code.
                </p>
              </div>
              <Pdf targetRef={ref} filename="Blog-4">
                {({ toPdf }) => (
                  <button
                    className="text-center px-3 py-1  text-white rounded-lg bg-green-500"
                    onClick={toPdf}
                  >
                    Download PDF
                  </button>
                )}
              </Pdf>
            </a>
          </div>
        </div>
        <div className="mb-10"></div>
      </div>
    </div>
  );
};

export default Blog;
