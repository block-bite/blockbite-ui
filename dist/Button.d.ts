type ButtonProps = {
    children?: React.ReactNode;
    asChild?: boolean;
    className?: string;
    display?: 'icon' | 'icon-lg' | 'label' | 'auto' | '' | null;
    onClick?: () => void;
    label?: string;
    size?: 'small' | 'default' | 'compact';
    variant?: 'primary' | 'secondary' | 'link' | 'primary' | 'tertiary';
    icon?: any;
    disabled?: boolean;
};
export declare const Button: ({ children, size, label, className, onClick, variant, display, icon, disabled, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
