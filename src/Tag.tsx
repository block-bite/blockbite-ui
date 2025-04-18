import classNames from 'classnames';

type TagProps = {
  children: React.ReactNode;
  className?: string;
  color:
    | 'blue'
    | 'ruby'
    | 'tomato'
    | 'red'
    | 'crimson'
    | 'pink'
    | 'plum'
    | 'purple'
    | 'violet'
    | 'iris'
    | 'indigo'
    | 'cyan'
    | 'teal'
    | 'jade'
    | 'green'
    | 'grass'
    | 'brown'
    | 'orange'
    | 'sky'
    | 'gray';
  asButton?: boolean;
  onClick?: () => void;
};

export const Tag = ({
  children,
  onClick,
  color = 'blue',
  className,
}: TagProps) => {
  return (
    <button onClick={onClick}>
      <div color={color} className={classNames(className)}>
        {children}
      </div>
    </button>
  );
};
