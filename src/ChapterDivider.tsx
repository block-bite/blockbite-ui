import classNames from 'classnames';

type ChapterDividerProps = {
  id?: string;
  title?: string;
  className?: string;
  help?: string;
};

export const ChapterDivider = ({
  id = '',
  title,
  className,
  help,
}: ChapterDividerProps) => {
  return (
    <div {...(id ? { id } : null)} className={classNames('mb-4', className)}>
      <div className="flex w-full flex-wrap items-center gap-2">
        <small className="shrink-1 text-[12px]">{title}</small>
        <span className="h-[1px] w-full bg-easy"></span>
      </div>
      {help && <small className="w-full shrink-0 text-[12px]">{help}</small>}
    </div>
  );
};
