import { Wrap } from '@components/ui/Wrap';
import { forwardRef } from '@wordpress/element';
import classNames from 'classnames';

type TextControlProps = {
  className?: string;
  inputClassName?: string;
  defaultValue: any;
  children?: React.ReactNode;
  onChange?: (value: string) => void;
  onClick?: () => void;
  readOnly?: boolean;
  placeholder?: string;
  onBlur?: (value) => void;
  type?: string;
  label?: string;
  helper?: string;
};

export const TextControl = forwardRef<HTMLInputElement, TextControlProps>(
  (
    {
      onClick,
      onChange,
      className,
      defaultValue,
      children,
      inputClassName,
      readOnly,
      placeholder,
      onBlur,
      type = 'text',
      label,
      helper = '',
    },
    ref
  ) => {
    const fieldId = `text-control-${Math.random().toString(36).substring(2, 15)}`;

    return (
      <Wrap className={classNames('flex items-center p-0', className)}>
        {label ? (
          <label htmlFor={fieldId} className="text-primary !m-0 !mb-0 !mr-2">
            {label}
          </label>
        ) : null}
        <input
          id={fieldId}
          className={classNames(
            'border-primary !m-0 !mb-0 h-[32px] !rounded-none border border-opacity-70 focus:outline-none focus:ring-0',
            inputClassName
          )}
          type={type}
          value={defaultValue}
          placeholder={placeholder}
          onFocus={() => onClick && onClick()}
          onBlur={(e) => {
            if (onClick) onClick();
            if (onBlur) onBlur(e.target.value);
          }}
          onChange={(e) => onChange && onChange(e.target.value)}
          readOnly={readOnly}
          ref={ref}
        />
        <span>{children}</span>
        {helper && <p className="text-primary !m-0 !mb-0 text-xs">{helper}</p>}
      </Wrap>
    );
  }
);

TextControl.displayName = 'TextControl'; // Recommended for debugging
