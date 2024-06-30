import React, { useState } from 'react';
import AtgLogo from "../assets/images/atglogo.png"
import Search from "../assets/images/searchicon.png"
import Arrow from "../assets/images/arrow.png"
import CreateAccount from "../components/CreateAccount"
import siddharth from "../assets/images/siddharth.png"

const Navbar = ({ loggedin }) => {
    const [showCreateAccount, setShowCreateAccount] = useState(false);
    const handleCreateAccountClick = () => {
        setShowCreateAccount(true);
    };
    const handleCloseBtn =()=>{
        setShowCreateAccount(false);
    }
    {
        if (loggedin) {
            return (
                <>
                    <div className='w-full h-[9.86vh] px-12 flex'>
                        {showCreateAccount ? <CreateAccount handleCloseBtn={handleCloseBtn}/>: null}
                        <div className='w-full h-full flex justify-between items-center'>
                            <div className=''>
                                <img src={AtgLogo} alt="ATG Logo" className='w-[10.156rem]' />
                            </div>
                            <div className=''>
                                <div className='flexprop gap-2 w-[23.43vw] h-[5.75vh] bg-[#F2F2F2] rounded-full px-3'>
                                    <h5><img src={Search} alt="" /></h5>
                                    <h5 className='text-[0.875rem] text-[#5C5C5C] leading-[18.2px]'>Search for your favorite groups in ATG</h5>
                                </div>
                            </div>
                            <div className='flex items-center justify-center gap-3'>
                                <h5><img src={siddharth} alt="" className='h-full object-contain'/></h5>
                                <h5 className='text-[1rem] whitespace-nowrap leading-[1.3rem] cursor-pointer'>Siddharth Goyal</h5>
                                <h5><img src={Arrow} alt="" className='w-6 h-6' /></h5>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className='w-full h-[9.86vh] px-12 flex'>
                    {showCreateAccount ? <CreateAccount handleCloseBtn={handleCloseBtn}/>: null}
                        <div className='w-full flex justify-between items-center'>
                            <div className=''>
                                <img src={AtgLogo} alt="ATG Logo" className='w-[10.156rem]' />
                            </div>
                            <div className=''>
                                <div className='flexprop gap-2 w-[23.43vw] h-[5.75vh] bg-[#F2F2F2] rounded-full px-3'>
                                    <h5><img src={Search} alt="" /></h5>
                                    <h5 className='text-[0.875rem] text-[#5C5C5C] leading-[18.2px]'>Search for your favorite groups in ATG</h5>
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <h5 className='text-[1rem] whitespace-nowrap leading-[1.3rem] cursor-pointer' onClick={handleCreateAccountClick}>Create account. <span className='text-[#2f6ce5]'>It’s free!</span></h5>
                                <img src={Arrow} alt="" className='w-6 h-6' />
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }

}

export default Navbar