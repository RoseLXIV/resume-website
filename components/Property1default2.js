import { useMemo } from "react";

const Property1default2 = ({
  property1defaultWidth,
  property1defaultPosition,
  property1defaultTop,
  property1defaultLeft,
}) => {
  const property1default2Style = useMemo(() => {
    return {
      width: property1defaultWidth,
      position: property1defaultPosition,
      top: property1defaultTop,
      left: property1defaultLeft,
    };
  }, [
    property1defaultWidth,
    property1defaultPosition,
    property1defaultTop,
    property1defaultLeft,
  ]);

  return (
    <div
      className="w-[300px] h-12 overflow-hidden text-left text-xs text-lightgray font-body-xs-semibold"
      style={property1default2Style}
    >
      <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded bg-white box-border overflow-hidden flex flex-col items-start justify-start py-2.5 px-[15px] border-[1px] border-solid border-off-white">
        <div className="relative leading-[24px] font-extrabold">Name</div>
      </div>
    </div>
  );
};

export default Property1default2;
