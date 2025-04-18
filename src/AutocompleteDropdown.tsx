import ChevronDownIcon from "@blockbite/icons/dist/ChevronDown";
import type { OptionProps } from "./types";
import { ButtonToggle } from "./ButtonToggle";
import { Wrap } from "./Wrap";
import { Button, Dropdown, TextControl } from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import classNames from "classnames";

interface OptionPanelDropdownProps {
  defaultValue: string;
  options: { label: string; value: string }[];
  onPressedChange: (value: string) => void;
  swatch?: boolean;
}

export default function OptionPanelDropdown({
  defaultValue,
  options,
  swatch,
  onPressedChange,
}: OptionPanelDropdownProps) {
  const [activeKeyword, setActiveKeyword] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<OptionProps[]>([]);

  useEffect(() => {
    setFilteredOptions(
      options.filter((option: OptionProps) =>
        option.label.toLowerCase().includes(activeKeyword.toLowerCase())
      )
    );
  }, [activeKeyword, options]);

  useEffect(() => {
    setActiveKeyword("");
    setFilteredOptions(options);
  }, [defaultValue, options]);

  return (
    <Dropdown
      className="option-panel-dropdown"
      contentClassName="option-panel-dropdown-content"
      popoverProps={{ placement: "bottom-start" }}
      renderToggle={({ isOpen, onToggle }) => (
        <Wrap important>
          <Button
            variant="secondary"
            size="small"
            onClick={onToggle}
            aria-expanded={isOpen}
          >
            <div className="flex items-center gap-1 !bg-transparent !p-0 !text-[11px] !text-current">
              {swatch && (
                <div
                  className={classNames(
                    `h-3 w-3 rounded-full bg-${defaultValue}`
                  )}
                />
              )}
              <span>{defaultValue || "Select option…"}</span>
              <ChevronDownIcon />
            </div>
          </Button>
        </Wrap>
      )}
      renderContent={() => (
        <Wrap important>
          <div className="w-52">
            <TextControl
              label="Search options"
              value={activeKeyword}
              onChange={(value) => setActiveKeyword(value)}
              autoComplete="off"
            />
            <div className="grid grid-cols-2 gap-1 !bg-transparent !p-0 !pt-2">
              {filteredOptions.length === 0 && (
                <div className="!text-gray-medium col-span-2 pb-2 text-center !text-[11px]">
                  No options found.
                </div>
              )}
              {filteredOptions.map((option: OptionProps, index: Number) => (
                <ButtonToggle
                  key={`ButtonToggle__${option.value}___${index}`}
                  className={classNames({
                    "bg-primary": option.value,
                  })}
                  size="small"
                  value={option.value.toString()}
                  defaultPressed={defaultValue}
                  onPressedChange={(value: string) => {
                    onPressedChange(value ? option.value : "");
                  }}
                >
                  {swatch && (
                    <div
                      className={classNames(
                        `mr-3 h-3 w-3 rounded-full bg-${option.value}`
                      )}
                    />
                  )}
                  {option.label}
                </ButtonToggle>
              ))}
            </div>
          </div>
        </Wrap>
      )}
    />
  );
}
