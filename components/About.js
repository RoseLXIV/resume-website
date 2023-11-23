import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

export const About = () => {

    const videoRef = useRef(null);
    const aboutRefXL = useRef(null); // Ref for extra large screens
    const aboutRefMD = useRef(null); // Ref for medium screens
    const aboutRefSM = useRef(null); // Ref for small screens

    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && videoRef.current) {
                    videoRef.current.play();
                }
            });
        };

        const observerOptions = { threshold: 1 };
        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (aboutRefXL.current) observer.observe(aboutRefXL.current);
        if (aboutRefMD.current) observer.observe(aboutRefMD.current);
        if (aboutRefSM.current) observer.observe(aboutRefSM.current);

        return () => {
            if (aboutRefXL.current) observer.unobserve(aboutRefXL.current);
            if (aboutRefMD.current) observer.unobserve(aboutRefMD.current);
            if (aboutRefSM.current) observer.unobserve(aboutRefSM.current);
        };
    }, []);
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
        <div  className="w-full hidden xl:block z-10" id='about'>
                <div ref={aboutRefXL} className=''>
                    <video ref={videoRef} autoPlay loop muted playsInline className="video-style-xl ml-64">
                        <source src="/mockup_1080_ext.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
        </div>
        
        {/* Container for medium screens */}    
        <div className="w-full hidden md:block xl:hidden z-10 ml-20 py-12" id='about-md'>
                <div ref={aboutRefMD} className=''>
                    <video ref={videoRef} autoPlay loop muted playsInline className="video-style-md">
                        <source src="/mockup_1080_ext.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
        </div>
            
        {/* Container for small screens */}
        <div className=" w-full sm:block md:hidden xl:hidden z-10 py-24" id='about-sm'>
            <div ref={aboutRefSM} className=''>
                    <video ref={videoRef} autoPlay loop muted playsInline className="video-style-sm">
                        <source src="/mockup_1080_ext.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
        </div>
        </>
    )
}


export default About;