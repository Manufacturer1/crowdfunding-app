import type { JSX } from "react";
import ProgressBar from "./ProgressBar";
import { useBackProject } from "../contexts/BackProjectContext";

const MastercraftStats = (): JSX.Element => {
  const { stats } = useBackProject();
  const formattedBacked = stats.backed.toLocaleString("en-US");
  const formattedTotalBackers = stats.totalBackers.toLocaleString("en-US");
  return (
    <>
      <div className="bg-white w-full relative py-5 px-8 pb-10 shadow-md rounded-md ">
        <div className="text-center space-y-4 mb-5 md:space-y-0 md:text-left md:flex">
          <div className="space-y-3 md:space-y-0 md:mr-7">
            <h2 className="text-black font-bold text-4xl">
              ${formattedBacked}
            </h2>
            <small className="text-gray-custom-500">of $100,000 backed</small>
            <hr className="w-20 mx-auto md:hidden" />
          </div>
          <hr className="hidden md:block rotate-90 w-14 self-center" />
          <div className="space-y-3 md:space-y-0 md:mr-7 ml-5">
            <h2 className="text-black font-bold text-4xl">
              {formattedTotalBackers}
            </h2>
            <small className="text-gray-custom-500">total backers</small>
            <hr className="w-20 mx-auto md:hidden" />
          </div>
          <hr className="hidden md:block md:w-14 rotate-90 self-center" />
          <div className="space-y-3 md:space-y-0 md:ml-10">
            <h2 className="text-black font-bold text-4xl">56</h2>
            <small className="text-gray-custom-500">days left</small>
          </div>
        </div>
        <ProgressBar />
      </div>
    </>
  );
};

export default MastercraftStats;
