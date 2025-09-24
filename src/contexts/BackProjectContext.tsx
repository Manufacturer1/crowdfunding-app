import { createContext, useContext, useState, type ReactNode } from "react";

type BackProjectContextType = {
  isModalOpen: boolean | null;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const BackProjectContextValue: BackProjectContextType = {
  isModalOpen: false,
  setModalOpen: () => {},
};

const BackProjectContext = createContext<BackProjectContextType>(
  BackProjectContextValue
);

type ChildrenType = {
  children: ReactNode;
};

export const BackProjectProvider = ({ children }: ChildrenType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <BackProjectContext.Provider
      value={{ isModalOpen: isOpen, setModalOpen: setIsOpen }}
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
