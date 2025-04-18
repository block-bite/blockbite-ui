type SelectControlWrapperProps = {
    className?: string;
    defaultValue: string;
    children?: React.ReactNode;
    options: any[];
    label?: string;
    onChange?: (value: string) => void;
};
export declare const SelectControlWrapper: ({ onChange, className, defaultValue, options, label, }: SelectControlWrapperProps) => import("react/jsx-runtime").JSX.Element;
export {};
