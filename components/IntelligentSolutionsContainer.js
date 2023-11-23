import Eyebrow from "./Eyebrow";

const IntelligentSolutionsContainer = () => {
  return (
    <div className="h-[929px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[85px] px-20 box-border text-left text-lg text-neutral-100 font-display-xs-regular">
      <div className="flex flex-col items-start justify-start gap-[10px]">
        <div className="w-[1280px] h-[627px] flex flex-row items-center justify-start py-0 pr-[435px] pl-0 box-border gap-[18px]">
          <div className="w-[718px] flex flex-col items-start justify-start gap-[24px]">
            <div className="flex flex-col items-start justify-start">
              <Eyebrow
                text="ABOUT ME"
                lineBorderTop="1px solid #f4f4f4"
                textLetterSpacing="0.08em"
                textFontWeight="bold"
                textColor="#f4f4f4"
              />
            </div>
            <b className="relative text-41xl leading-[72px] flex font-display-xl-regular items-center w-[745px] h-[189px] shrink-0">
              Empowering Your Business with Intelligent Solutions
            </b>
            <div className="relative leading-[32px] font-light flex items-center w-[753px]">
              "Welcome! I'm Romone Rose, a proficient Business Intelligence
              Engineer and Software Developer. With over four years in the
              Financial Services sector, I specialize in creating efficient ETL
              jobs and BI reports, turning data into actionable insights.
            </div>
            <div className="relative leading-[32px] font-light flex items-center w-[655px]">
              As a software engineer, my standout project is 'TheNoughtPlan', an
              AI Budgeting App developed using Flutter, Firebase and several
              APIs. This game-changing app, requiring no bank links,
              personalizes financial management for users. Explore my work to
              see the intersection of technology and innovation in action."
            </div>
          </div>
          <img
            className="relative w-[800px] h-[1141px] object-cover"
            alt=""
            src="/about-1@2x.png"
          />
        </div>
        <div className="w-[880px] flex flex-row items-center justify-start text-41xl font-display-xl-regular">
          <div className="w-[293px] flex flex-row items-center justify-start gap-[16px]">
            <div className="relative tracking-[-0.02em] leading-[72px]">4+</div>
            <div className="flex-1 flex flex-row items-start justify-start pt-2 px-0 pb-0 text-sm font-display-xs-regular">
              <div className="flex-1 relative tracking-[0.05em] leading-[20px]">
                <p className="m-0">YEARS OF</p>
                <p className="m-0">EXPERIENCE</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div className="relative tracking-[-0.02em] leading-[72px]">
              10+
            </div>
            <div className="w-[192.3px] flex flex-row items-start justify-start pt-2 px-0 pb-0 box-border text-sm font-display-xs-regular">
              <div className="flex-1 relative tracking-[0.05em] leading-[20px]">
                PROFICIENT TECHNOLOGIES
              </div>
            </div>
          </div>
          <div className="w-[293.3px] flex flex-row items-center justify-start gap-[16px]">
            <div className="relative tracking-[-0.02em] leading-[72px]">8+</div>
            <div className="flex-1 flex flex-row items-start justify-start pt-2 px-0 pb-0 text-sm font-display-xs-regular">
              <div className="flex-1 relative tracking-[0.05em] leading-[20px]">
                <p className="m-0">{`PROJECTS `}</p>
                <p className="m-0">COMPLETED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntelligentSolutionsContainer;
