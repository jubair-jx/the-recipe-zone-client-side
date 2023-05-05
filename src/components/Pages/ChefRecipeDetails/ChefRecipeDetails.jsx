import React from "react";
import { useLoaderData } from "react-router-dom";
import ShowLeftRecipe from "./ShowLeftRecipe";
import "../ChefRecipeDetails/Recipe.css";
import { ToastContainer, toast } from "react-toastify";
import LazyLoad from "react-lazy-load";

const handleFollowBtn = () => {
  toast.success("👋 Following the Chef", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
const ChefRecipeDetails = () => {
  const recipeDetails = useLoaderData();
  const {
    chefName,
    id,
    chefPicture,
    yearsOfExperience,
    numRecipes,
    likes,
    bio,
    recipes,
  } = recipeDetails;
  return (
    <div className="bg-banner">
      <div className="grid md:grid-cols-3 md:px-14 md:py-10 px-2 py-2">
        <div className=" sm:mx-auto mx-auto md:mx-0 mt-5 rounded-lg w-[350px] h-[600px] shadow-2xl border-[1px] border-gray-400 bg-gradient-to-r from-yellow-100 from-10%  to-orange-200 to-90% p-10">
          <LazyLoad height={180}>
            <img
              src={chefPicture}
              alt=""
              className="rounded-full w-96 h-40  mx-auto"
            />
          </LazyLoad>

          <header className=" text-3xl font-extrabold py-4 px-2 text-center">
            {chefName}
          </header>
          <div>
            <ul className="text-gray-700 text-center">
              <p className="text-[14px]">{bio}</p>
              <div>
                <div className="flex justify-between mt-5 ">
                  <h2 className="text-md font-medium text-gray-500">
                    Recipes : {numRecipes} p
                  </h2>
                  <h2 className="text-md text-gray-500 font-medium">
                    Experinece : {yearsOfExperience}y
                  </h2>
                </div>
                <h3 className="text-md justify-center mt-2 font-medium flex items-center gap-1 text-red-800">
                  Recipes Like : {likes}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 items-center"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                </h3>
              </div>
            </ul>
          </div>

          <footer className="text-center py-3 px-8 text-gray-500">
            <button
              onClick={handleFollowBtn}
              className="py-3 px-7 mt-5 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600"
            >
              FOLLOW
            </button>
          </footer>
        </div>

        {/**=======================Left Card========================== */}
        <div className="md:col-span-2">
          {recipes.map((recipe, index) => (
            <ShowLeftRecipe key={index} recipe={recipe}></ShowLeftRecipe>
          ))}
        </div>
        {/**=======================Left Card========================== */}
      </div>
    </div>
  );
};

export default ChefRecipeDetails;
