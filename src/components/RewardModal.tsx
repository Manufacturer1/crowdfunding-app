import type { RewardPropsType } from "./Reward";
import Pledge from "./Pledge";
import { useState } from "react";

const RewardModal = ({
  title,
  pledge,
  description,
  amount,
}: RewardPropsType) => {
  const [value, setValue] = useState<string>(pledge);
  return (
    <div
      className={`relative border-2 border-gray-300 rounded-md w-full shadow-sm transition
        group-data-[checked]:border-green-custom-400 ${
          amount === "0" ? "opacity-50" : "opacity-100"
        }`}
    >
      <div className={`p-6 md:pb-7`}>
        {/*Outer dot*/}
        <span
          className="absolute left-4 top-6 flex size-6
         items-center justify-center rounded-full border-2
          border-gray-200 bg-white group-hover:border-green-custom-400"
        >
          {/*Inner dot*/}
          <span className="size-3 rounded-full bg-teal-400 opacity-0 group-data-[checked]:opacity-100 transition" />
        </span>
        {/*Text label*/}
        <div className="ml-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:flex md:items-center md:gap-4">
            <h3
              className="font-bold text-black text-base
             group-hover:text-green-custom-400 transition-all duration-150"
            >
              {title}
            </h3>
            <span className="text-green-custom-400 font-semibold text-sm">
              {pledge !== "" ? `Pledge $${pledge} or more` : ""}
            </span>
          </div>
          <p className="font-bold text-black hidden md:flex items-center gap-2">
            <span>{amount}</span>
            {amount !== null ? (
              <span className="font-normal text-gray-500">left</span>
            ) : (
              ""
            )}
          </p>
        </div>
        <div>
          <p className="mt-6 text-gray-custom-500 text-sm">{description}</p>
          <p className="mt-4 font-bold text-black flex items-center gap-2 md:hidden">
            <span>{amount}</span>
            {amount !== null ? (
              <span className="font-normal text-gray-500">left</span>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
      {!title.toLowerCase().includes("no reward") && (
        <div className="group-data-[checked]:block hidden">
          <hr className="mb-5 relative border-1 border-gray-300" />
          <Pledge valueInput={value} setValue={setValue} />
        </div>
      )}
    </div>
  );
};

export default RewardModal;
