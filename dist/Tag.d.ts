type TagProps = {
    children: React.ReactNode;
    className?: string;
    color: 'blue' | 'ruby' | 'tomato' | 'red' | 'crimson' | 'pink' | 'plum' | 'purple' | 'violet' | 'iris' | 'indigo' | 'cyan' | 'teal' | 'jade' | 'green' | 'grass' | 'brown' | 'orange' | 'sky' | 'gray';
    asButton?: boolean;
    onClick?: () => void;
};
export declare const Tag: ({ children, onClick, color, className, }: TagProps) => import("react/jsx-runtime").JSX.Element;
export {};
