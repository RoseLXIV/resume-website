import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';


export const About = ({ animate }) => {

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
    
    const [aboutRef, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5, // Adjust as needed
        });
    const [statsRef, inViewStats] = useInView({
        triggerOnce: true,
        threshold: 0.9, // Adjust as needed
        });   
    const [aboutRefMDView, inViewMD] = useInView({
        triggerOnce: true,
        threshold: 0.1, // Adjust as needed
        }); 
    const [statsRefMD, inViewStatsMD] = useInView({
        triggerOnce: true,
        threshold: 0.9, // Adjust as needed
        });
    const [aboutRefSMView, inViewSM] = useInView({
        triggerOnce: true,
        threshold: 0.1, // Adjust as needed
        }); 
    const [statsRefSM, inViewStatsSM] = useInView({
        triggerOnce: true,
        threshold: 0.5, // Adjust as needed
        });      
    const fadeInUp = useSpring({
        opacity:  inView || animate ? 1 : 0,
        transform: inView || animate ? 'translateY(0px)' : 'translateY(5px)',
        delay: 100, // Delay in milliseconds
        config: { duration: 600 } // Duration of the animation
        });
    const fadeInUp_1 = useSpring({
        opacity: inView || animate ? 1 : 0,
        transform: inView || animate ? 'translateY(0px)' : 'translateY(5px)',
        delay: 150, // Delay in milliseconds
        config: { duration: 650 } // Duration of the animation
        });
    const fadeInUp_2 = useSpring({
        opacity: inViewStats || animate ? 1 : 0,
        transform: inViewStats || animate ? 'translateY(0px)' : 'translateY(8px)',
        delay: 300, // Delay in milliseconds
        config: { duration: 1000 } // Duration of the animation
        });
    const fadeInUp_3 = useSpring({
        opacity: inViewStats || animate ? 1 : 0,
        transform: inViewStats || animate ? 'translateY(0px)' : 'translateY(8px)',
        delay: 400, // Delay in milliseconds
        config: { duration: 1200 } // Duration of the animation
        });
    const fadeInUp_4 = useSpring({
        opacity: inViewStats || animate ? 1 : 0,
        transform: inViewStats || animate ? 'translateY(0px)' : 'translateY(8px)',
        delay: 500, // Delay in milliseconds
        config: { duration: 1400 } // Duration of the animation
        });
    console.log('In View LG : ',inView);    
    const fadeInUpMD = useSpring({
        opacity: inViewMD || animate ? 1 : 0,
        transform: inViewMD || animate ? 'translateY(0px)' : 'translateY(5px)',
        delay: 100, // Delay in milliseconds
        config: { duration: 600 } // Duration of the animation
        });
    const fadeInUp_1MD = useSpring({
        opacity: inViewMD || animate ? 1 : 0,
        transform: inViewMD || animate ? 'translateY(0px)' : 'translateY(5px)',
        delay: 150, // Delay in milliseconds
        config: { duration: 650 } // Duration of the animation
        });
    const fadeInUp_2MD = useSpring({
        opacity: inViewStatsMD || animate ? 1 : 0,
        transform: inViewStatsMD || animate ? 'translateY(0px)' : 'translateY(8px)',
        delay: 300, // Delay in milliseconds
        config: { duration: 1000 } // Duration of the animation
        });
    const fadeInUp_3MD = useSpring({
        opacity: inViewStatsMD || animate ? 1 : 0,
        transform: inViewStatsMD || animate ? 'translateY(0px)' : 'translateY(8px)',
        delay: 400, // Delay in milliseconds
        config: { duration: 1200 } // Duration of the animation
        });
    const fadeInUp_4MD = useSpring({
        opacity: inViewStatsMD || animate ? 1 : 0,
        transform: inViewStatsMD || animate ? 'translateY(0px)' : 'translateY(8px)',
        delay: 500, // Delay in milliseconds
        config: { duration: 1400 } // Duration of the animation
        });
    const fadeInUpSM = useSpring({
        opacity: inViewSM || animate ? 1 : 0,
        transform: inViewSM || animate ? 'translateY(0px)' : 'translateY(5px)',
        delay: 100, // Delay in milliseconds
        config: { duration: 600 } // Duration of the animation
        });
    const fadeInUp_1SM = useSpring({
        opacity: inViewSM || animate ? 1 : 0,
        transform: inViewSM || animate ? 'translateY(0px)' : 'translateY(5px)',
        delay: 150, // Delay in milliseconds
        config: { duration: 650 } // Duration of the animation
        });
    const fadeInUp_2SM = useSpring({
        opacity: inViewStatsSM || animate ? 1 : 0,
        transform: inViewStatsSM || animate ? 'translateY(0px)' : 'translateY(8px)',
        delay: 300, // Delay in milliseconds
        config: { duration: 1000 } // Duration of the animation
        });
    const fadeInUp_3SM = useSpring({
        opacity: inViewStatsSM || animate ? 1 : 0,
        transform: inViewStatsSM || animate ? 'translateY(0px)' : 'translateY(8px)',
        delay: 400, // Delay in milliseconds
        config: { duration: 1200 } // Duration of the animation
        });
    const fadeInUp_4SM = useSpring({
        opacity: inViewStatsSM || animate ? 1 : 0,
        transform: inViewStatsSM || animate ? 'translateY(0px)' : 'translateY(8px)',
        delay: 500, // Delay in milliseconds
        config: { duration: 1400 } // Duration of the animation
        });
    return (
        <>
        {/* Container for large screens */}
        <div className="w-full hidden xl:block z-10 py-4" id='about'>
                <div ref={aboutRefXL} className='flex flex-row justify-start items-start ml-24'>
                    <div className='p-8'>
                        <div className='flex flex-row justify-start items-center mt-8'>
                            <img src="/Line.svg" alt="Line" className="mr-4" />
                            <h3 className="section-header whitespace-nowrap">ABOUT ME</h3>
                            </div>
                        <div className='flex flex-row justify-start items-center h-60'>
                            <animated.h3 ref={aboutRef} style={fadeInUp} className="about-header">Empowering Your Business with Intelligent Solutions</animated.h3>
                        </div>
                        <div className='flex flex-row justify-start items-center'>
                            <animated.p ref={aboutRef} style={fadeInUp_1} className="about-text">Welcome! I'm Romone Rose, a skilled Business Intelligence Engineer with a robust foundation in Software Development. With over four years of experience in the Financial Services sector, my focus is on crafting efficient ETL processes and insightful BI reports that transform complex data into clear, actionable insights.</animated.p>
                        </div>
                        <div className='flex flex-row justify-start items-center'>
                            <animated.p ref={aboutRef} style={fadeInUp_1} className="about-text-1">In addition to my BI expertise, I have also ventured into software development. A notable project is 'TheNoughtPlan', an AI-driven budgeting app I developed using Flutter and Firebase. This innovative app, which operates without needing bank links, showcases my ability to blend technology with user-centric design. Take a look at my portfolio to see how my BI skills enhance every project.</animated.p>
                        </div>
                        <div className="flex flex-row items-center justify-start h-36">
                            <div className="flex flex-row items-center justify-start gap-[16px] mr-24">
                                <div>
                                    <animated.p ref={statsRef} style={fadeInUp_2} className="stats-header">4+</animated.p>
                                </div>
                                <div className="flex-1 flex flex-row items-start justify-start pt-2 px-0 pb-0 text-sm font-body-sm-tracking-widest-semibold">
                                <div className="flex-1 relative tracking-[0.05em] leading-[20px]">
                                    <animated.p ref={statsRef} style={fadeInUp_2} className="m-0 stats-text">YEARS OF</animated.p>
                                    <animated.p ref={statsRef} style={fadeInUp_2} className="m-0 stats-text">EXPERIENCE</animated.p>
                                </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[16px] mr-24">
                                <div>
                                    <animated.p ref={statsRef} style={fadeInUp_3} className="stats-header">10+</animated.p>
                                </div>
                                <div className="flex flex-row items-start justify-start pt-2 px-0 pb-0 box-border text-sm font-body-sm-tracking-widest-semibold">
                                <div className="flex-1 relative tracking-[0.05em] leading-[20px]">
                                    <animated.p ref={statsRef} style={fadeInUp_3} className="m-0 stats-text">PROFICIENT</animated.p>
                                    <animated.p ref={statsRef} style={fadeInUp_3} className="m-0 stats-text">TECHNOLOGIES</animated.p>
                                </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[16px] mr-24">
                                <div>
                                    <animated.p ref={statsRef} style={fadeInUp_4} className="stats-header">8+</animated.p>
                                </div>
                                <div className="flex-1 flex flex-row items-start justify-start pt-2 px-0 pb-0 text-sm font-body-sm-tracking-widest-semibold">
                                <div className="flex-1 relative tracking-[0.05em] leading-[20px]">
                                    <animated.p ref={statsRef} style={fadeInUp_4} className="m-0 stats-text">PROJECTS</animated.p>
                                    <animated.p ref={statsRef} style={fadeInUp_4} className="m-0 stats-text">COMPLETED</animated.p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        
                    </div>     
                        <video ref={videoRef} autoPlay loop muted playsInline className="video-style-xl">
                            <source src="/mockup_1080_ext.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video> 
                </div>
        </div>
        
        {/* Container for medium screens */}    
        <div className="w-full hidden md:block xl:hidden z-10 py-8" id='about-md'>
                <div ref={aboutRefMD} className='flex flex-row justify-start items-start ml-8'>
                <div className='p-6'>
                        <div className='flex flex-row justify-start items-center mt-8'>
                            <img src="/Line.svg" alt="Line" className="mr-4" />
                            <h3 className="section-header-md whitespace-nowrap">ABOUT ME</h3>
                            </div>
                        <div className='flex flex-row justify-start items-center h-[16rem]'>
                            <animated.h3 ref={aboutRefMDView} style={fadeInUpMD} className="about-header-md">Empowering Your Business with Intelligent Solutions</animated.h3>
                        </div>
                        <div className='flex flex-row justify-start items-center'>
                            <animated.p ref={aboutRefMDView} style={fadeInUp_1MD} className="about-text-md">Welcome! I'm Romone Rose, a skilled Business Intelligence Engineer with a robust foundation in Software Development. With over four years of experience in the Financial Services sector, my focus is on crafting efficient ETL processes and insightful BI reports that transform complex data into clear, actionable insights.</animated.p>
                        </div>
                        <div className='flex flex-row justify-start items-center'>
                            <animated.p ref={aboutRefMDView} style={fadeInUp_1MD} className="about-text-md-1">In addition to my BI expertise, I have also ventured into software development. A notable project is 'TheNoughtPlan', an AI-driven budgeting app I developed using Flutter and Firebase. This innovative app, which operates without needing bank links, showcases my ability to blend technology with user-centric design. Take a look at my portfolio to see how my BI skills enhance every project.</animated.p>
                        </div>
                        <div className="flex flex-row items-center justify-center h-24">
                            <div className="flex flex-row items-center justify-center gap-[16px] mr-20">
                                <div>
                                    <animated.p ref={statsRefMD} style={fadeInUp_2MD} className="stats-header-md">4+</animated.p>
                                </div>
                                <div className="flex-1 flex flex-row items-start justify-start pt-2 px-0 pb-0 text-sm font-body-sm-tracking-widest-semibold">
                                <div className="flex-1 relative tracking-[0.05em] leading-[20px]">
                                    <animated.p ref={statsRefMD} style={fadeInUp_2MD} className="m-0 stats-text-md">YEARS OF</animated.p>
                                    <animated.p ref={statsRefMD} style={fadeInUp_2MD} className="m-0 stats-text-md">EXPERIENCE</animated.p>
                                </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-[16px] mr-20">
                                <div>
                                    <animated.p ref={statsRefMD} style={fadeInUp_3MD} className="stats-header-md">10+</animated.p>
                                </div>
                                <div className="flex flex-row items-start justify-start pt-2 px-0 pb-0 box-border text-sm font-body-sm-tracking-widest-semibold">
                                <div className="flex-1 relative tracking-[0.05em] leading-[20px]">
                                    <animated.p ref={statsRefMD} style={fadeInUp_3MD} className="m-0 stats-text-md">PROFICIENT</animated.p>
                                    <animated.p ref={statsRefMD} style={fadeInUp_3MD} className="m-0 stats-text-md">TECHNOLOGIES</animated.p>
                                </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-[16px] mr-20">
                                <div>
                                    <animated.p ref={statsRefMD} style={fadeInUp_4MD} className="stats-header-md">8+</animated.p>
                                </div>
                                <div className="flex-1 flex flex-row items-start justify-start pt-2 px-0 pb-0 text-sm font-body-sm-tracking-widest-semibold">
                                <div className="flex-1 relative tracking-[0.05em] leading-[20px]">
                                    <animated.p ref={statsRefMD} style={fadeInUp_4MD} className="m-0 stats-text-md">PROJECTS</animated.p>
                                    <animated.p ref={statsRefMD} style={fadeInUp_4MD} className="m-0 stats-text-md">COMPLETED</animated.p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        
                    </div>  

                    <video ref={videoRef} autoPlay loop muted playsInline className="video-style-md">
                        <source src="/mockup_1080_ext.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
        </div>
            
        {/* Container for small screens */}
        <div className=" w-full sm:block md:hidden xl:hidden z-10 py-10" id='about-sm'>
            <div ref={aboutRefSM} className='flex flex-row justify-start items-start ml-3'>

            <div className='p-6'>
                        <div className='flex flex-row justify-start items-center'>
                            <img src="/Line-sm.svg" alt="Line" className="mr-4" />
                            <h3 className="section-header-sm whitespace-nowrap">ABOUT ME</h3>
                            </div>
                        <div className='flex flex-row justify-start items-center h-[16rem]'>
                            <animated.h3 ref={aboutRefSMView} style={fadeInUpSM} className="about-header-sm">Empowering Your Business with Intelligent Solutions</animated.h3>
                        </div>
                        <div className='flex flex-row justify-start items-center'>
                            <animated.p ref={aboutRefSMView} style={fadeInUp_1SM} className="about-text-sm">Welcome! I'm Romone Rose, a skilled Business Intelligence Engineer with a robust foundation in Software Development.</animated.p>
                        </div>
                        <div className='flex flex-row justify-start items-center'>
                            <animated.p ref={aboutRefSMView} style={fadeInUp_1SM} className="about-text-sm-2 mt-[-15px]"> With over four years of experience in the Financial Services sector, my focus is on crafting efficient ETL processes and insightful BI reports that transform complex data into clear, actionable insights.</animated.p>
                        </div>
                        <div className='flex flex-row justify-start items-center'>
                            <animated.p ref={aboutRefSMView} style={fadeInUp_1SM} className="about-text-sm-1">In addition to my BI expertise, I have also ventured into software development. A notable project is 'TheNoughtPlan', an AI-driven budgeting app I developed using Flutter and Firebase. This innovative app, which operates without needing bank links, showcases my ability to blend technology with user-centric design. Take a look at my portfolio to see how my BI skills enhance every project.</animated.p>
                        </div>
                        <div className="flex flex-row items-center justify-center">
                            <div className="flex flex-row items-center justify-center gap-[10px] mr-10">
                                <div>
                                    <animated.p ref={statsRefSM} style={fadeInUp_2SM} className="stats-header-sm">4+</animated.p>
                                </div>
                                <div className="flex-1 flex flex-row items-start justify-start text-sm ">
                                <div className="flex-1 relative tracking-[0.05em] leading-[18px]">
                                    <animated.p ref={statsRefSM} style={fadeInUp_2SM} className="m-0 stats-text-sm">YEARS OF</animated.p>
                                    <animated.p ref={statsRefSM} style={fadeInUp_2SM} className="m-0 stats-text-sm">EXPERIENCE</animated.p>
                                </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-[10px] mr-10">
                                <div>
                                    <animated.p ref={statsRefSM} style={fadeInUp_3SM} className="stats-header-sm">10+</animated.p>
                                </div>
                                <div className="flex flex-row items-start justify-start text-sm">
                                <div className="flex-1 relative tracking-[0.05em] leading-[18px]">
                                    <animated.p ref={statsRefSM} style={fadeInUp_3SM} className="m-0 stats-text-sm">PROFICIENT</animated.p>
                                    <animated.p ref={statsRefSM} style={fadeInUp_3SM} className="m-0 stats-text-sm">TECHNOLOGIES</animated.p>
                                </div>
                                </div>
                            </div>
                            
                            </div>
                            <div className="flex flex-row items-center justify-center h-4">
                            <div className="flex flex-row items-center justify-center gap-[10px] mr-10">
                                <div>
                                    <animated.p ref={statsRefSM} style={fadeInUp_4SM} className="stats-header-sm">8+</animated.p>
                                </div>
                                <div className="flex-1 flex flex-row items-start justify-start text-sm">
                                <div className="flex-1 relative tracking-[0.05em] leading-[18px]">
                                    <animated.p ref={statsRefSM} style={fadeInUp_4SM} className="m-0 stats-text-sm">PROJECTS</animated.p>
                                    <animated.p ref={statsRefSM} style={fadeInUp_4SM} className="m-0 stats-text-sm">COMPLETED</animated.p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                        
                    </div>  
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