import type { JSX } from "react";
import Mastercraft from "./Mastercraft";

const MastercraftWrapper = (): JSX.Element => {
  return (
    <>
      <section className="mastercraft-wrapper md:top-[35%] lg:top-[40%] md:w-[55%]">
        <Mastercraft />
      </section>
    </>
  );
};

export default MastercraftWrapper;
