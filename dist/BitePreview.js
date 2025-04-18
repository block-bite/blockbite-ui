import { j as r } from "./node_modules/react/jsx-runtime.js";
import { useRef as h, useState as y, useEffect as E, createPortal as w } from "@wordpress/element";
const j = ({ htmlContent: i, cssContent: s, frontendAssets: a }) => {
  const l = h(null), [o, p] = y(null);
  return E(() => {
    const n = l.current;
    return n && (n.onload = () => {
      const t = n.contentDocument || n.contentWindow.document;
      if (t) {
        p(t.body);
        const c = t.createElement("style");
        c.innerHTML = s, t.head.appendChild(c), a.forEach(({ type: d, id: m, url: f }) => {
          const u = document.getElementById(m);
          if (u) {
            const e = document.adoptNode(
              u.cloneNode(!0)
            );
            t.head.appendChild(e);
          } else {
            const e = t.createElement(
              d === "script" ? "script" : "link"
            );
            e.id = m, d === "script" ? (e.src = f, e.async = !0) : (e.rel = "stylesheet", e.href = f), t.head.appendChild(e);
          }
        });
      }
    }), () => {
      n && (n.onload = null);
    };
  }, [i, s, a]), /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "render-preview-container",
      style: { width: "100%", minHeight: "100%" },
      children: [
        /* @__PURE__ */ r.jsx(
          "iframe",
          {
            ref: l,
            title: "Preview",
            className: "editor-styles-wrapper",
            width: "100%",
            height: "100%"
          }
        ),
        o && w(
          /* @__PURE__ */ r.jsx("div", { className: "b_", children: /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "b_utils",
              dangerouslySetInnerHTML: { __html: i }
            }
          ) }),
          o
        )
      ]
    }
  );
};
export {
  j as default
};
