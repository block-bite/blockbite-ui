type ToggleProps = {
    className?: string;
    options: {
        value: string;
        label: string;
        icon?: React.ReactElement;
    }[];
    defaultPressed: string;
    label?: string | boolean;
    variant?: 'primary' | 'secondary';
    display?: 'icon' | 'label';
    size?: 'small' | 'default' | 'compact';
    onPressedChange: (value: string) => void;
};
declare const ToggleGroup: React.FC<ToggleProps>;
export { ToggleGroup };
