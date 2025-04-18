import Pencil1Icon from "@blockbite/icons/dist/Pencil1";
import { Wrap } from "./Wrap";
import { TextControl } from "@wordpress/components";

type TextControlLabelProps = {
  className?: string;
  defaultValue: any;
  children?: React.ReactNode;
  onChange?: (value: string) => void;
  onClick?: () => void;
};

export const TextControlLabel = ({
  onChange,
  defaultValue,
  children,
}: TextControlLabelProps) => {
  return (
    <Wrap className="blockbite-ui__text-control-label flex items-center">
      <span className="outline-b-2 relative block -outline-offset-2 outline-black">
        <TextControl type="text" value={defaultValue} onChange={onChange} />
        <Pencil1Icon className="absolute right-1 top-2" />
      </span>{" "}
      {children}
    </Wrap>
  );
};
