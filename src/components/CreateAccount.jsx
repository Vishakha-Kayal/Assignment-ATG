import cross from "../assets/images/cross.png"
import eye from "../assets/images/eyeicon.png"
import fb from "../assets/images/fb-logo.png"
import google from "../assets/images/google.png"
import createacc_img from "../assets/images/createacc_img.png"

const CreateAccount = () => {
    return (
        <>
            <div className="px-[1.25rem] py-9 createAcc w-full h-[79%] lg:w-[48%] lg:h-[75%] lg:left-[26%] lg:top-[10%] bg-white absolute bottom-0 z-[99] rounded-s-xl rounded-e-xl">
                <section className="w-full h-full flex flex-col">
                    <div className="nav flex justify-between items-center">
                        <h2 className="text-[1.25rem] font-bold">Create Account</h2>
                        <h5><img src={cross} alt="" className="w-6 h-6 opacity-[80%]" /></h5>
                    </div>
                    <div className="lg:flex lg:w-full lg:h-full h-[40%]">
                        <div className="lg:w-[50%] h-[100%] lg:h-[45%]">
                            <form className="rounded-[2px] flex flex-col w-[100%] h-[100%] bg-[#F7F8FA] mt-5">
                                <div className="flexprop h-[25%]">
                                    <h3 className="text-[#8A8A8A] basis-[50%] text-base h-full"><input type="text" placeholder="First Name" className="px-3 w-full h-full bg-inherit border-[1px] border-[#D9D9DB]" /></h3>
                                    <h3 className="text-[#8A8A8A] basis-[50%] text-base h-full"><input type="text" placeholder="Last Name" className="px-3 w-full h-full bg-inherit border-[1px] border-[#D9D9DB]" /></h3>
                                </div>
                                <div className="w-full h-[25%]">
                                    <h3 className="text-[#8A8A8A] text-base h-full"><input type="text" placeholder="Email" className="px-3 w-full h-full bg-inherit border-[1px] border-[#D9D9DB]" /></h3>
                                </div>
                                <div className="flexprop h-[25%]  border-[1px] border-[#D9D9DB]">
                                    <h3 className="text-[#8A8A8A] basis-[90%] text-base h-full"><input type="text" placeholder="Password" className="px-3 w-full h-full bg-inherit" /></h3>
                                    <h3 className="text-[#8A8A8A] basis-[10%] text-base h-full flexprop"><img src={eye} className="w-[60%] h-[60%]" alt="" /></h3>
                                </div>
                                <div className="w-full h-[25%]">
                                    <h3 className="text-[#8A8A8A] text-base h-full"><input type="text" placeholder="Confirm Password" className="px-3 w-full h-full bg-inherit border-[1px] border-[#D9D9DB]" /></h3>
                                </div>
                            </form>
                            <section className="flex justify-between items-center gap-4 mt-7 mb-7 lg:mb-6">
                                <div className="px-4 text-[0.813rem] text-white h-9 bg-[#2F6CE5] flexprop rounded-full">
                                    Create Account
                                    {/* <p className="w-full "> </p> */}
                                </div>
                                <h5>
                                    <h5 className="underline">or, Sign In</h5>
                                </h5>
                            </section>
                            <section className="w-full h-[20%] flex justify-center items-center mb-7 lg:mb-6 border-[1px] border-[#D9D9DB] gap-3">
                                <div>
                                    <img src={fb} alt="" />
                                </div>
                                <div className="text-[0.813rem]">
                                    Sign up with Facebook
                                </div>
                            </section>
                            <section className="w-full h-[20%] flex justify-center items-center border-[1px] border-[#D9D9DB] gap-3 mb-7 lg:mb-4">
                                <div>
                                    <img src={google} alt="" className="w-full h-full" />
                                </div>
                                <div className="text-[0.813rem]">
                                    Sign up with Facebook
                                </div>
                            </section>
                            <aside className="w-full flex justify-center">
                                <p className="text-center text-[0.688rem] w-[60%]">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                            </aside>
                        </div>
                        <div className="lg:w-[50%] lg:flex lg:items-center invisible lg:visible">
                        <img src={createacc_img} alt="" className="h-[90%]"/>
                    </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CreateAccount;