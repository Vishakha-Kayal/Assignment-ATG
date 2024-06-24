import React, { useState } from 'react';
import CreateAccount from "./CreateAccount"
import bgImage from "../assets/images/bg-image-android.png";
import leftIcon from "../assets/images/left-icon.png";
import Post from "../components/Hero/Post";
import post1 from "../assets/images/post1.png";
import post2 from "../assets/images/post2.png";
import post3 from "../assets/images/post3.png";
import Sarthak from "../assets/images/sarthak.png";
import sarah from "../assets/images/sarah.png";
import ronal from "../assets/images/ronal.png";
import joseph from "../assets/images/joseph.png";
import Arrow from "../assets/images/arrow.png";

const Android = ({loggedin}) => {
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const handleCreateAccountClick = () => {
    setShowCreateAccount(true);
  };
  const introStyle = {
    backgroundImage: `url(${bgImage})`,
    position: "relative",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    maxWidth: "100vw",
  };

  return (
    <>
       {showCreateAccount && <CreateAccount />} 
      <div className="w-full h-[16rem]" style={introStyle}>
        <div className="w-full h-full absolute top-0 bg-intro-image z-10"></div>
        <div className="flex justify-between items-center px-4 pt-4">
          <img src={leftIcon} alt="" className="z-50" />
          {
            !loggedin && (
              <div className="z-50 border-[3px] border-white rounded-lg text-white px-2 py-1 text-[0.95rem] cursor-pointer" onClick={handleCreateAccountClick}>
              Join Group
            </div>
            )
          }
          {loggedin?
          <>
            <div className="z-50 border-[3px] border-white rounded-lg text-white px-2 py-1 text-[0.95rem] cursor-pointer">
            Leave Group
          </div>
          </>
          :null}
        </div>
        <div className="z-30 absolute top-[65%] left-[12.5%] flex flex-col justify-start items-start ">
          <h1 className="text-white z-50 text-[1.3rem] font-semibold">
            Computer Engineering
          </h1>
          <h5 className="text-white z-20 text-[0.85rem]">
            142,765 Computer Engineers follow this
          </h5>
        </div>
      </div>
      {/* posts */}
      <div className="w-full flex justify-between items-center p-4">
        <h1 className="text-xl font-bold tracking-tight">Posts(368)</h1>
        <div className="flexprop bg-[#EDEEF0] px-2 py-1 rounded-lg">
          <h2 className="text-lg font-medium">Filter: All</h2>
          <img src={Arrow} alt="" className="w-9" />
        </div>
      </div>

      <div className="w-[100%]">
        <Post
          image={post1}
          type={"✍️ Article"}
          query="What if famous brands had regular fonts? Meet RegulaBrands!"
          solution="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
          profile_pic={Sarthak}
          profile_name="Sarthak Kamra"
          android={true}
        />
        <Post
          image={post2}
          type={"🔬️ Education"}
          query="Tax Benefits for Investment under National Pension Scheme launched by Government"
          solution="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
          profile_pic={sarah}
          profile_name="Sarah West"
          android={true}
        />
        <Post
          image={post3}
          type={"🗓️ Meetup"}
          query="Finance & Investment Elite Social Mixer @Lujiazui"
          solution="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
          profile_pic={ronal}
          profile_name="Ronal Jones"
          android={true}
        />
        <Post
          image={post1}
          type={"💼️ Job"}
          query="What if famous brands had regular fonts? Meet RegulaBrands!"
          solution="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
          profile_pic={joseph}
          profile_name="Joseph Gray"
          android={true}
        />
      </div>
    </>
  );
};

export default Android;
