import { useEffect } from "react";
import { useBackProject } from "../contexts/BackProjectContext";
import close from "../images/icon-close-modal.svg";
import { RadioGroup, Radio } from "@headlessui/react";
import { rewardFromModalData } from "../data/reward";

const BackProjectModal = () => {
  const { isModalOpen, setModalOpen } = useBackProject();
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);
  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start pt-20 justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setModalOpen(false)}
          ></div>

          {/* Modal */}
          <div className="relative bg-white p-5 rounded-md max-w-3xl w-[90%] mx-auto z-50 h-[95%] overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg text-black font-bold md:text-xl lg:text-2xl">
                Back this project
              </h2>
              <button onClick={() => setModalOpen(false)}>
                <img src={close} alt="close modal button" />
              </button>
            </div>
            <p className="text-sm text-gray-custom-500 font-normal md:text-base mb-5">
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>
            <RadioGroup value={0}>
              {rewardFromModalData.map((data, index) => (
                <Radio key={index} value={data.title}></Radio>
              ))}
            </RadioGroup>
          </div>
        </div>
      )}
    </>
  );
};

export default BackProjectModal;
