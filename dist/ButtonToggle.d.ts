type ButtonToggleProps = {
    children?: React.ReactNode;
    className?: string;
    value: string;
    defaultPressed: string;
    variant?: "primary" | "secondary";
    size?: "small" | "default" | "compact";
    icon?: any;
    display?: "icon" | "label" | "" | null;
    onPressedChange: (value: string) => void;
    label?: string;
};
type ButtonToggleGroupOptionProp = {
    value: string;
    label: string;
    tooltip?: string;
    icon?: any;
    children?: React.ReactNode;
};
type ButtonToggleGroupProps = {
    className?: string;
    options: ButtonToggleGroupOptionProp[];
    defaultPressed?: string;
    toggle?: boolean;
    size?: "small" | "default" | "compact";
    tabs?: boolean;
    display?: "icon" | "label" | "" | null;
    variant?: "primary" | "secondary";
    stretch?: boolean;
    icon?: any;
    onPressedChange?: (value: string) => void;
};
declare const ButtonToggle: React.FC<ButtonToggleProps>;
declare const ButtonToggleGroup: React.FC<ButtonToggleGroupProps>;
export default ButtonToggleGroup;
export { ButtonToggle, ButtonToggleGroup };
