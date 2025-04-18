import classNames from 'classnames';

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Badge = ({ children, className, onClick }: BadgeProps) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        className,
        'inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800'
      )}
    >
      {children}
    </div>
  );
};
