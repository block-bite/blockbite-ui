import { j as e } from "./node_modules/react/jsx-runtime.js";
function a(o) {
  const { media: s, mediaClass: r } = o, { url: t } = s, n = t;
  return /* @__PURE__ */ e.jsx(
    "video",
    {
      className: `bf_responsive-media ${r}`,
      preload: "none",
      playsInline: !0,
      controls: !0,
      autoPlay: !0,
      muted: !0,
      loop: !0,
      children: /* @__PURE__ */ e.jsx("source", { src: n, type: "video/mp4" })
    }
  );
}
export {
  a as default
};
