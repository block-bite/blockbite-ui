type TabsProps = {
    className?: string;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    children?: React.ReactNode;
};
export declare const TabsWrapper: ({ children, defaultValue, value, onValueChange, ...rest }: TabsProps) => import("react/jsx-runtime").JSX.Element;
type TabsListProps = {
    options: {
        name: string;
        title: string;
        icon?: any;
    }[];
    children?: React.ReactNode;
    onValueChange?: (value: string) => void;
    className?: string;
};
export declare const TabsList: ({ options, children, className, onValueChange, }: TabsListProps) => import("react/jsx-runtime").JSX.Element;
type TabsContentProps = {
    value: string;
    children: React.ReactNode;
    className?: string;
};
export declare const TabsContent: ({ value, children, className, }: TabsContentProps) => import("react/jsx-runtime").JSX.Element;
export {};
