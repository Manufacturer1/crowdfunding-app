

const Stats = () =>{

    return(
        <div className="rounded-md shadow-equal py-11 px-8">
            <div className="flex justify-start gap-11 items-center text-black text-3xl font-bold mb-5">
                <div className="flex flex-col gap-1">
                    <span>$89,914</span>
                    <span className="text-sm text-neutral-darkGray font-medium">of $100,000 backed</span>
                  
                </div>
                <hr className="rotate-90 block w-[8%]"/> 
                <div className="flex flex-col">
                    <span>5,007</span>
                    <span className="text-sm text-neutral-darkGray font-medium">total backers</span>
                </div>
                <hr className="rotate-90 block w-[8%]"/> 
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