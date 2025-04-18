import { Wrap } from '@components/ui/Wrap';
import { FocalPointPicker } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

type FocalPointControlProps = {
  defaultValue: string;
  onValueChange: (value: string) => void;
  url?: string;
};

const FocalPointControl: React.FC<FocalPointControlProps> = ({
  defaultValue,
  onValueChange,
  url,
}) => {
  const [focalPoint, setFocalPoint] = useState({
    x: 0.5,
    y: 0.5,
  });

  useEffect(() => {
    onValueChange(
      `[${(focalPoint.x * 100).toFixed(2)}%_${(focalPoint.y * 100).toFixed(2)}%]`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focalPoint]);

  useEffect(() => {
    // default value is in the format of [x%_y%] parse to get the x and y values
    if (defaultValue.includes('%')) {
      const [x, y] = defaultValue
        .replace('[', '')
        .replace('%]', '')
        .split('_')
        .map((value: string) => parseFloat(value) / 100);

      setFocalPoint({
        x,
        y,
      });
    }
  }, [defaultValue]);

  return (
    <Wrap className="relative flex flex-col">
      <FocalPointPicker
        url={url}
        value={focalPoint}
        onDrag={(value) => setFocalPoint(value)}
        onChange={(value) => setFocalPoint(value)}
      />
    </Wrap>
  );
};

export default FocalPointControl;
