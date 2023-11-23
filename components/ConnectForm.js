import Property1default2 from "./Property1default2";
import Property1default1 from "./Property1default1";
import Property1default from "./Property1default";

const ConnectForm = () => {
  return (
    <div className="w-[1440px] overflow-hidden flex flex-row items-center justify-center p-28 box-border text-left text-sm text-off-white font-display-xs-regular">
      <div className="w-[1216px] flex flex-col items-start justify-start gap-[24px]">
        <div className="w-[592px] flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-start gap-[16px] opacity-[0.8]">
            <div className="relative box-border w-[65px] h-px border-t-[1px] border-solid border-off-white" />
            <div className="relative tracking-[0.1em] leading-[20px] font-extrabold">
              GET IN TOUCH
            </div>
          </div>
        </div>
        <b className="relative text-41xl leading-[72px] flex font-display-xl-regular text-neutral-100 items-center w-[1216px] h-[106px] shrink-0">
          Let's Connect
        </b>
        <div className="relative w-[1215.8px] h-[431px] text-xs text-lightgray font-body-xs-semibold">
          <div className="absolute top-[0px] left-[0px] w-[739.2px] h-[431px]">
            <div className="absolute top-[0px] left-[0px] rounded-tl rounded-tr-none rounded-br-none rounded-bl [background:linear-gradient(180deg,_#4d4d4d,_rgba(77,_77,_77,_0))] w-[739.2px] h-[431px]" />
            <div className="absolute top-[43px] left-[41px] w-[659.3px] h-[346px]">
              <div className="absolute top-[0px] left-[0px] w-[659.3px] h-[346px]">
                <Property1default2
                  property1defaultWidth="307.6px"
                  property1defaultPosition="absolute"
                  property1defaultTop="0px"
                  property1defaultLeft="0px"
                />
                <Property1default1
                  property1defaultWidth="307.6px"
                  property1defaultPosition="absolute"
                  property1defaultTop="0px"
                  property1defaultLeft="351.7px"
                />
                <Property1default
                  property1defaultWidth="659.3px"
                  property1defaultPosition="absolute"
                  property1defaultTop="78px"
                  property1defaultLeft="0px"
                />
                <div className="absolute top-[156px] left-[0px] w-[659.3px] overflow-hidden flex flex-col items-start justify-start">
                  <div className="rounded bg-white box-border w-[659px] overflow-hidden flex flex-col items-start justify-start py-2.5 px-[15px] border-[1px] border-solid border-off-white">
                    <div className="self-stretch relative leading-[24px] font-extrabold">
                      Write your message here...
                    </div>
                    <div className="relative w-px h-[72px]" />
                  </div>
                </div>
                <div className="absolute top-[302px] left-[0px] rounded bg-primary-900 w-[147.6px] flex flex-col items-center justify-center py-2.5 px-[15px] box-border text-center text-white">
                  <div className="relative leading-[24px] font-extrabold">
                    Send Message
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[739px] rounded-tl-none rounded-tr rounded-br rounded-bl-none [background:linear-gradient(180deg,_#4d4d4d,_rgba(77,_77,_77,_0))] w-[476.8px] h-[431px]" />
          <div className="absolute top-[41px] left-[769px] w-[417px] flex flex-col items-start justify-start gap-[15px] text-white">
            <b className="relative text-29xl leading-[56.5px] flex font-display-xl-regular items-center w-[417px]">
              Behind the Scenes
            </b>
            <div className="relative text-lg leading-[32px] font-light font-display-xs-regular text-neutral-100 flex items-center w-[417px]">
              Want a deeper insight into my journey? One click gives you access
              to my detailed resume, showcasing my capabilities across Business
              Intelligence, Software Development, and more.
            </div>
            <div className="relative w-[174px] h-11 text-center">
              <div className="absolute top-[0px] left-[0px] rounded bg-primary-900 box-border w-[174px] flex flex-row items-center justify-center py-2.5 px-[15px] gap-[10px] border-[1px] border-solid border-mediumslateblue">
                <div className="relative w-[105px] h-6">
                  <div className="absolute top-[0px] left-[0px] leading-[24px] font-extrabold">
                    Download Resume
                  </div>
                </div>
                <img className="relative w-6 h-6" alt="" src="/group-6.svg" />
              </div>
            </div>
            <div className="relative w-[107px] h-11 text-center text-black">
              <div className="absolute top-[0px] left-[0px] rounded bg-off-white w-[107px] flex flex-row items-center justify-center py-2.5 px-[15px] box-border gap-[8px]">
                <div className="relative leading-[24px] font-extrabold">
                  Preview
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/eye.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectForm;
