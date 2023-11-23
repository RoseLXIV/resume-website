import { useMemo } from "react";

const Eyebrow = ({
  text,
  lineBorderTop,
  textLetterSpacing,
  textFontWeight,
  textColor,
}) => {
  const lineStyle = useMemo(() => {
    return {
      borderTop: lineBorderTop,
    };
  }, [lineBorderTop]);

  const textStyle = useMemo(() => {
    return {
      letterSpacing: textLetterSpacing,
      fontWeight: textFontWeight,
      color: textColor,
    };
  }, [textLetterSpacing, textFontWeight, textColor]);

  return (
    <div className="flex flex-row items-center justify-start gap-[16px] opacity-[0.8] text-left text-sm text-primary-900 font-display-xs-regular">
      <div
        className="relative box-border w-[65px] h-px border-t-[1px] border-solid border-primary-900"
        style={lineStyle}
      />
      <div
        className="relative tracking-[0.1em] leading-[20px] font-extrabold"
        style={textStyle}
      >
        {text}
      </div>
    </div>
  );
};

export default Eyebrow;
