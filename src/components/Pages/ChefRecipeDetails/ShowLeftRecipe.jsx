import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import LazyLoad from "react-lazy-load";
const ShowLeftRecipe = ({ recipe }) => {
  const { recipeName, image, ingredients, cookMethod } = recipe;
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    toast.success(" 😃 You Added Favorite list", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setFavorite(true);
  };
  return (
    <>
      <div className="mt-5">
        <div className="card card-side  md:w-full w-full  glass bg-base-100 shadow-xl rounded-md">
          <LazyLoad>
            <img
              src={image}
              alt="Movie"
              className="w-96 h-56 px-3 py-2 rounded-2xl "
            />
          </LazyLoad>

          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">{recipeName}</h2>
              <button
                disabled={favorite}
                onClick={handleFavorite}
                className="px-2 rounded-lg font-medium text-sm py-1 text-white bg-orange-400"
              >
                favorite
              </button>
            </div>

            <div className="flex mt-2">
              {" "}
              <p className="font-medium">Ingredients :</p>
              <div className="grid md:grid-cols-2 ml-3">
                {ingredients.map((ingre) => (
                  <div className=" flex-1">
                    <ul className="">
                      <li>{ingre}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="">
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
              </div>
              <p className="mt-3">
                {" "}
                <span className="font-medium">Cooking Method</span> :{" "}
                {cookMethod}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowLeftRecipe;
