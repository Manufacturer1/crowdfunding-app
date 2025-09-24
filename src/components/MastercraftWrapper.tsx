import type { JSX } from "react";
import Mastercraft from "./Mastercraft";
import MastercraftStats from "./MastercraftStats";
import About from "./About";

const MastercraftWrapper = (): JSX.Element => {
  return (
    <>
      <section className="mastercraft-wrapper md:top-[35%] lg:top-[40%] md:w-[55%] flex flex-col gap-3 pb-36">
        <Mastercraft />
        <MastercraftStats />
        <About />
      </section>
    </>
  );
};

export default MastercraftWrapper;
