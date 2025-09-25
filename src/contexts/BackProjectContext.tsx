import { createContext, useContext, useState, type ReactNode } from "react";
import type { RewardPropsType } from "../components/Reward";
import { rewardFromModalData } from "../data/reward";

export type StatsType = {
  backed: number;
  totalBackers: number;
};
export const initialStats: StatsType = {
  backed: 89914,
  totalBackers: 5007,
};

type BackProjectContextType = {
  isModalOpen: boolean | null;
  isBookmarked: boolean;
  isSuccesModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  stats: StatsType;
  updateBackingStats: (pledgeAmount: number, rewardTitle: string) => void;
  selectedReward: RewardPropsType | null;
  setSelectedReward: React.Dispatch<
    React.SetStateAction<RewardPropsType | null>
  >;
  rewards: RewardPropsType[];
  setIsSuccessModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsBookmarked: React.Dispatch<React.SetStateAction<boolean>>;
};
const BackProjectContextValue: BackProjectContextType = {
  isModalOpen: false,
  isBookmarked: false,
  setModalOpen: () => {},
  stats: initialStats,
  updateBackingStats: () => {},
  selectedReward: null,
  setSelectedReward: () => {},
  rewards: rewardFromModalData,
  isSuccesModalOpen: false,
  setIsSuccessModalOpen: () => {},
  setIsBookmarked: () => {},
};

const BackProjectContext = createContext<BackProjectContextType>(
  BackProjectContextValue
);

type BackProjectProviderProps = {
  children: ReactNode;
};

export const BackProjectProvider = ({ children }: BackProjectProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [stats, setStats] = useState<StatsType>(initialStats);
  const [selectedReward, setSelectedReward] = useState<RewardPropsType | null>(
    null
  );
  const [rewards, setRewards] =
    useState<RewardPropsType[]>(rewardFromModalData);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  const updateBackingStats = (pledgeAmount: number, rewardTitle: string) => {
    setStats((prevStats) => ({
      backed: prevStats.backed + pledgeAmount,
      totalBackers: prevStats.totalBackers + 1,
    }));

    if (rewardTitle.toLocaleLowerCase().includes("no reward")) return;

    if (!rewardTitle.toLowerCase().includes("no reward")) {
      setRewards((prevRewards) =>
        prevRewards.map((reward) => {
          if (reward.title === rewardTitle && reward.amount !== "∞") {
            const currentAmount = parseInt(reward.amount ?? "0");
            if (currentAmount > 0) {
              return {
                ...reward,
                amount: (currentAmount - 1).toString(),
              };
            }
          }
          return reward;
        })
      );
    }
    setSelectedReward(null);
    setIsSuccessModalOpen(true);
    setIsBookmarked(true);
  };
  return (
    <BackProjectContext.Provider
      value={{
        isModalOpen: isOpen,
        setModalOpen: setIsOpen,
        stats,
        updateBackingStats,
        selectedReward,
        setSelectedReward,
        rewards,
        isSuccesModalOpen: isSuccessModalOpen,
        setIsSuccessModalOpen,
        isBookmarked: isBookmarked,
        setIsBookmarked,
      }}
    >
      {children}
    </BackProjectContext.Provider>
  );
};

export const useBackProject = (): BackProjectContextType => {
  const context = useContext(BackProjectContext);
  if (!context) {
    throw new Error("useBackProject must be used withing BackProjectProvider");
  }
  return context;
};
