import { SelectControl as WordpressSelect } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

type SelectControlWrapperProps = {
  className?: string;
  defaultValue: string;
  children?: React.ReactNode;
  options: any[];
  label?: string;
  onChange?: (value: string) => void;
};

export const SelectControlWrapper = ({
  onChange,
  className,
  defaultValue,
  options,
  label = '',
}: SelectControlWrapperProps) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (val: string) => {
    setValue(val);
    if (onChange) {
      onChange(val);
    }
  };

  return (
    <div className={className}>
      {options && options.length > 0 && (
        <WordpressSelect
          label={label || ''}
          value={value || ''}
          onChange={handleChange}
          options={[{ value: '', label: 'Select an option' }, ...options]}
        />
      )}
      {!options && <p>No options available</p>}
    </div>
  );
};
