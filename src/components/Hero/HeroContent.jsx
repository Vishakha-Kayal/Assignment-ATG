import HeroNav from "./HeroNav"
import Post from "./Post"
import post1 from "../../assets/images/post1.png"
import post2 from "../../assets/images/post2.png"
import post3 from "../../assets/images/post3.png"
import Sarthak from "../../assets/images/sarthak.png"
import sarah from "../../assets/images/sarah.png"
import ronal from "../../assets/images/ronal.png"
import joseph from "../../assets/images/joseph.png"
import locationicon from "../../assets/images/locationicon.png"
import edit from "../../assets/images/edit.png"
import error from "../../assets/images/error.png"
import thumb from "../../assets/images/thumb.png"
import leisure from "../../assets/images/leisure.png"
import Activism from "../../assets/images/Activism.png"
import MBA from "../../assets/images/MBA.png"
import Philosophy from "../../assets/images/Philosophy.png"
import React from 'react'



const HeroContent = ({ loggedin }) => {
    return (
        <div>
            <HeroNav />
            <section className="w-full flex gap-[6vw]">
                <div className="w-[60%]">
                    <Post image={post1}
                        type={"✍️ Article"}
                        query="What if famous brands had regular fonts? Meet RegulaBrands!"
                        solution="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                        profile_pic={Sarthak}
                        profile_name="Sarthak Kamra" />
                    <Post image={post2}
                        type={"🔬️ Education"}
                        query="Tax Benefits for Investment under National Pension Scheme launched by Government"
                        solution="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                        profile_pic={sarah}
                        profile_name="Sarah West" />
                    <Post image={post3}
                        type={"🗓️ Meetup"}
                        query="Finance & Investment Elite Social Mixer @Lujiazui"
                        solution="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                        profile_pic={ronal}
                        profile_name="Ronal Jones" />
                    <Post image={post1}
                        type={"💼️ Job"}
                        query="What if famous brands had regular fonts? Meet RegulaBrands!"
                        solution="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                        profile_pic={joseph}
                        profile_name="Joseph Gray" />
                </div>
                <div className="w-[40%] p-4 mt-8">
                    <div className="w-[55%] flex justify-between items-center border-b-[1px] border-[#E0E0E0] pb-2 ">
                        <div className="flexprop gap-2">
                            <img src={locationicon} alt="" />
                            <h4 className="text-[0.875rem]">Noida, India</h4>
                        </div>
                        <div className="flexprop">
                            <img src={edit} alt="" />
                        </div>
                    </div>
                    <div className="w-[80%] flex items-start gap-3 mt-6">
                        <img src={error} alt="" />
                        <p className="text-[#000000] opacity-[50%] text-xs leading-4">Your location will help us serve better and extend a personalised experience.</p>
                    </div>
                    {loggedin ? (
                        <>
                            <section className="w-full flex flex-col justify-start">
                            <div className="w-[100%] mt-9 flexprop gap-2 py-2 px-2">
                                <img src={thumb} alt="" />
                                <h2 className="uppercase text-[0.875rem] text-[#000000] leading-7 tracking-widest">REcommended Groups</h2>
                            </div>
                            <div className="w-[100%]">
                                <div className="w-[100%] mt-2 flex justify-between items-center gap-3 py-3 px-1">
                                    <img src={leisure} alt="" className="w-[10%]"/>
                                    <h3 className="capitalize text-[0.875rem] bg-[white] w-[70%]">leisure</h3>
                                    <div className="rounded-full px-4 py-1 bg-[#EDEEF0] w-[30%]">Follow</div>
                                </div>
                                <div className="w-[100%] mt-2 flex justify-between items-center py-3 px-1 gap-3">
                                    <img src={Activism} alt=""  className="w-[10%]"/>
                                    <h3 className="capitalize text-[0.875rem]  w-[70%]">Activism</h3>
                                    <div className="rounded-full px-4 py-1 bg-[#EDEEF0] w-[30%]">Follow</div>
                                </div>
                                <div className="w-[100%] mt-2 flex justify-between items-center py-3 px-1 gap-3">
                                    <img src={MBA} alt="" className="w-[10%]"/>
                                    <h3 className="capitalize text-[0.875rem]  w-[70%]">MBA</h3>
                                    <div className="rounded-full px-4 py-1 bg-[#EDEEF0] w-[30%]">Follow</div>
                                </div>
                                <div className="w-[100%] mt-2 flex justify-between items-center py-3 px-1 gap-3">
                                    <img src={Philosophy} alt="" className="w-[10%]"/>
                                    <h3 className="capitalize text-[0.875rem]  w-[70%]">Philosophy</h3>
                                    <div className="rounded-full px-4 py-1 bg-[#EDEEF0] w-[30%]">Follow</div>
                                </div>
                             
                            </div>
                            </section>
                        </>
                    ) : null}
                </div>
            </section>
        </div>
    )
}

export default HeroContent