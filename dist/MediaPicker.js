import { j as l } from "./node_modules/react/jsx-runtime.js";
import { MediaUploadCheck as a, MediaUpload as m } from "@wordpress/block-editor";
import { PanelRow as b, Button as n } from "@wordpress/components";
import { useState as j, useEffect as x } from "@wordpress/element";
import { __ as r } from "@wordpress/i18n";
function S({ mediaProps: d, mediaCallback: u }) {
  const c = [
    "image",
    "video",
    "image/svg+xml",
    "svg",
    "text/plain",
    "application/json"
  ], [t, g] = j({
    id: null,
    url: "",
    sizes: [],
    alt: "",
    type: "",
    width: 0,
    height: 0
  });
  x(() => {
    d && g({ ...d });
  }, [d]);
  const p = () => {
    u({ ...{
      mediaId: 0,
      mediaUrl: ""
    } });
  }, h = (e) => {
    const s = {
      thumbnail: null,
      medium: null,
      large: null
    };
    e?.sizes && Object.keys(e.sizes).map((o) => {
      const i = e.sizes[o];
      return (o === "thumbnail" || i.width < 768 || i.height < 768) && (s.thumbnail = i.url), (o === "medium" || i.width > 1024 && i.width < 1024 || i.height < 1536 && i.height > 1536) && (s.medium = i.url), (o === "large" || i.width > 1536 || i.height > 1536) && (s.large = i.url), null;
    }), e.url.endsWith(".json") && (e.type = "lottie"), e.url.endsWith(".svg") && (e.type = "svg");
    const f = {
      id: e.id,
      url: e.url,
      sizes: s,
      alt: e.alt,
      type: e.type,
      width: e.width,
      height: e.height
    };
    u({ ...f });
  };
  return /* @__PURE__ */ l.jsxs(b, { children: [
    t.id !== null && /* @__PURE__ */ l.jsx(a, { children: /* @__PURE__ */ l.jsx(
      m,
      {
        onSelect: h,
        value: t.id,
        allowedTypes: c,
        render: ({ open: e }) => /* @__PURE__ */ l.jsxs(
          n,
          {
            className: t.id === 0 ? "editor-post-featured-image__toggle" : "editor-post-featured-image__preview",
            onClick: e,
            children: [
              t.id === 0 && r("Choose Media", "blockbite"),
              t.id && t.type === "image" ? /* @__PURE__ */ l.jsx("div", { className: "blockbite--editor-visual-image", children: /* @__PURE__ */ l.jsx(
                "img",
                {
                  alt: t.alt ? t.alt : r("Image", "blockbite"),
                  src: t.url
                }
              ) }) : "Add media"
            ]
          }
        )
      }
    ) }),
    t.id !== 0 && /* @__PURE__ */ l.jsx(a, { children: /* @__PURE__ */ l.jsx(
      m,
      {
        title: r("Replace media", "blockbite"),
        value: t.id,
        onSelect: h,
        allowedTypes: c,
        render: ({ open: e }) => /* @__PURE__ */ l.jsx(n, { onClick: e, children: r("Replace media", "blockbite") })
      }
    ) }),
    t.id !== 0 && /* @__PURE__ */ l.jsx(a, { children: /* @__PURE__ */ l.jsx(n, { onClick: () => p(), isDestructive: !0, children: r("Remove media", "blockbite") }) })
  ] });
}
export {
  S as default
};
