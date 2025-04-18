import { createPortal, useEffect, useMemo } from '@wordpress/element';

function copyStyles(sourceDoc, targetDoc) {
  Array.from(sourceDoc.styleSheets).forEach((styleSheet: any) => {
    try {
      if (styleSheet.cssRules) {
        const newStyleEl = targetDoc.createElement('style');
        Array.from(styleSheet.cssRules).forEach((cssRule: any) => {
          newStyleEl.appendChild(targetDoc.createTextNode(cssRule.cssText));
        });
        targetDoc.head.appendChild(newStyleEl);
      } else if (styleSheet.href) {
        const newLinkEl = targetDoc.createElement('link');
        newLinkEl.rel = 'stylesheet';
        newLinkEl.href = styleSheet.href;
        targetDoc.head.appendChild(newLinkEl);
      }
    } catch (e) {
      if (styleSheet.href) {
        const newLinkEl = targetDoc.createElement('link');
        newLinkEl.rel = 'stylesheet';
        newLinkEl.href = styleSheet.href;
        targetDoc.head.appendChild(newLinkEl);
      } else {
        // eslint-disable-next-line no-console
        console.warn('Error copying styles:', e);
      }
    }
  });
}

type Props = {
  windowInstance: Window;
  onClose: () => void;
  children: React.ReactNode;
};

export const NewWindowPortal = ({
  windowInstance,
  onClose,
  children,
}: Props) => {
  const containerEl = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    const win = windowInstance;

    win.document.body.innerHTML = '';
    win.document.body.appendChild(containerEl);
    win.document.body.classList.add('bb_');
    copyStyles(document, win.document);
    win.document.title = document.title || 'Blockbite Editor';

    const handleBeforeUnload = () => {
      setTimeout(onClose, 100);
    };

    win.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      win.removeEventListener('beforeunload', handleBeforeUnload);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowInstance]);

  // Typecasting: https://github.com/vercel/next.js/discussions/64753
  return createPortal(children as any, containerEl);
};
