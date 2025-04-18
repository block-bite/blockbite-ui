type Props = {
    icon?: JSX.Element;
    title: string;
    description: string;
    children?: React.ReactNode;
    [key: string]: any;
};
export default function EmptyState({ icon, title, description, children, ...rest }: Props): import("react/jsx-runtime").JSX.Element;
export {};
