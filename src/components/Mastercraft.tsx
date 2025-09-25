import type { JSX } from "react";
import mastercraftLogo from "../images/logo-mastercraft.svg";
import BookmarkIcon from "./BookmarkIcon";
import { useBackProject } from "../contexts/BackProjectContext";

const Mastercraft = (): JSX.Element => {
  const { isModalOpen, setModalOpen, isBookmarked } = useBackProject();

  return (
    <>
      <div className="bg-white w-full relative py-5 px-8 shadow-md rounded-md pb-10">
        <div className="absolute w-12 top-[-15%] left-1/2 translate-x-[-50%]">
          <img src={mastercraftLogo} />
        </div>
        <div className="pt-4 text-center space-y-3 mb-5">
          <h3 className="font-bold text-black text-lg md:text-xl lg:text-2xl leading-[23px]">
            Mastercraft Bamboo Monitor Riser
          </h3>
          <p className="text-gray-custom-500 text-xs md:text-base leading-5">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
        </div>
        <div className="flex gap-3 items-center justify-center md:justify-between md:gap-0">
          <button
            onClick={() => setModalOpen(!isModalOpen)}
            className="bg-green-custom-400 text-white font-medium text-sm py-3 w-full
           md:w-auto md:px-8 rounded-full hover:bg-green-custom-700 transition-all duration-150"
          >
            Back this project
          </button>
          {!isBookmarked ? (
            <button className="md:flex md:items-center md:bg-gray-100 md:rounded-full md:gap-4 md:pr-7 group">
              <BookmarkIcon />
              <span className="hidden md:block text-gray-custom-500 font-semibold">
                Bookmark
              </span>
            </button>
          ) : (
            <button className="md:flex md:items-center md:bg-gray-100 md:rounded-full md:gap-4 md:pr-7 group">
              <BookmarkIcon
                circleStyles={"fill-green-custom-700"}
                markStyles={"fill-white"}
              />
              <span className="hidden md:block text-green-custom-700 font-semibold">
                Bookmarked
              </span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Mastercraft;
