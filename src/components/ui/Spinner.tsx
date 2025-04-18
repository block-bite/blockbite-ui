import { Spinner as WordpressSpinner } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import classNames from 'classnames';

type SpinnerProps = {
  label?: string;
  className?: string;
  defaultValue: boolean;
};

export const Spinner = ({ className, defaultValue }: SpinnerProps) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    if (defaultValue) {
      setIsLoading(true);
    }
  }, [isLoading, defaultValue]);

  return isLoading && <WordpressSpinner className={classNames(className)} />;
};
