import { useMemo } from "react";

const ReconciliationProcessRevampCon = ({
  imageDimensions,
  reconciliationProcessImag,
  reconciliationProjectDesc,
  propBackground,
  propWidth,
  propHeight,
}) => {
  const serviceItemStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const logo1IconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div
      className="self-stretch rounded [background:linear-gradient(180deg,_#fbdb04,_#f4f4f4_34.28%)] shadow-[0px_24px_48px_rgba(0,_0,_0,_0.25)_inset] w-96 flex flex-col items-center justify-center py-4 px-10 box-border gap-[21px] text-center text-21xl text-black font-helvetica-now-text-"
      style={serviceItemStyle}
    >
      <img
        className="relative w-64 h-[60px] object-cover"
        alt=""
        src={imageDimensions}
        style={logo1IconStyle}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <b className="self-stretch relative tracking-[-1px] leading-[120%] projects-header">
          {reconciliationProcessImag}
        </b>
        <div className="self-stretch relative text-lg leading-[32px] font-light font-display-xs-regular">
          {reconciliationProjectDesc}
        </div>
      </div>
    </div>
  );
};

export default ReconciliationProcessRevampCon;
