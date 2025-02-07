import logo from '../images/logo.svg';
import heroDesktop from '../images/image-hero-desktop.jpg';
import mobileHero from '../images/image-hero-mobile.jpg';
import hamburgerIcon from '../images/icon-hamburger.svg';
import iconCloseMenu from '../images/icon-close-menu.svg';
import { useState } from 'react';


const NavBar = () =>{
    const [isMenuOpened,setMenuOpen] = useState(false);

    const navBarItems = ["About","Discover","Get Started"];

    const toggleMenu = () =>{
        setMenuOpen(prev => !prev);
    };

    return(
        <nav>
            <div className=' py-10 md:px-28 px-7 flex justify-between align-center text-white text-base font-normal'>
                <div className='z-20'>
                    <img src={logo} alt='logo CrowdFund' />
                </div>
                <div className='md:block hidden'>
                    <ul className='flex gap-10'>
                        {
                            navBarItems.map((item,index)=>(
                                <li key={index}><a href='#'>{item}</a></li>
                            )) 
                        }
                    </ul>
                </div>
                <div onClick={toggleMenu} 
                    className='md:hidden z-20'
                >
                    <img src={isMenuOpened ? iconCloseMenu : hamburgerIcon} />
                </div>
            </div>
            <div className='absolute z-[-1] top-0 w-full h-auto'>
                <picture>
                    <source media='(max-width:768px)' srcSet={mobileHero}/>
                    <img src={heroDesktop} className='object-cover w-full h-full block' alt='mobile computer hero illustration' />
                </picture>
            </div>
            <div className={`md:hidden ${isMenuOpened ? 'block' : 'hidden'} z-20 fixed top-24 left-[7%] w-[85%] bg-white rounded-lg`}>
                <ul className='flex flex-col'>
                            {
                                navBarItems.map((item,index)=>(
                                    <div className='' key={index}>
                                        <li className='text-xl text-black font-bold ml-5 py-5'><a href='#'>{item}</a></li>
                                        <hr className={`${index === navBarItems.length - 1 ? 'hidden' : 'block'}`}/>
                                    </div>
                                ))
                            }
                </ul>
            </div>
            <div className={`md:hidden ${isMenuOpened ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10`}></div>
        </nav>
    );
};

export default NavBar;