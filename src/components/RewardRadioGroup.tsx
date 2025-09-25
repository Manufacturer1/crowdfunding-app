import { RadioGroup, Radio, Field } from "@headlessui/react";
import { rewardFromModalData } from "../data/reward";
import { useState } from "react";
import type { RewardPropsType } from "./Reward";
import RewardModal from "./RewardModal";

const RewardRadioGroup = () => {
  const [selected, setSelected] = useState<RewardPropsType | null>(null);

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      {rewardFromModalData.map((data, idx) => (
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
