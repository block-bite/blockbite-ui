import { Wrap } from "./Wrap";
import { ToggleControl as Switch } from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import classNames from "classnames";

type ToggleSwitchProps = {
  label?: string;
  className?: string;
  onChange?: (checked: boolean) => void;
  checked?: boolean;
};

export const ToggleSwitch = ({
  label,
  className,
  onChange,
  checked = false, // Default to false if undefined, so it's always controlled
}: ToggleSwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <Wrap className={classNames(className, "flex items-center gap-2")}>
      <Switch
        checked={isChecked}
        label={label}
        onChange={(e) => {
          setIsChecked(e);
          onChange && onChange(e);
        }}
      ></Switch>
    </Wrap>
  );
};
