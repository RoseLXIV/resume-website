import React from 'react'
import Eyebrow from "./Eyebrow";

const Portfolio = () => {
  return (
    <>
    {/* Container for large screens */}
    <div className="w-full hidden xl:block" id='projects'>
        <div className='flex flex-row justify-start items-center ml-24'>
            <div className="w-full flex flex-col items-start justify-start pt-[82px] px-0 pb-0 box-border text-left text-41xl text-off-white">
            <Eyebrow
                text="PROJECTS"
                lineBorderTop="1px solid #fff"
                textLetterSpacing="0.1em"
                textFontWeight="800"
                textColor="#f4f4f4"
            />
                    <div className="w-full flex flex-row items-center justify-start py-6 px-0 box-border gap-[467px]">
                        <b className="relative flex items-center shrink-0 portfolio-header">
                        Development Portfolio
                        </b>
                        <div className="flex flex-col items-end justify-center gap-[8px] text-right text-lg text-white font-display-xs-regular">
                        <img
                            className="relative w-[42px] h-[42px] overflow-hidden shrink-0"
                            alt=""
                            src="/swiperight-adobe-express-1.svg"
                        />
                        <div className="relative font-medium flex items-center w-[113px]">
                            Swipe Right
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
    
  )
}

export default Portfolio