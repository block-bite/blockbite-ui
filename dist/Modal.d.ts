type ModalContextType = {
    closeModal: () => void;
    openModal: () => void;
};
export declare const useModalContext: () => ModalContextType;
type ModalProps = {
    children: React.ReactElement | React.ReactElement[];
    defaultOpen: boolean;
    onOpenChange: (checked: boolean) => void;
    title: string;
    className?: string;
};
declare const Modal: React.FC<ModalProps>;
declare const ModalHeader: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
declare const ModalFooter: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
declare const ModalContent: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
declare const ModalClose: React.FC<{
    children: React.ReactNode;
}>;
declare const ModalTrigger: React.FC<{
    children: React.ReactNode;
}>;
export { Modal, ModalClose, ModalContent, ModalFooter, ModalHeader, ModalTrigger, };
