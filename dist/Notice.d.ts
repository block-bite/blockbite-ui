type NoticeProps = {
    children: React.ReactNode;
    className?: string;
    status?: "success" | "error" | "warning" | "info";
};
export declare const Notice: ({ children, status, className, }: NoticeProps) => import("react/jsx-runtime").JSX.Element;
export {};
