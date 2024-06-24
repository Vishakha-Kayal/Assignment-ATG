import Arrow from "../../assets/images/arrow.png"
import JoinGroup from "../../assets/images/join.png"


const HeroNav = () => {
  return (
    <div className='w-full h-[8vh] flex justify-between items-center border-b-[1px] border-[#E0E0E0]'>
        <div className='basis-[70%] h-full flex  gap-6 text-[#8A8A8A] text-base '>
                <h4 className="text-black flexprop border-b-[1px] border-[#000000]">All Posts(32)</h4>
                <h4 className="flexprop">Article</h4>
                <h4 className="flexprop">Event</h4>
                <h4 className="flexprop">Education</h4>
                <h4 className="flexprop">Job</h4>
        </div>
        <div className='basis-[30%] h-full flexprop gap-3'>
                <div className="flexprop bg-[#EDEEF0] px-2 py-2 gap-3 rounded-[4px] ">
                    <h4 className="text-[0.938rem] h-full font-semibold text-[#000000]">Write a Post</h4>
                    <h4 className="h-full"><img src={Arrow} alt="" className='w-6 h-6' /></h4>
                </div>
                <div className="flexprop bg-[#2F6CE5] px-2 py-2 gap-3 text-white rounded-[4px] ">
                    <h4 className="h-full"><img src={JoinGroup} alt="" className='' /></h4>
                    <h4 className="text-[0.938rem] rounded-[4px] h-full font-semibold">Write a Post</h4>
                </div>
        </div>  
    </div>
  )
}

export default HeroNav