import {
  Children,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useState,
} from '@wordpress/element';

import { Modal as WordpressModal } from '@wordpress/components';
import classNames from 'classnames';

type ModalContextType = {
  closeModal: () => void;
  openModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};

type ModalProps = {
  children: React.ReactElement | React.ReactElement[];
  defaultOpen: boolean;
  onOpenChange: (checked: boolean) => void;
  title: string;
  className?: string;
};

const Modal: React.FC<ModalProps> = ({
  children,
  defaultOpen,
  onOpenChange,
  title,
  className,
}) => {
  const [isOpen, setOpen] = useState(false);

  // Sync `isOpen` with `defaultOpen` when `defaultOpen` changes
  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  useEffect(() => {
    onOpenChange(isOpen);
  }, [isOpen, onOpenChange]);

  return (
    <ModalContext.Provider value={{ closeModal, openModal }}>
      {/* Render MOdalTrigger */}
      {Children.map(children, (child) => {
        return isValidElement(child) && child.type === ModalTrigger
          ? child
          : null;
      })}
      {isOpen && (
        <WordpressModal
          className={classNames('blockbite-ui__modal bb_', className)}
          onRequestClose={closeModal}
          title={title}
        >
          <div className="relative">
            {/* Render ModalHeader */}
            {Children.map(children, (child) => {
              return isValidElement(child) && child.type === ModalHeader
                ? child
                : null;
            })}
            {/* Render ModalContent */}
            {Children.map(children, (child) => {
              return isValidElement(child) && child.type === ModalContent
                ? child
                : null;
            })}
            {/* Render ModalFooter */}
            {Children.map(children, (child) => {
              return isValidElement(child) && child.type === ModalFooter
                ? child
                : null;
            })}
          </div>
        </WordpressModal>
      )}
    </ModalContext.Provider>
  );
};

// Header component for modal
const ModalHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '', ...props }) => (
  <div
    className={classNames(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

// Footer component for modal
const ModalFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '', ...props }) => (
  <div
    className={classNames(
      'border-gray-light fixed bottom-0 left-0 right-0 flex h-[4rem] flex-row items-center justify-end space-x-2 border-t bg-white px-4',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

// Description component for modal
const ModalContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '', ...props }) => (
  <div
    className={classNames('text-gray-medium px-4 pb-4 text-sm', className)}
    {...props}
  >
    {children}
  </div>
);

const ModalClose: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { closeModal } = useModalContext();
  return (
    <div onClick={closeModal} className="cursor-pointer">
      {children}
    </div>
  );
};

const ModalTrigger: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { openModal } = useModalContext();
  return (
    <div onClick={openModal} className="cursor-pointer">
      {children}
    </div>
  );
};

export {
  Modal,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTrigger,
};
