import { j as e } from "./node_modules/react/jsx-runtime.js";
import { Wrap as k } from "./Wrap.js";
import u from "./node_modules/@wordpress/api-fetch/build-module/index.js";
import { TextControl as b } from "@wordpress/components";
import { useState as c, useEffect as a } from "@wordpress/element";
import "./node_modules/@wordpress/i18n/build-module/sprintf.js";
import "./node_modules/tannin/index.js";
import { __ as p } from "./node_modules/@wordpress/i18n/build-module/default-i18n.js";
function w(r) {
  const [t, s] = c(""), [i, n] = c([]), [o, m] = c({
    url: "",
    title: ""
  });
  return a(() => {
    t !== "" && (n(null), u({
      path: `/blockbite/v1/block-helpers/get-links/${t}`
    }).then(
      (l) => {
        l?.length ? n([...l]) : n([]);
      }
    ));
  }, [t]), a(() => {
    o.url !== "" && r.parentCallback(o);
  }, [o]), /* @__PURE__ */ e.jsxs(k, { className: "blockbite--editor-linkwrap", children: [
    /* @__PURE__ */ e.jsx(
      b,
      {
        label: p("Search link", "blockbitelinks"),
        value: t,
        placeholder: "Example: About",
        onChange: (l) => s(l),
        help: p("Type a post, page, title", "blockbitelinks")
      }
    ),
    t ? /* @__PURE__ */ e.jsx("div", { className: "blockbite--editor-linklist", children: /* @__PURE__ */ e.jsx(
      h,
      {
        links: i,
        onActiveLink: (l) => [
          m({ ...l }),
          s("")
        ]
      }
    ) }) : null
  ] });
}
function h({ links: r, onActiveLink: t }) {
  const s = [];
  return r === null ? /* @__PURE__ */ e.jsx("p", { children: "Loading..." }) : r.length === 0 ? /* @__PURE__ */ e.jsx("p", { children: "No Results" }) : (r.forEach((i) => {
    s.push(
      // add key
      /* @__PURE__ */ e.jsx(k, { children: /* @__PURE__ */ e.jsxs(
        "span",
        {
          className: "blockbite--editor-link",
          onClick: () => t(i),
          children: [
            /* @__PURE__ */ e.jsx("span", { children: i.title }),
            /* @__PURE__ */ e.jsx("span", { className: "blockbite--preview-link", children: i.url }),
            /* @__PURE__ */ e.jsx("span", { className: "blockbite--preview-link", children: i.post_type })
          ]
        }
      ) }, i.id)
    );
  }), s);
}
export {
  w as default
};
