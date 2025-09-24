import type { RewardPropsType } from "./Reward";

const RewardModal = ({
  title,
  pledge,
  description,
  amount,
}: RewardPropsType) => {
  return (
    <div
      className={`border border-gray-300 rounded-md w-full p-4 pb-8 md:pb-2 shadow-sm ${
        amount === "0" ? "opacity-50" : "opacity-100"
      }`}
    >
      <div className="flex"></div>
    </div>
  );
};

export default RewardModal;
