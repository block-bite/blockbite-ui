type DropdownPickerProps = {
    label?: string;
    className?: string;
    defaultValue: string;
    defaultIcon?: any;
    options: {
        icon?: React.ReactElement;
        label: string;
        subtitle?: string;
        value: string;
    }[];
    onPressedChange: (value: string | null) => void;
};
export declare const DropdownPicker: ({ label, className, defaultValue, defaultIcon, onPressedChange, options, }: DropdownPickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
