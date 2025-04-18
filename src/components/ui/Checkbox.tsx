import { Wrap } from '@components/ui/Wrap';
import { CheckboxControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

type CheckboxProps = {
  id: string;
  label?: string;
  help?: string;
  defaultChecked?: boolean;
  onCheckedChange: (checked: boolean, id: string) => void;
};

export const Checkbox = ({ label, help, defaultChecked }: CheckboxProps) => {
  const [isChecked, setChecked] = useState(defaultChecked);

  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  return (
    <Wrap className="blockbite-ui__checkbox mx-1 flex items-center gap-2">
      <CheckboxControl
        label={label}
        help={help}
        checked={isChecked}
        onChange={setChecked}
      />
    </Wrap>
  );
};
