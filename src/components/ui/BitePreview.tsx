import { createPortal, useEffect, useRef, useState } from '@wordpress/element';

const BitePreview = ({ htmlContent, cssContent, frontendAssets }) => {
  const iframeRef = useRef(null);
  const [iframeBody, setIframeBody] = useState(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    if (iframe) {
      iframe.onload = () => {
        const iframeDocument =
          iframe.contentDocument || iframe.contentWindow.document;

        if (iframeDocument) {
          setIframeBody(iframeDocument.body); // Set the iframe body for portal

          // Inject CSS content directly
          const styleTag = iframeDocument.createElement('style');
          styleTag.innerHTML = cssContent;
          iframeDocument.head.appendChild(styleTag);

          // Adopt or Create Frontend Assets
          frontendAssets.forEach(({ type, id, url }) => {
            const existingElement = document.getElementById(id);

            if (existingElement) {
              // If the asset exists in the parent, move it to the iframe
              const adoptedElement = document.adoptNode(
                existingElement.cloneNode(true)
              );
              iframeDocument.head.appendChild(adoptedElement);
            } else {
              // Create a new script or style if not found
              const newElement = iframeDocument.createElement(
                type === 'script' ? 'script' : 'link'
              );
              newElement.id = id;

              if (type === 'script') {
                newElement.src = url;
                newElement.async = true;
              } else {
                newElement.rel = 'stylesheet';
                newElement.href = url;
              }

              iframeDocument.head.appendChild(newElement);
            }
          });
        }
      };
    }

    return () => {
      if (iframe) {
        iframe.onload = null; // Clean up event listener
      }
    };
  }, [htmlContent, cssContent, frontendAssets]);

  return (
    <div
      className="render-preview-container"
      style={{ width: '100%', minHeight: '100%' }}
    >
      <iframe
        ref={iframeRef}
        title="Preview"
        className="editor-styles-wrapper"
        width="100%"
        height="100%"
      />
      {iframeBody &&
        createPortal(
          <div className="b_">
            <div
              className="b_utils"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>,
          iframeBody
        )}
    </div>
  );
};

export default BitePreview;
