import RewardCard from "./rewardCardComponent";
import rewardItems from '../rewardItems.js';


const AboutCard = () =>{

    return(
        <div className="py-11 px-8 rounded-md shadow-equal mb-20">
            <h2 className="text-black font-bold text-xl mb-8">About this project</h2>
            <div className="text-neutral-darkGray grid gap-8 text-base leading-7 max-w-[640px] mb-8">
            <p> The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
            </p>
            <p>
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
            </div>
            <div className="space-y-7">
                {
                    rewardItems.map((item,index) =>(
                        <RewardCard 
                        key={index}
                        title={item.title}
                        pledge={item.pledge}
                        description={item.description}
                        leftAmount={item.leftAmount}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default AboutCard;