import { Wrap } from '@components/ui/Wrap';
import classNames from 'classnames';

type ChapterProps = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
};

export const Chapter = ({ children, title }: ChapterProps) => {
  return (
    <Wrap
      className={classNames(
        'text-gray-medium my-2 flex items-center gap-1 text-[12px] font-medium',
        classNames
      )}
    >
      {title && <Wrap className="font-medium">{title}</Wrap>}
      {children}
    </Wrap>
  );
};
