import ReconciliationProcessRevampCon from "./ReconciliationProcessRevampCon";

const ServicesContainer = () => {
  return (
    <>
    {/* Container for large screens */}
    <div className="w-full hidden xl:block" id='projects'>
      <div className='flex flex-row justify-start items-center ml-32 py-16'>
      <div className="w-full h-[499px] flex flex-row items-start justify-start gap-[75px] text-center text-21xl text-black">
        <div className="self-stretch relative rounded bg-off-white shadow-[0px_24px_48px_rgba(17,_24,_39,_0.25)_inset] w-96">
          <img
            className="absolute h-[24.65%] w-[32.03%] top-[5.91%] right-[33.98%] bottom-[69.44%] left-[33.98%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/logo.svg"
          />
          <div className="absolute top-[173.5px] left-[40px] w-[304px] flex flex-col items-start justify-start gap-[16px]">
            <b className="self-stretch relative tracking-[-1px] leading-[120%] projects-header">
              TheNoughtPlan
            </b>
            <div className="self-stretch relative text-lg leading-[32px] font-light font-display-xs-regular">
              An AI-powered app I developed for streamlined personal finance
              management, providing budget planning and expense tracking without
              the need for bank account links."
            </div>
          </div>
          <img
            className="absolute h-[156.91%] w-[219.53%] top-[-17.43%] right-[-90.36%] bottom-[-39.48%] left-[-29.17%] max-w-full overflow-hidden max-h-full projects-image"
            alt=""
            src="/topographic-7.svg"
          />
        </div>
        <ReconciliationProcessRevampCon
          imageDimensions="/logo-11@2x.png"
          reconciliationProcessImag="Reconciliation  Process Revamp"
          reconciliationProjectDesc="Initiated a transformative project to revamp the reconciliation process. By implementing custom ETL pipelines and scripts, to streamline data extraction, transformation, and loading operations."
        />
        <ReconciliationProcessRevampCon
          imageDimensions="/1684782588643-cd1d7f181431bdffe9aa0e61fb3b0e0d-1@2x.png"
          reconciliationProcessImag="Reconciliation Dashboard"
          reconciliationProjectDesc="Developed a Recon Dashboard web app to improve and exceed SLAs among cross-functional groups using Python, Plotly-Dash and Flask."
          propBackground="linear-gradient(180deg, #007ce8, #fff)"
          propWidth="169px"
          propHeight="76px"
        />
      </div>
      </div>
      </div>
    </>
    
  );
};

export default ServicesContainer;
