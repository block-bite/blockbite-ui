import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

import { Button, PanelRow } from '@wordpress/components';

import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export default function MediaPicker({ mediaProps, mediaCallback }) {
  const allowedTypes = [
    'image',
    'video',
    'image/svg+xml',
    'svg',
    'text/plain',
    'application/json',
  ];

  // toggles
  const [stateMedia, setStateMedia] = useState({
    id: null,
    url: '',
    sizes: [],
    alt: '',
    type: '',
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (mediaProps) {
      setStateMedia({ ...mediaProps });
    }
  }, [mediaProps]);

  // image handlers
  const removeMedia = () => {
    const mediaObj = {
      mediaId: 0,
      mediaUrl: '',
    };
    mediaCallback({ ...mediaObj });
  };
  // onselect media
  const onSelectMedia = (media) => {
    const safeSizes = {
      thumbnail: null,
      medium: null,
      large: null,
    };

    // Normalize Sizes
    if (media?.sizes) {
      Object.keys(media.sizes).map((key) => {
        const sizeObject = media.sizes[key];

        if (key === 'thumbnail') {
          safeSizes.thumbnail = sizeObject.url;
        } else if (sizeObject.width < 768 || sizeObject.height < 768) {
          safeSizes.thumbnail = sizeObject.url;
        }

        if (key === 'medium') {
          safeSizes.medium = sizeObject.url;
        } else if (
          (sizeObject.width > 1024 && sizeObject.width < 1024) ||
          (sizeObject.height < 1536 && sizeObject.height > 1536)
        ) {
          safeSizes.medium = sizeObject.url;
        }

        if (key === 'large') {
          safeSizes.large = sizeObject.url;
        } else if (sizeObject.width > 1536 || sizeObject.height > 1536) {
          safeSizes.large = sizeObject.url;
        }

        return null;
      });
    }

    // if type ends .lottie then it is a lottie file
    if (media.url.endsWith('.json')) {
      media.type = 'lottie';
    }
    // if type ends with .svg then it is an svg file
    if (media.url.endsWith('.svg')) {
      media.type = 'svg';
    }

    const mediaObj = {
      id: media.id,
      url: media.url,
      sizes: safeSizes,
      alt: media.alt,
      type: media.type,
      width: media.width,
      height: media.height,
    };
    mediaCallback({ ...mediaObj });
  };

  return (
    <PanelRow>
      {stateMedia.id !== null && (
        <MediaUploadCheck>
          <MediaUpload
            onSelect={onSelectMedia}
            value={stateMedia.id}
            allowedTypes={allowedTypes}
            render={({ open }) => (
              <Button
                className={
                  stateMedia.id === 0
                    ? 'editor-post-featured-image__toggle'
                    : 'editor-post-featured-image__preview'
                }
                onClick={open}
              >
                {stateMedia.id === 0 && __('Choose Media', 'blockbite')}
                {stateMedia.id && stateMedia.type === 'image' ? (
                  <div className="blockbite--editor-visual-image">
                    <img
                      alt={
                        stateMedia.alt
                          ? stateMedia.alt
                          : __('Image', 'blockbite')
                      }
                      src={stateMedia.url}
                    />
                  </div>
                ) : (
                  'Add media'
                )}
              </Button>
            )}
          />
        </MediaUploadCheck>
      )}
      {stateMedia.id !== 0 && (
        <MediaUploadCheck>
          <MediaUpload
            title={__('Replace media', 'blockbite')}
            value={stateMedia.id}
            onSelect={onSelectMedia}
            allowedTypes={allowedTypes}
            render={({ open }) => (
              <Button onClick={open}>{__('Replace media', 'blockbite')}</Button>
            )}
          />
        </MediaUploadCheck>
      )}
      {stateMedia.id !== 0 && (
        <MediaUploadCheck>
          <Button onClick={() => removeMedia()} isDestructive>
            {__('Remove media', 'blockbite')}
          </Button>
        </MediaUploadCheck>
      )}
    </PanelRow>
  );
}
