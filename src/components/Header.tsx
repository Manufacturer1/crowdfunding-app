import { useState, type JSX } from "react";
import desktopHero from "../images/image-hero-desktop.jpg";
import mobileHero from "../images/image-hero-mobile.jpg";
import { navbar } from "../data/navbar";
import logo from "../images/logo.svg";
import Menu from "./Menu";

const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header>
        <div>
          <picture>
            <source media="(min-width: 768px)" srcSet={desktopHero} />
            <img className="block w-full" src={mobileHero} alt="Mobile hero" />
          </picture>
        </div>
        <div className="px-5 py-5 flex justify-between">
          <div className="absolute top-5 z-20">
            <img src={logo} alt="logo" />
          </div>
          {isOpen && (
            <nav className="navbar">
              <ul>
                {navbar.map((link, i) => (
                  <li key={i}>
                    <span className="p-5 block font-semibold">{link}</span>
                    {i < navbar.length - 1 && <hr />}
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <div className="absolute top-5 left-[90%] z-20">
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
        {isOpen && <div className="absolute inset-0 bg-black/50 z-10 "></div>}
      </header>
    </>
  );
};

export default Header;
