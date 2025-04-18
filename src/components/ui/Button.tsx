import { Icon } from '@components/ui/Icon';
import { Button as WordpressButton } from '@wordpress/components';
import classNames from 'classnames';

type ButtonProps = {
  children?: React.ReactNode;
  asChild?: boolean;
  className?: string;
  display?: 'icon' | 'icon-lg' | 'label' | 'auto' | '' | null;
  onClick?: () => void;
  label?: string;
  size?: 'small' | 'default' | 'compact';
  variant?: 'primary' | 'secondary' | 'link' | 'primary' | 'tertiary';
  icon?: any;
  disabled?: boolean;
};

export const Button = ({
  children,
  size = 'default',
  label,
  className,
  onClick,
  variant = 'primary',
  display = 'auto',
  icon,
  disabled = false,
}: ButtonProps) => {
  const isIconDisplay = display === 'icon' || display === 'icon-lg';

  return (
    <WordpressButton
      size={size}
      variant={variant}
      label={label}
      showTooltip={true}
      disabled={disabled}
      className={classNames(
        className,
        'blockbite-ui__button',
        'flex items-center justify-center gap-1',
        { 'is-primary': variant === 'primary' },
        { 'is-secondary': variant === 'secondary' },
        { 'is-link': variant === 'link' },
        { 'is-tertiary': variant === 'tertiary' },
        { 'is-icon': display === 'icon' }
      )}
      onClick={onClick}
    >
      {icon && (
        <Icon
          icon={icon}
          className={classNames({ 'h-4 w-4': display === 'icon-lg' })}
        />
      )}
      {!isIconDisplay ? children : null}
      {label && !children && !isIconDisplay ? <span>{label}</span> : null}
    </WordpressButton>
  );
};
