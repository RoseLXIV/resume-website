import React from 'react'
import { useSpring, animated } from '@react-spring/web';

export const Hero = () => {
    // Define the bouncing animation
    const bounce = useSpring({
        loop: true,
        from: { transform: 'translateY(0px)' },
        to: [
          { transform: 'translateY(-10px)' },
          { transform: 'translateY(0px)' },
          { transform: 'translateY(10px)' },
          { transform: 'translateY(0px)' }
        ],
        config: { duration: 500 } // Adjust the duration as needed
      });
      const fadeInUp = useSpring({
        from: { opacity: 0, transform: 'translateY(5px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        delay: 300, // Delay in milliseconds
        config: { duration: 1000 } // Duration of the animation
    });
    const fadeInUp_1 = useSpring({
        from: { opacity: 0, transform: 'translateY(2px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        delay: 350, // Delay in milliseconds
        config: { duration: 1000 } // Duration of the animation
    });
    return (
        <>
        {/* Container for large screens */}
        <div className="w-full h-[700px] hidden xl:block hero-container-xl ml-32 bg-black">
                <div className='py-28'>
                    <img src="/Portrait_1.png" alt="Portrait" className="portrait-img" />
                    <animated.h1 style={fadeInUp} className="hero-header relative">Romone Rose</animated.h1>
                    <animated.p style={fadeInUp_1} className="hero-subtext relative text-xs px-[10px]">
                            Hi, I'm Romone Rose, a Business Intelligence Specialist with a strong background in Web and Software Development. Discover how my expertise drives innovative and impactful digital solutions.
                    </animated.p>
                    <div className='scroll-image-container relative mt-28'>
                        <animated.img style={bounce} src="/scroll.svg" alt="Scroll Image" className="h-12 w-12" />
                    </div>
                </div>
                
                
        </div>
        
        {/* Container for medium screens */}    
        <div className="w-full h-[810px] hidden ml-16 md:block xl:hidden hero-container-md bg-black">
                <div className='py-28'>
                    <img src="/Portrait_1.png" alt="Portrait" className="portrait-img-md" />
                    <animated.h1 style={fadeInUp} className="hero-header-md relative">Romone Rose</animated.h1>
                    <animated.p style={fadeInUp_1} className="hero-subtext-md relative text-xs px-[10px]">
                            Hi, I'm Romone Rose, a Business Intelligence Specialist with a strong background in Web and Software Development. Discover how my expertise drives innovative and impactful digital solutions.
                    </animated.p>
                    <div className='scroll-image-container-md relative mt-8'>
                        <animated.img style={bounce} src="/scroll.svg" alt="Scroll Image" className="h-12 w-12" />
                    </div>
                </div> 
        </div>
            
        {/* Container for small screens */}
        <div className=" w-full h-[720px] ml-4 hero-container-sm sm:block md:hidden xl:hidden bg-black">
            <div className='py-48'>
                    <img src="/Portrait_1.png" alt="Portrait" className="portrait-img-sm" />
                    <animated.h1 style={fadeInUp} className="hero-header-sm relative">Romone Rose</animated.h1>
                    <animated.p style={fadeInUp_1} className="hero-subtext-sm relative text-xs px-[10px]">
                            Hi, I'm Romone Rose, a Business Intelligence Specialist with a strong background in Web and Software Development. Discover how my expertise drives innovative and impactful digital solutions.
                    </animated.p>
                    <div className='scroll-image-container-sm relative mt-6'>
                        <animated.img style={bounce} src="/scroll.svg" alt="Scroll Image" className="h-12 w-12" />
                    </div>
                </div> 
        </div>

        </>
    )
}


export default Hero;