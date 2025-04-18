export default function ResponsiveImage(props) {
  const { media, mediaClass } = props;
  const { url, alt, sizes } = media;

  if (sizes === undefined) {
    return <img src={url} alt={alt} className={`bf_media ${mediaClass}`} />;
  }

  const { thumbnail, medium, large } = sizes;
  const thumbnailImg = thumbnail || url;
  const mediumImg = medium || url;
  const largeImg = large || url;

  return (
    <picture className="bf_responsive-media">
      {thumbnailImg ? (
        <source
          media="(max-width: 768px)"
          srcSet={thumbnailImg}
          className={`bf_media ${mediaClass}`}
        />
      ) : null}
      {mediumImg ? (
        <source
          media="(min-width: 1024px)"
          srcSet={mediumImg}
          className={`bf_media ${mediaClass}`}
        />
      ) : null}
      {largeImg ? (
        <source
          media="(min-width: 1536px)"
          srcSet={largeImg}
          className={`bf_media ${mediaClass}`}
        />
      ) : null}
      {mediumImg ? (
        <img src={mediumImg} alt={alt} className={`bf_media ${mediaClass}`} />
      ) : null}
    </picture>
  );
}
