import { Icon } from '@components/ui/Icon';
import { Wrap } from '@components/ui/Wrap';
import { Button as WordpressButton } from '@wordpress/components';
import { memo, useCallback, useEffect, useState } from '@wordpress/element';
import classNames from 'classnames';

type ButtonToggleProps = {
  children?: React.ReactNode;
  className?: string;
  value: string;
  defaultPressed: string;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'default' | 'compact';
  icon?: any;
  display?: 'icon' | 'label' | '' | null;
  onPressedChange: (value: string) => void;
  label?: string;
};

type ButtonToggleGroupOptionProp = {
  value: string;
  label: string;
  tooltip?: string;
  icon?: any;
  children?: React.ReactNode;
};

type ButtonToggleGroupProps = {
  className?: string;
  options: ButtonToggleGroupOptionProp[];
  defaultPressed?: string;
  toggle?: boolean;
  size?: 'small' | 'default' | 'compact';
  tabs?: boolean;
  display?: 'icon' | 'label' | '' | null;
  variant?: 'primary' | 'secondary';
  stretch?: boolean;
  icon?: any;
  onPressedChange?: (value: string) => void;
};

const ButtonToggle: React.FC<ButtonToggleProps> = memo(
  ({
    children,
    className,
    value,
    variant = 'secondary',
    defaultPressed,
    onPressedChange,
    icon,
    size = 'compact',
    display = 'auto',
    label,
  }) => {
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
      setIsPressed(defaultPressed === value ? true : false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultPressed]);

    const handleClick = useCallback(() => {
      setIsPressed((prev) => !prev);
      onPressedChange(value);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPressed, onPressedChange]);

    return (
      <WordpressButton
        aria-label={label}
        className={classNames(className, 'blockbite-ui__button--default')}
        value={value}
        size={size}
        label={label}
        variant={variant}
        showTooltip={true}
        isPressed={isPressed}
        onClick={handleClick}
      >
        {icon && <Icon icon={icon} />}
        {display !== 'icon' ? children : null}
        {label && !children && display !== 'icon' ? <span>{label}</span> : null}
      </WordpressButton>
    );
  }
);

const ButtonToggleGroup: React.FC<ButtonToggleGroupProps> = memo(
  ({
    className,
    defaultPressed = '',
    toggle = true,
    display = 'auto',
    options,
    size = 'compact',
    tabs = false,
    variant = 'secondary',
    stretch = false,
    onPressedChange,
  }) => {
    const [isPressed, setIsPressed] = useState<string>(defaultPressed);

    useEffect(() => {
      setIsPressed(defaultPressed);
    }, [defaultPressed]);

    const handleButtonClick = useCallback(
      (value: string) => {
        const newValue = toggle && isPressed === value ? '' : value;
        setIsPressed(newValue);
        onPressedChange?.(newValue);
      },
      [isPressed, onPressedChange, toggle]
    );

    const renderContent = (option: ButtonToggleGroupOptionProp) => {
      if (display === 'icon' && option?.icon) {
        return <Icon icon={option.icon} />;
      } else if (display === 'label') {
        return <span>{option.label}</span>;
      }
      return (
        <span className="flex items-center justify-center gap-1">
          {option.icon && <Icon icon={option.icon} />}
          <span>{option.label}</span>
        </span>
      );
    };

    return (
      <Wrap
        className={classNames(
          'blockbite-ui__button-group flex flex-wrap gap-1',
          className,
          tabs ? 'blockbite-ui__button-group--tabs' : ''
        )}
      >
        {options.map((option, index) => (
          <WordpressButton
            key={`ButtonToggleGroup__${option.value}__${option.label}__${index}`}
            className={classNames('blockbite-ui__button--default', {
              grow: stretch,
              'justify-center': stretch,
            })}
            // tooltip
            aria-label={option.label}
            showTooltip={true}
            value={option.value}
            size={size}
            label={option?.tooltip || option.label}
            variant={variant}
            isPressed={isPressed === option.value}
            onClick={() => handleButtonClick(option.value)}
          >
            {renderContent(option)}
            {option.children && option.children}
          </WordpressButton>
        ))}
      </Wrap>
    );
  }
);

export default ButtonToggleGroup;
export { ButtonToggle, ButtonToggleGroup };
