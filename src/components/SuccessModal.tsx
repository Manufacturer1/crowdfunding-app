import { useBackProject } from "../contexts/BackProjectContext";
import check from "../images/icon-check.svg";

const SuccessModal = () => {
  const { isSuccesModalOpen, setIsSuccessModalOpen, setModalOpen } =
    useBackProject();
  return (
    <>
      {isSuccesModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          {/*Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsSuccessModalOpen(false)}
          ></div>
          {/*Modal */}
          <div className="relative z-[70] bg-white shadow-sm p-8 rounded-md w-[80%] max-w-md mx-auto">
            <div className="mb-5 mx-auto">
              <img
                className="block mx-auto"
                src={check}
                alt="thanks for support"
              />
            </div>
            <h2 className="text-xl text-black font-bold text-center mb-5">
              Thanks for your support!
            </h2>
            <p className="text-gray-custom-500 text-center font-medium text-sm/6 mb-5">
              Your pledge brings us one step closer to sharing Mastercraft
              Bamboo Monitor Riser worldwide. You will get an email once our
              campaign is completed.
            </p>
            <div className="text-center">
              <button
                onClick={() => {
                  setIsSuccessModalOpen(false);
                  setModalOpen(false);
                }}
                className="bg-green-custom-400 text-white font-semibold 
              text-base rounded-full py-3 px-8"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessModal;
