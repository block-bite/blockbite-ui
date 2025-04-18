type Props = {
  icon?: JSX.Element;
  title: string;
  description: string;
  children?: React.ReactNode;
  [key: string]: any;
};

export default function EmptyState({
  icon,
  title,
  description,
  children = null,
  ...rest
}: Props) {
  return (
    <div {...rest}>
      <div className="flex h-full w-full flex-col items-center justify-center text-center !font-sans">
        <div className="max-w-sm">
          {icon && <div className="mx-auto !text-gray-400">{icon}</div>}
          <h3 className="text-gray-medium mt-2 !font-sans text-sm font-medium">
            {title}
          </h3>
          <p className="mt-1 !font-sans text-sm !text-gray-500">
            {description}
          </p>
          {children && <div className="mt-4">{children}</div>}
        </div>
      </div>
    </div>
  );
}
