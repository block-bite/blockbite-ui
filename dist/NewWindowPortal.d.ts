type Props = {
    windowInstance: Window;
    onClose: () => void;
    children: React.ReactNode;
};
export declare const NewWindowPortal: ({ windowInstance, onClose, children, }: Props) => import("react").ReactPortal;
export {};
