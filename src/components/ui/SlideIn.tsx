import { Wrap } from '@components/ui/Wrap';
import { useEffect, useState } from '@wordpress/element';
import classNames from 'classnames';

type SlideInProps = {
  children: React.ReactNode;
  className?: string;
  watch?: any;
};

export const SlideIn = ({ children, watch, className }: SlideInProps) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSlide(1);
    }, 250);
  }, [watch]);

  return (
    <Wrap
      className={classNames(
        className,
        'duration-50 transform transition-all ease-in-out',
        {
          'translate-x-0': slide === 1,
          '-translate-x-full': slide === 0,
        }
      )}
    >
      {children}
    </Wrap>
  );
};
