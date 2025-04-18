import Cross2Icon from '@blockbite/icons/dist/Cross2';
import { Button, Popover as WordpressPopover } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

type PopoverProps = {
  children: React.ReactNode;
  className?: string;
  defaultValue?: string;
  value?: string;
  position?: any;
  visible?: boolean;
  onClick?: () => void;
  onVisibleChange?: (value: boolean) => void;
};

export const Popover: React.FC<PopoverProps> = ({
  children,
  className,
  position,
  visible,
  onClick,
  onVisibleChange,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(!!visible);

  useEffect(() => {
    if (visible !== undefined) {
      setIsVisible(visible);
    }
  }, [visible]);

  const toggleVisible = () => {
    const newValue = !isVisible;
    setIsVisible(newValue);
    onVisibleChange && onVisibleChange(newValue);
  };

  return (
    <>
      {isVisible && (
        <WordpressPopover
          position={position}
          className="blockbite-ui__popover bb_"
          onClick={onClick}
          onFocusOutside={() => {
            setIsVisible(false);
            onVisibleChange && onVisibleChange(false);
          }}
        >
          <div className={className}>
            <div className="relative h-full w-full p-4">
              <Button
                onClick={toggleVisible}
                size="small"
                className="close-button absolute right-0 top-0"
              >
                <Cross2Icon />
              </Button>
              {children}
            </div>
          </div>
        </WordpressPopover>
      )}
    </>
  );
};

export default Popover;
