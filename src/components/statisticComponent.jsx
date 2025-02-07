

const Stats = () =>{

    return(
        <div className="rounded-md shadow-equal py-11 px-8">
            <div className="flex flex-col md:flex-row text-center md:text-left md:justify-start md:gap-11 gap-5 items-center text-black text-3xl font-bold mb-5">
                <div className="flex flex-col gap-1">
                    <span>$89,914</span>
                    <span className="text-sm text-neutral-darkGray font-medium">of $100,000 backed</span>
                  
                </div>
                <hr className="md:rotate-90 rotate-0 block md:w-[8%] w-[25%] border-t-2 border-gray-200"/>
                <div className="flex flex-col">
                    <span>5,007</span>
                    <span className="text-sm text-neutral-darkGray font-medium">total backers</span>
                </div>
                <hr className="md:rotate-90 rotate-0 block md:w-[8%] w-[25%] border-t-2 border-gray-200"/> 
                <div className="flex flex-col">
                    <span>56</span>
                    <span className="text-sm text-neutral-darkGray font-medium">days left</span>
                </div>
            </div>
            <progress className="w-full rounded-[30px]" value="75" max="100"></progress>
        </div>
    );
};

export default Stats;