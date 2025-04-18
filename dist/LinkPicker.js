import { j as e } from "./node_modules/react/jsx-runtime.js";
import { Wrap as k } from "./Wrap.js";
import b from "@wordpress/api-fetch";
import { TextControl as h } from "@wordpress/components";
import { useState as c, useEffect as a } from "@wordpress/element";
import { __ as p } from "@wordpress/i18n";
function g(s) {
  const [t, r] = c(""), [i, n] = c([]), [o, u] = c({
    url: "",
    title: ""
  });
  return a(() => {
    t !== "" && (n(null), b({
      path: `/blockbite/v1/block-helpers/get-links/${t}`
    }).then(
      (l) => {
        l?.length ? n([...l]) : n([]);
      }
    ));
  }, [t]), a(() => {
    o.url !== "" && s.parentCallback(o);
  }, [o]), /* @__PURE__ */ e.jsxs(k, { className: "blockbite--editor-linkwrap", children: [
    /* @__PURE__ */ e.jsx(
      h,
      {
        label: p("Search link", "blockbitelinks"),
        value: t,
        placeholder: "Example: About",
        onChange: (l) => r(l),
        help: p("Type a post, page, title", "blockbitelinks")
      }
    ),
    t ? /* @__PURE__ */ e.jsx("div", { className: "blockbite--editor-linklist", children: /* @__PURE__ */ e.jsx(
      m,
      {
        links: i,
        onActiveLink: (l) => [
          u({ ...l }),
          r("")
        ]
      }
    ) }) : null
  ] });
}
function m({ links: s, onActiveLink: t }) {
  const r = [];
  return s === null ? /* @__PURE__ */ e.jsx("p", { children: "Loading..." }) : s.length === 0 ? /* @__PURE__ */ e.jsx("p", { children: "No Results" }) : (s.forEach((i) => {
    r.push(
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
  }), r);
}
export {
  g as default
};
