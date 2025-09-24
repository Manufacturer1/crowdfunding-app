import Reward from "./Reward";
import { rewardData } from "../data/reward";

const About = () => {
  return (
    <>
      <div className="bg-white w-full relative py-7 px-8 shadow-md rounded-md pb-10">
        <div className="space-y-5 mb-8">
          <h2 className="text-2xl lg:text-3xl text-black font-bold">
            About this project
          </h2>
          <p className="text-base text-gray-custom-500 font-normal">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className="text-base text-gray-custom-500 font-normal">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
        {/*Rewards*/}
        <div className="space-y-5">
          {rewardData.map((data, index) => (
            <Reward
              key={index}
              title={data.title}
              pledge={data.pledge}
              description={data.description}
              amount={data.amount}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
