import { Wrap } from '@components/ui/Wrap';
import classNames from 'classnames';

type ScrollListProps = {
  children: React.ReactNode;
  className?: string;
  height?: 'small' | 'medium' | 'large';
};

export const ScrollList: React.FC<ScrollListProps> = ({
  children,
  className = '',
  height = 'large',
}) => (
  <Wrap
    className={classNames('scrollbar relative overflow-y-scroll', className, {
      'h-[400px]': height === 'large',
      'h-[300px]': height === 'medium',
      'h-[200px]': height === 'small',
    })}
  >
    {children}
  </Wrap>
);
