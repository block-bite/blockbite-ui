type TextControlProps = {
    className?: string;
    inputClassName?: string;
    defaultValue: any;
    children?: React.ReactNode;
    onChange?: (value: string) => void;
    onClick?: () => void;
    readOnly?: boolean;
    placeholder?: string;
    onBlur?: (value: any) => void;
    type?: string;
    label?: string;
    helper?: string;
};
export declare const TextControl: import("react").ForwardRefExoticComponent<TextControlProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
