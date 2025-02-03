import logo from '../images/logo.svg';
import heroDesktop from '../images/image-hero-desktop.jpg';
import mobileHero from '../images/image-hero-mobile.jpg';


const NavBar = () =>{

    const navBarItems = ["About","Discover","Get Started"];

    return(
        <nav>
            <div className='py-10 px-28 flex justify-between align-center text-white text-base font-normal'>
                <div>
                    <img src={logo} alt='logo CrowdFund' />
                </div>
                <div>
                    <ul className='flex gap-10'>
                        {
                            navBarItems.map((item,index)=>(
                                <li key={index}><a href='#'>{item}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='absolute z-[-1] top-0 w-full h-auto'>
                <picture>
                    <source media='(max-width:768px)' srcSet={mobileHero}/>
                    <img src={heroDesktop} className='object-cover w-full h-full block' alt='mobile computer hero illustration' />
                </picture>
            </div>
        </nav>
    );
};

export default NavBar;