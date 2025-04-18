interface OptionPanelDropdownProps {
    defaultValue: string;
    options: {
        label: string;
        value: string;
    }[];
    onPressedChange: (value: string) => void;
    swatch?: boolean;
}
export default function OptionPanelDropdown({ defaultValue, options, swatch, onPressedChange, }: OptionPanelDropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
