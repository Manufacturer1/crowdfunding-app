import logoMastercraft from '../images/logo-mastercraft.svg';
import bookMarkLogo from '../images/icon-bookmark.svg';

const Bookmark = () =>{

    return(
        <div className='relative text-center px-8 py-11 rounded-md shadow-md'>
            <div className='absolute w-12 translate-y-[-140%] left-[45%]'>
                <img className='object-cover w-full h-full' src={logoMastercraft} alt='mastercraft logo' />
            </div>
            <h1 className='text-black md:text-3xl text-2xl font-bold mb-2'>Mastercraft Bamboo Monitor Riser</h1>
            <p className='text-neutral-darkGray md:text-base text-sm mb-7'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className='flex justify-between lg:gap-0 gap-1'>
                <button className='text-white md:text-base  text-sm font-medium bg-primary-moderateCyan py-3 px-5 rounded-[30px] md:w-[25%] w-[77%] grow-1 lg:grow-0 hover:bg-primary-darkCyan transition-all duration-300'>Back this project</button>
                <button className='bookmark-icon hidden lg:flex items-center gap-3 bg-neutral-100 rounded-[30px] pr-8 text-base font-bold text-neutral-darkGray transition-all duration-300'>
                <svg className='bookmark-icon' width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
                    <span className='block'>Bookmark</span>
                </button>
                <svg className='bookmark-icon lg:hidden block' width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
            </div>
        </div>
    );
};

export default Bookmark;