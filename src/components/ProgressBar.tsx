import type { JSX } from "react";

const ProgressBar = (): JSX.Element => {
  return (
    <>
      <div className="h-4 w-full bg-gray-100 rounded-full relative">
        <div className="absolute h-4 bg-green-custom-400 top-0 w-[70%] rounded-full"></div>
      </div>
    </>
  );
};

export default ProgressBar;
