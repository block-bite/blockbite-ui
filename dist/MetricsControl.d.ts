type MetricsControlProps = {
    defaultUnit: string;
    defaultValue: string;
    units?: string[] | 'native' | 'percent' | 'grid' | 'arbitrary' | 'fluid' | 'screen' | 'all';
    inputClassName?: string;
    onValueChange: (value: string) => void;
    onUnitChange: (unit: string) => void;
};
declare const MetricsControl: React.FC<MetricsControlProps>;
export default MetricsControl;
