import { Wrap } from "./Wrap";
import { memo, useEffect, useState } from "@wordpress/element";

import {
  __experimentalToggleGroupControlOptionIcon as ToggleGroupControlIcon,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
  __experimentalToggleGroupControl as WordpressToggleGroupControl,
} from "@wordpress/components";
import classNames from "classnames";

type ToggleProps = {
  className?: string;
  options: { value: string; label: string; icon?: React.ReactElement }[];
  defaultPressed: string;
  label?: string | boolean;
  variant?: "primary" | "secondary";
  display?: "icon" | "label";
  size?: "small" | "default" | "compact";
  onPressedChange: (value: string) => void;
};

const ToggleGroup: React.FC<ToggleProps> = memo(
  ({
    className,
    options,
    defaultPressed,
    display = "label",
    label = false,
    onPressedChange,
  }) => {
    const [isPressed, setIsPressed] = useState<string>("");

    const handlePressChange = (value: string) => {
      onPressedChange(value);
    };

    useEffect(() => {
      setIsPressed(defaultPressed);
    }, [defaultPressed]);

    return (
      <Wrap className={classNames(className)}>
        <WordpressToggleGroupControl
          isBlock
          value={isPressed}
          label={typeof label === "string" ? label : ""}
        >
          {options.map((option) =>
            display === "icon" ? (
              <ToggleGroupControlIcon
                icon={option.icon}
                label={option.label}
                key={`ToggleGroupControlIcon-${option.value}`}
                value={option.value}
                onClick={() => handlePressChange(option.value)}
              />
            ) : (
              <ToggleGroupControlOption
                key={`ToggleGroupControlOption-${option.value}`}
                value={option.value}
                label={option.label}
                onClick={() => handlePressChange(option.value)}
              />
            )
          )}
        </WordpressToggleGroupControl>
      </Wrap>
    );
  }
);

export { ToggleGroup };
