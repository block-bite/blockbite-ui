import { j as s } from "./node_modules/react/jsx-runtime.js";
function f(n) {
  const { media: r, mediaClass: e } = n, { url: m, alt: i, sizes: t } = r;
  if (t === void 0)
    return /* @__PURE__ */ s.jsx("img", { src: m, alt: i, className: `bf_media ${e}` });
  const { thumbnail: d, medium: u, large: o } = t, c = d || m, a = u || m, l = o || m;
  return /* @__PURE__ */ s.jsxs("picture", { className: "bf_responsive-media", children: [
    c ? /* @__PURE__ */ s.jsx(
      "source",
      {
        media: "(max-width: 768px)",
        srcSet: c,
        className: `bf_media ${e}`
      }
    ) : null,
    a ? /* @__PURE__ */ s.jsx(
      "source",
      {
        media: "(min-width: 1024px)",
        srcSet: a,
        className: `bf_media ${e}`
      }
    ) : null,
    l ? /* @__PURE__ */ s.jsx(
      "source",
      {
        media: "(min-width: 1536px)",
        srcSet: l,
        className: `bf_media ${e}`
      }
    ) : null,
    a ? /* @__PURE__ */ s.jsx("img", { src: a, alt: i, className: `bf_media ${e}` }) : null
  ] });
}
export {
  f as default
};
