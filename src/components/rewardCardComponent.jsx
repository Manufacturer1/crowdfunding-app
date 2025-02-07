

const RewardCard = ({title,pledge,leftAmount,description}) =>{

    return(
        <div className={`${leftAmount === 0 ? 'opacity-50' : 'opacity-100'} border-solid border-neutral-200 border-[2px] rounded-md md:px-8 px-5 py-7`}>
            <div className="mb-8 md:flex md:items-center md:justify-between">
                <h2 className="text-black font-bold md:text-xl text-base">{title}</h2>
                <span className="text-base font-bold text-primary-moderateCyan">Pledge ${pledge} or more</span>
            </div>
            <p className="mb-8 leading-7 md:text-base text-sm text-neutral-darkGray">{description}</p>
            <div className="md:flex md:justify-between md:items-center">
                <div className="flex items-center gap-2 md:mb-0 mb-5">
                    <span className="text-3xl text-black font-bold">{leftAmount}</span>
                    <span className="text-sm font-medium text-neutral-darkGray">left</span>
                </div>
                <button className={`${leftAmount === 0 ? 'bg-neutral-darkGray cursor-not-allowed' : 'bg-primary-moderateCyan cursor-pointer hover:bg-primary-darkCyan transition-all duration-300'} text-white font-medium text-sm py-3 w-[150px] rounded-[30px] `}>{leftAmount === 0 ? 'Out of stock' : 'Select Reward'}</button>
            </div>
        </div>
    );
};

export default RewardCard;