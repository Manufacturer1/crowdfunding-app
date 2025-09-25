import { useBackProject } from "../contexts/BackProjectContext";

export type RewardPropsType = {
  title: string;
  pledge: string;
  description: string;
  amount: string | null;
};

const Reward = ({ title, pledge, description, amount }: RewardPropsType) => {
  const { setModalOpen, setSelectedReward } = useBackProject();

  const handleSelectReward = () => {
    const reward: RewardPropsType = {
      title: title,
      pledge: pledge,
      description: description,
      amount: amount,
    };
    setSelectedReward(reward);
    setModalOpen(true);
  };

  return (
    <div
      className={`border border-gray-300 rounded-md w-full p-4 pb-8 md:pb-2 shadow-sm ${
        amount === "0" ? "opacity-50" : "opacity-100"
      }`}
    >
      <div className="space-y-1 mb-5 md:flex md:justify-between md:items-center">
        <h4 className="text-lg text-black font-bold">{title}</h4>
        <h5 className="text-base text-green-custom-400 font-medium">
          Pledge ${pledge} or more
        </h5>
      </div>
      <p className="text-base text-gray-custom-500 leading-7 mb-6">
        {description}
      </p>
      <div className="md:flex md:justify-between md:items-start">
        <div className="flex items-center font-bold gap-2 mb-6">
          <h2 className="text-4xl text-black">{amount}</h2>
          <small className="text-gray-custom-500 font-semibold text-base">
            left
          </small>
        </div>
        <button
          onClick={handleSelectReward}
          className={`text-white font-medium py-3 
            px-7 rounded-full
             transition-all duration-200 ${
               amount === "0"
                 ? "bg-gray-custom-500"
                 : "bg-green-custom-400 hover:bg-green-custom-700"
             }`}
        >
          Select Reward
        </button>
      </div>
    </div>
  );
};

export default Reward;
