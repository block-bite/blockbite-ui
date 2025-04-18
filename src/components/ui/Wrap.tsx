type WrapProps = {
  children: React.ReactNode;
  className?: string;
  important?: boolean;
  onClick?: (e: React.MouseEvent) => void;
};

export const Wrap = ({
  children,
  className,
  important = false,
  onClick,
}: WrapProps) => {
  if (important) {
    return (
      <div className="bb_" onClick={onClick}>
        <div className={className}>{children}</div>
      </div>
    );
  }

  return <div className={className}>{children}</div>;
};
