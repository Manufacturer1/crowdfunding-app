import type { JSX } from "react";
import mastercraftLogo from "../images/logo-mastercraft.svg";
import bookmark from "../images/icon-bookmark.svg";

const Mastercraft = (): JSX.Element => {
  return (
    <>
      <div className="bg-white w-full relative py-5 px-8 shadow-sm rounded-md">
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
          <button className="bg-green-custom-400 text-white font-medium text-sm py-3 w-full md:w-auto md:px-8 rounded-full">
            Back this project
          </button>
          <button className="md:flex md:items-center md:bg-gray-100 md:rounded-full md:gap-4 md:pr-5">
            <img className="block w-12 " src={bookmark} alt="bookmark" />
            <span className="hidden md:block text-gray-custom-500 font-semibold">
              Bookmark
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Mastercraft;
