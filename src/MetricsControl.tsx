import ButtonToggleGroup from "./ButtonToggle";
import { DropdownPicker } from "./DropdownPicker";
import { Popover } from "./Popover";
import RangeControl from "./RangeSlider";
import { TextControl } from "./TextControl";
import { Wrap } from "./Wrap";
import { useEffect, useState } from "@wordpress/element";

import ColumnSpacingIcon from "@blockbite/icons/dist/ColumnSpacing";
import DesktopIcon from "@blockbite/icons/dist/Desktop";
import GridIcon from "@blockbite/icons/dist/Grid";
import PercentageIcon from "@blockbite/icons/dist/Percentage";
import SliderIcon from "@blockbite/icons/dist/Slider";
import TailwindUnitIcon from "@blockbite/icons/dist/Tailwind";
import has from "lodash/has";

type MetricsControlProps = {
  defaultUnit: string;
  defaultValue: string;
  units?:
    | string[]
    | "native"
    | "percent"
    | "grid"
    | "arbitrary"
    | "fluid"
    | "screen"
    | "all";
  inputClassName?: string;
  onValueChange: (value: string) => void;
  onUnitChange: (unit: string) => void;
};

const MetricsControl: React.FC<MetricsControlProps> = ({
  defaultUnit,
  defaultValue,
  onValueChange,
  onUnitChange,
  inputClassName = "w-[75px]",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentOptions, setCurrentOptions] = useState<string[]>([]);

  // Use local state for defaultUnit and defaultValue
  const [unit, setUnit] = useState(defaultUnit);
  const [value, setValue] = useState<string>("");
  const [resetValue, setResetValue] = useState<string | number>(defaultValue);

  // Set initial state from props
  useEffect(() => {
    if (defaultUnit) {
      setUnit(defaultUnit);
    }
    if (defaultValue) {
      setValue(defaultValue.toString());
    }
  }, [defaultUnit, defaultValue]);

  // Save last value after popover close to support "reset" functionality
  // Only apply to arbitrary units
  useEffect(() => {
    if (!isVisible && unit === "arbitrary") {
      setResetValue(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const showOptions = (u: string) => {
    if (u !== "arbitrary" && has(bb.codex.units.spacing, u)) {
      const options =
        bb.codex.units.spacing[u as keyof typeof bb.codex.units.spacing];
      setCurrentOptions(
        Array.isArray(options) ? options : Object.keys(options)
      );
    } else {
      setCurrentOptions([]);
    }
    setIsVisible(true);
  };

  const unitOptions = [
    {
      icon: <TailwindUnitIcon />,
      label: "Tailwind CSS Units",
      value: "native",
    },
    { icon: <PercentageIcon />, label: "Percentage Units", value: "percent" },
    { icon: <GridIcon />, label: "Grid Units", value: "grid" },
    { icon: <DesktopIcon />, label: "Screen Units", value: "screen" },
    { icon: <SliderIcon />, label: "Pixel Units", value: "arbitrary" },
    { icon: <ColumnSpacingIcon />, label: "Fluid Units", value: "fluid" },
  ];

  return (
    <Wrap className="relative flex flex-col items-baseline">
      <TextControl
        inputClassName={inputClassName}
        defaultValue={
          // Remove the "b_" prefix for grid units
          unit === "grid" ? value.replace("b_", "") : value
        }
        onClick={() => unit !== "arbitrary" && showOptions(unit)}
        onChange={(newValue) => {
          setValue(newValue);
          onValueChange(newValue);
        }}
        readOnly={unit !== "arbitrary"}
      >
        <Popover
          visible={isVisible}
          position="bottom left"
          className="w-[300px] bg-white shadow-sm"
          onVisibleChange={setIsVisible}
        >
          {unit === "arbitrary" ? (
            <RangeControl
              defaultValue={value}
              label="Pixel Value"
              min={0}
              max={100}
              gridMode={true}
              showTooltip={false}
              allowReset={true}
              resetFallbackValue={
                isNaN(resetValue.toString() as any)
                  ? 0
                  : Number(resetValue) / 16
              }
              onValueChange={(newValue: string) => {
                setValue(newValue);
                onValueChange(newValue);
              }}
            />
          ) : (
            <ButtonToggleGroup
              className="mt-4"
              options={currentOptions.map((option) => ({
                value: option,
                label:
                  unit === "grid"
                    ? option.toString().replace("b_", "")
                    : option,
                onClick: () => {
                  setValue(option);
                  onValueChange(option);
                },
              }))}
              size="small"
              defaultPressed={value?.toString() || ""}
              onPressedChange={(newValue: string) => {
                setValue(newValue);
                onValueChange(newValue);
              }}
            />
          )}
        </Popover>

        <DropdownPicker
          className="h-[32px]"
          defaultValue={unit}
          options={unitOptions}
          onPressedChange={(selectedUnit) => {
            if (selectedUnit === "reset") {
              setValue("");
              onValueChange("");
              setIsVisible(false);
            } else {
              setUnit(selectedUnit);
              onUnitChange(selectedUnit);
              showOptions(selectedUnit);
            }
          }}
        />
      </TextControl>
    </Wrap>
  );
};

export default MetricsControl;
