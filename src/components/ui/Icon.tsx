import { Wrap } from '@components/ui/Wrap';

type IconProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>> | null; // Type it as a React Functional Component
  className?: string;
};

export const Icon = ({ icon: IconComponent, className = '' }: IconProps) => {
  if (!IconComponent) return null;

  return (
    <Wrap className={`blockbite--icon`}>
      <IconComponent className={className} />{' '}
      {/* Render the functional component */}
    </Wrap>
  );
};
