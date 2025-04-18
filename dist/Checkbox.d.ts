type CheckboxProps = {
    id: string;
    label?: string;
    help?: string;
    defaultChecked?: boolean;
    onCheckedChange: (checked: boolean, id: string) => void;
};
export declare const Checkbox: ({ label, help, defaultChecked }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
export {};
