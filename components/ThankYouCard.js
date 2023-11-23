const ThankYouCard = () => {
  return (
    <div className="w-[1440px] overflow-hidden flex flex-col items-start justify-start pt-2 px-28 pb-12 box-border gap-[33px] text-left text-13xl text-neutral-100 font-display-xs-regular">
      <img className="relative w-[1216px] h-px" alt="" src="/divider.svg" />
      <div className="w-[1216px] flex flex-row items-center justify-start">
        <div className="w-[768px] flex flex-col items-start justify-start gap-[16px]">
          <div className="relative leading-[60px] flex items-end w-[768px]">
            <span className="[line-break:anywhere] w-full">
              <b>{`"The only way to do great work is to love what you do."  `}</b>
              <i className="text-5xl font-light">
                - Steve Jobs, Co-Founder of Apple
              </i>
            </span>
          </div>
          <div className="relative text-29xl tracking-[-4px] leading-[60px] text-primary-100 flex items-center w-[592px]">
            Thank you for visiting!
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-0 pl-[113px] gap-[32px] text-sm">
          <div className="flex flex-col items-start justify-start gap-[8px] text-5xl">
            <div className="relative leading-[32px] flex items-center w-[280px]">
              Cobourg, Ontario
            </div>
            <div className="relative text-sm leading-[24px] font-light flex items-center w-[280px]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">958 Denton Dr, K9A 5K2</p>
                <p className="m-0">Canada</p>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[24px] font-light flex items-center w-[280px]">
              Email me at
            </div>
            <div className="relative text-5xl leading-[32px] text-primary-100 flex items-center w-[341px]">
              romonerose@outlook.com
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[24px] font-light flex items-center w-[280px]">{`If you're hurry, feel free to call `}</div>
            <div className="relative text-5xl leading-[32px] text-primary-100 flex items-center w-[280px]">
              +1(876)467-1927
            </div>
          </div>
        </div>
      </div>
      <img className="relative w-[1216px] h-px" alt="" src="/divider.svg" />
      <div className="self-stretch flex flex-row items-center justify-between text-base font-body-md-light">
        <div className="relative leading-[24px] font-light flex items-center w-[643px] shrink-0">
          © 2023 Romone Rose - Innovator and Developer. Crafted with dedication
          by Romone Rose.
        </div>
        <div className="w-[592px] flex flex-row items-center justify-end gap-[24px] text-sm font-display-xs-regular">
          <div className="flex flex-row items-center justify-start gap-[16px] opacity-[0.7]">
            <div className="relative tracking-[0.1em] leading-[20px] font-extrabold">
              CONNECT
            </div>
            <div className="relative box-border w-[65px] h-px border-t-[1px] border-solid border-neutral-100" />
          </div>
          <img
            className="relative w-10 h-10 object-cover"
            alt=""
            src="/linkedin@2x.png"
          />
          <img
            className="relative rounded-81xl w-10 h-10"
            alt=""
            src="/social-icons.svg"
          />
          <img
            className="relative rounded-81xl w-10 h-10"
            alt=""
            src="/social-icons1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ThankYouCard;
