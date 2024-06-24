import bgImage from "../assets/images/bg-image.png"

const IntroductionScreen = () => {
    const introStyle={
        backgroundImage:`url(${bgImage})`,
        position: 'relative',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        // backgroundSize: 'max(1500px, 100vw)',
        backgroundSize: 'cover',
        maxWidth: '100vw', 
    }
    
  return (
    <div className='w-full h-[60.2vh] relative z-0' style={introStyle}>
        <div className='w-full h-full absolute top-0 bg-intro-image z-10'>
        </div>
        <div className='z-30 absolute top-[65%] left-[12.5%] flex flex-col justify-start items-start '>
            <h1 className='text-white z-50 text-[2.25rem] font-semibold'>Computer Engineering</h1>
            <h5 className='text-white z-50 text-[1.125rem]'>142,765 Computer Engineers follow this</h5>
        </div>
    </div>
  )
}

export default IntroductionScreen