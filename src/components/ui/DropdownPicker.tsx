import ChevronDownIcon from '@blockbite/icons/dist/ChevronDown';
import { Icon } from '@components/ui/Icon';
import { DropdownMenu } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import classNames from 'classnames';

type DropdownPickerProps = {
  label?: string;
  className?: string;
  defaultValue: string;
  defaultIcon?: any;
  options: {
    icon?: React.ReactElement;
    label: string;
    subtitle?: string;
    value: string;
  }[];
  onPressedChange: (value: string | null) => void; // Updated to allow `null` for reset
};

export const DropdownPicker = ({
  label,
  className,
  defaultValue,
  defaultIcon = ChevronDownIcon,
  onPressedChange,
  options,
}: DropdownPickerProps) => {
  const [currentOption, setCurrentOption] = useState<string | null>(null);

  useEffect(() => {
    setCurrentOption(defaultValue);
  }, [defaultValue]);

  const allOptions = [
    ...options.map((option) => ({
      icon: option.icon,
      label: option.label,
      title: option.label,
      value: option.value,
      onClick: () => {
        setCurrentOption(option.value);
        onPressedChange(option.value);
      },
    })),
    {
      icon: <Icon icon={defaultIcon} />,
      title: 'Reset',
      value: 'reset',
      onClick: () => {
        setCurrentOption('reset');
        onPressedChange('reset');
      },
    },
  ];

  return (
    <DropdownMenu
      controls={allOptions}
      className={classNames(
        'blockbite-ui__dropdown-picker border-primary border',
        className
      )}
      icon={
        options.find((option) => option.value === currentOption)?.icon || (
          <Icon icon={defaultIcon} />
        )
      }
      label={label || 'Select'}
    />
  );
};
