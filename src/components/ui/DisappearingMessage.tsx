import { useEffect, useRef, useState } from '@wordpress/element';

type DisappearingMessageProps = {
  duration: number;
  children: React.ReactNode;
  trigger: boolean;
};

export const DisappearingMessage = ({
  duration,
  children,
  trigger,
}: DisappearingMessageProps) => {
  const [alert, setAlert] = useState(false);
  const isMountingRef = useRef(false);

  useEffect(() => {
    isMountingRef.current = true;
  }, []);

  useEffect(() => {
    let timeoutId = null;

    // Only run on subsequent renders
    if (trigger && !isMountingRef.current) {
      setAlert(true);
      timeoutId = setTimeout(() => {
        setAlert(false);
      }, duration);
    } else {
      isMountingRef.current = false;
    }

    // Cleanup timeout on unmount or when `trigger` changes
    return () => {
      clearTimeout(timeoutId);
    };
  }, [trigger, duration]);

  return alert && <>{children}</>;
};
