import { useEffect, useState, type JSX } from "react";
import desktopHero from "../images/image-hero-desktop.jpg";
import mobileHero from "../images/image-hero-mobile.jpg";
import { navbar } from "../data/navbar";
import logo from "../images/logo.svg";
import Menu from "./Menu";

const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const width = 768;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > width) {
        setIsOpen(true);
        setIsMobile(false);
      } else {
        setIsOpen(false);
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header>
        <div className="absolute z-[-10] top-0 left-0 w-full">
          <picture className="w-full">
            <source media="(min-width: 768px)" srcSet={desktopHero} />
            <img className="block w-full" src={mobileHero} alt="Mobile hero" />
          </picture>
        </div>
        <div className="px-5 py-5 md:px-12 relative z-20 md:flex md:justify-between ">
          <div>
            <img className="z-20" src={logo} alt="logo" />
          </div>
          {isOpen && isMobile && (
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
          {!isMobile && (
            <ul className="flex gap-10 text-white text-medium text-sm ">
              {navbar.map((link, i) => (
                <li key={i}>
                  <a className="hover:underline" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          )}

          <div className="absolute top-5 left-[90%] z-20">
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
        {isOpen && isMobile && (
          <div className="absolute inset-0 bg-black/50 z-10 "></div>
        )}
      </header>
    </>
  );
};

export default Header;
