import { useEffect, useRef, useState } from '@wordpress/element';

type DraggablePanelProps = {
  children: React.ReactNode;
};

export default function FloatingPanel({
  children,
}: DraggablePanelProps & {
  children: React.ReactNode;
}) {
  const panelRef = useRef(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragging) {
        setPosition({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        });
      }
    };

    const handleMouseUp = () => setDragging(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, offset]);

  const startDragging = (e) => {
    const rect = panelRef.current.getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setDragging(true);
  };

  return (
    <div className="bb_">
      <div
        ref={panelRef}
        className="fixed bg-white shadow-xl rounded-2xl p-4 w-[400px] h-[550px] z-[9999]"
        style={{ left: position.x, top: position.y }}
      >
        {children}
        <div
          className="absolute top-1 right-1 cursor-move w-5 h-5 bg-gray-300 rounded"
          onMouseDown={startDragging}
        ></div>
      </div>
    </div>
  );
}
