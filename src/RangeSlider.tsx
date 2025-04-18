import { Wrap } from "./Wrap";
import { useEffect, useState } from "@wordpress/element";

import { RangeControl as WordpressRangeControl } from "@wordpress/components";

export type RangeControlType = {
  defaultValue: string;
  label: string;
  min: number;
  max: number;
  withInputField?: boolean;
  onValueChange: (value: string) => void;
  gridMode?: boolean;
  showTooltip?: boolean;
  [key: string]: any;
};

const RangeControl: React.FC<RangeControlType> = ({
  defaultValue,
  label,
  min = 0,
  max = 2000,
  withInputField = false,
  onValueChange,
  gridMode = false,
  showTooltip = false,
  ...props
}) => {
  const [resetFallbackValue] = useState(0);
  const [rangeValue, setRangeValue] = useState<number>(0);

  useEffect(() => {
    setRangeValue(Math.round(parseInt(defaultValue) / (gridMode ? 16 : 1)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);
  /**
   * Set the range slider values
   * @param modifier
   */

  // convert back to arbitrary unit
  function handleRangeUpdate(value: number) {
    const gridValue = value * (gridMode ? 16 : 1);
    onValueChange(gridValue.toString());
  }

  return (
    <Wrap className="flex min-w-[240px] flex-col">
      <WordpressRangeControl
        label={label}
        value={rangeValue}
        min={min}
        max={max}
        showTooltip={showTooltip}
        withInputField={withInputField}
        onChange={(value) => {
          setRangeValue(value);
          handleRangeUpdate(value);
        }}
        resetFallbackValue={resetFallbackValue}
        {...props}
      />
      <span>{gridMode ? `${rangeValue * 16}px` : null} </span>
    </Wrap>
  );
};

export default RangeControl;
