import logoMastercraft from '../images/logo-mastercraft.svg';
import bookMarkLogo from '../images/icon-bookmark.svg';

const Bookmark = () =>{

    return(
        <div className='relative text-center px-8 py-11 rounded-md shadow-md'>
            <div className='absolute w-12 translate-y-[-140%] left-[45%]'>
                <img className='object-cover w-full h-full' src={logoMastercraft} alt='mastercraft logo' />
            </div>
            <h1 className='text-black text-3xl font-bold mb-2'>Mastercraft Bamboo Monitor Riser</h1>
            <p className='text-neutral-darkGray text-base mb-7'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className='flex justify-between'>
                <button className='text-white text-base font-medium bg-primary-moderateCyan py-3 px-5 rounded-[30px] w-[25%]'>Back this project</button>
                <button className='flex items-center gap-3 bg-neutral-100 rounded-[30px] pr-8 text-base font-bold text-neutral-darkGray '>
                    <img className='block w-12' src={bookMarkLogo}/>
                    <span className='block'>Bookmark</span>
                </button>
            </div>
        </div>
    );
};

export default Bookmark;