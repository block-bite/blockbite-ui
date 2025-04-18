export default function ResponsiveVideo(props: any) {
  const { media, mediaClass } = props;
  const { url } = media;

  const videoUrl = url;

  return (
    <video
      className={`bf_responsive-media ${mediaClass}`}
      preload="none"
      playsInline
      controls
      autoPlay
      muted
      loop
    >
      <source src={videoUrl} type="video/mp4" />
    </video>
  );
}
