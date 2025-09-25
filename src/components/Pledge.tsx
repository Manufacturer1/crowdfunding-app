import { useBackProject } from "../contexts/BackProjectContext";

type PledgePropsType = {
  modalInputValue: string;
  handleBlur: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onContinue: (pledgeAmount: number) => void;
};

const Pledge = ({
  modalInputValue,
  handleInputChange,
  handleBlur,
  onContinue,
}: PledgePropsType) => {
  const { setIsSuccessModalOpen } = useBackProject();

  const handleContinue = () => {
    const pledgeAmount = parseFloat(modalInputValue) || 1;
    if (pledgeAmount < 1) {
      return;
    }
    onContinue(pledgeAmount);
    setIsSuccessModalOpen(true);
  };
  return (
    <div className="px-6 pb-6 md:flex md:items-end md:justify-between">
      <label className="text-center block text-gray-400 font-medium mb-5">
        Enter your pledge
      </label>
      <div className="flex md:gap-3">
        <div className="relative basis-[50%]">
          {/* Symbol inside input */}
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
            $
          </span>
          <input
            value={modalInputValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
            type="number"
            className="rounded-full w-[110px] md:w-[120px] py-3 outline-none border-2 border-solid
             border-gray-200 pl-10 pr-5 hover:border-green-custom-400 focus:border-green-custom-400 transition-all duration-200 text-black font-bold
              [appearance:textfield] 
             [&::-webkit-outer-spin-button]:appearance-none 
             [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <button
          onClick={handleContinue}
          disabled={parseFloat(modalInputValue) < 1}
          className="basis-[50%] w-[110px] md:w-[120px] py-3
         text-white bg-green-custom-400 rounded-full
          hover:bg-green-custom-700 transition-all duration-200"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Pledge;
