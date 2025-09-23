import type { JSX } from "react";
import close from "../images/icon-close-menu.svg";
import hamburger from "../images/icon-hamburger.svg";

type PropsType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu = ({ isOpen, setIsOpen }: PropsType): JSX.Element => {
  return (
    <>
      {isOpen ? (
        <img onClick={() => setIsOpen(!isOpen)} src={close} />
      ) : (
        <img onClick={() => setIsOpen(!isOpen)} src={hamburger} />
      )}
    </>
  );
};

export default Menu;
