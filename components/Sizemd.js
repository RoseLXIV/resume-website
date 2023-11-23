import { useMemo } from "react";

const Sizemd = ({
  label,
  icon,
  showIcon,
  labelFontWeight,
  labelFontFamily,
}) => {
  const labelStyle = useMemo(() => {
    return {
      fontWeight: labelFontWeight,
      fontFamily: labelFontFamily,
    };
  }, [labelFontWeight, labelFontFamily]);

  return (
    <div className="bg-primary-900 flex flex-row items-center justify-center py-3 px-5 gap-[4px] text-center text-xs text-white font-body-xs-semibold">
      <div
        className="relative leading-[16px] font-extrabold"
        style={labelStyle}
      >
        {label}
      </div>
      {showIcon && (
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0"
          alt=""
          src={icon}
        />
      )}
    </div>
  );
};

export default Sizemd;
