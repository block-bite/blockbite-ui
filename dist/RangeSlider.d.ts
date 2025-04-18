export type RangeControlType = {
    defaultValue: string;
    label: string;
    min: number;
    max: number;
    withInputField?: boolean;
    onValueChange: (value: string) => void;
    gridMode?: boolean;
    showTooltip?: boolean;
    [key: string]: any;
};
declare const RangeControl: React.FC<RangeControlType>;
export default RangeControl;
