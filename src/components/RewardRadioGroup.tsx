import { RadioGroup, Radio, Field } from "@headlessui/react";
import RewardModal from "./RewardModal";
import { useBackProject } from "../contexts/BackProjectContext";

const RewardRadioGroup = () => {
  const { selectedReward, setSelectedReward, rewards } = useBackProject();

  return (
    <RadioGroup value={selectedReward} onChange={setSelectedReward}>
      {rewards.map((data, idx) => (
        <Field key={idx} className="mb-3 flex items-center gap-3">
          <Radio
            value={data}
            disabled={data.amount === "0"}
            className="group relative w-full cursor-pointer rounded-md focus:outline-none"
          >
            <RewardModal
              title={data.title}
              pledge={data.pledge}
              description={data.description}
              amount={data.amount}
            />
          </Radio>
        </Field>
      ))}
    </RadioGroup>
  );
};

export default RewardRadioGroup;
