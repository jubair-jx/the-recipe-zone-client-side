import React from "react";
import titleImg from "../../../../assets/vector.png";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
const Testimonial = () => {
  return (
    <div>
      <h2 className="text-4xl text-center font-extrabold mt-10">
        Testimonial
        <img className="h-16 w-96 mx-auto" src={titleImg} alt="" />
      </h2>

      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Users Say ....
          </h2>
          <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 mb-4">
                "I absolutely love this recipe website! The recipes are easy to
                follow, and the pictures are so beautiful. I've tried several
                recipes, and they all turned out amazing.!!!"
              </p>
              <FontAwesomeIcon
                className="text-orange-400 ml-2 text-lg"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-orange-400 ml-2 text-lg"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-orange-400 ml-2 text-lg"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-orange-400 ml-2 text-lg"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-orange-400 ml-2 text-lg"
                icon={faStar}
              ></FontAwesomeIcon>{" "}
              (5.00)
              <div className="flex items-center justify-center">
                <img
                  className="w-12 h-12 rounded-full mr-4 mt-5"
                  src="https://randomuser.me/api/portraits/women/32.jpg"
                  alt="Testimonial author"
                />
                <div>
                  <h3 className="text-lg font-bold mt-5">Emma Wilson</h3>
                  <span className="text-gray-600">Toronto, Canada</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 mb-4">
                "I'm not a great cook, but this recipe website has helped me
                improve my skills! The instructions are so easy to follow, and
                the videos are a great touch. so i suggested this website"
              </p>
              <FontAwesomeIcon
                className="text-orange-400 ml-2 text-lg"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-orange-400 ml-2 text-lg"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-orange-400 ml-2 text-lg"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-orange-400 ml-2 text-lg"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-orange-400 ml-2 text-lg"
                icon={faStar}
              ></FontAwesomeIcon>{" "}
              (5.00)
              <div className="flex items-center justify-center mt-5">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src="https://randomuser.me/api/portraits/men/52.jpg"
                  alt="Testimonial author"
                />
                <div>
                  <h3 className="text-lg font-bold">Alex Brown</h3>
                  <span className="text-gray-600">New York, USA</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 mb-4">
                This website has quickly become my go-to for finding delicious
                and easy-to-follow recipes. The user interface is intuitive and
                the recipe pages have all the information I need.
              </p>
              <FontAwesomeIcon
                className="text-orange-400 ml-2 text-lg"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-orange-400 ml-2 text-lg"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-orange-400 ml-2 text-lg"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-orange-400 ml-2 text-lg"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-orange-400 ml-2 text-lg"
                icon={faStarHalf}
              ></FontAwesomeIcon>{" "}
              (4.5)
              <div className="flex items-center justify-center mt-5">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src="https://randomuser.me/api/portraits/women/22.jpg"
                  alt="User profile picture"
                />
                <div>
                  <h3 className="font-bold text-gray-700">Jessica Brown</h3>
                  <span className="text-gray-600">Chattogram, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
