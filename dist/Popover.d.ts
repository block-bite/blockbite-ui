type PopoverProps = {
    children: React.ReactNode;
    className?: string;
    defaultValue?: string;
    value?: string;
    position?: any;
    visible?: boolean;
    onClick?: () => void;
    onVisibleChange?: (value: boolean) => void;
};
export declare const Popover: React.FC<PopoverProps>;
export default Popover;
