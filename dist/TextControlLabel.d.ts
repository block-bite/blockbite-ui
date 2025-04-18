type TextControlLabelProps = {
    className?: string;
    defaultValue: any;
    children?: React.ReactNode;
    onChange?: (value: string) => void;
    onClick?: () => void;
};
export declare const TextControlLabel: ({ onChange, defaultValue, children, }: TextControlLabelProps) => import("react/jsx-runtime").JSX.Element;
export {};
