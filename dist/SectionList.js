import { j as t } from "./node_modules/react/jsx-runtime.js";
import { Wrap as c } from "./Wrap.js";
import { Button as u } from "@wordpress/components";
import { useState as w, useRef as v } from "@wordpress/element";
import { TextControl as C } from "./TextControl.js";
import I from "classnames";
import R from "./node_modules/@blockbite/icons/dist/Plus.js";
import k from "./node_modules/@blockbite/icons/dist/Trash.js";
const E = ({
  sections: n,
  setSections: o,
  activeSection: a,
  setActiveSection: m,
  Update: x,
  newSection: s,
  setCode: f,
  addons: p
}) => {
  const [i, d] = w({
    id: "",
    name: ""
  }), h = v(null), j = () => {
    const e = { ...s() };
    o([...n, e]);
  }, b = () => {
    if (!a || n.length === 0) return;
    const e = n.filter(
      (r) => r.id !== a
    );
    let l = null;
    if (e.length > 0) {
      const r = n.findIndex((g) => g.id === a), N = Math.min(r, e.length - 1);
      l = e[N]?.id || e[0]?.id;
    } else {
      const r = { ...s() };
      e.push(r), l = r.id;
    }
    o(e), m(l), f(e.find((r) => r.id === l)?.code || "");
  }, y = (e) => {
    o(
      (l) => l.map(
        (r) => r.id === i.id ? { ...r, name: e } : r
      )
    ), d({
      id: "",
      name: ""
    });
  };
  return /* @__PURE__ */ t.jsxs(c, { important: !0, className: "w-[200px] border-r", children: [
    /* @__PURE__ */ t.jsxs("ul", { className: "h-[calc(100%-80px)] divide-y overflow-auto", children: [
      p,
      /* @__PURE__ */ t.jsx("li", { children: /* @__PURE__ */ t.jsx("ul", { className: "divide-y border-b", children: n.map((e, l) => /* @__PURE__ */ t.jsxs(
        "li",
        {
          className: "relative m-0",
          children: [
            /* @__PURE__ */ t.jsx(
              "button",
              {
                className: I(
                  "text-gray-medium w-full truncate bg-opacity-50 px-3 py-2 text-left text-sm/6 font-semibold hover:bg-easy hover:text-wordpress",
                  {
                    "bg-easy": e.id === a
                  }
                ),
                onClick: () => {
                  m(e.id), x(a, e.id);
                },
                onDoubleClick: () => {
                  d({
                    id: e.id,
                    name: e.name
                  });
                },
                children: e.name
              }
            ),
            i.id === e.id && /* @__PURE__ */ t.jsx(
              C,
              {
                className: "absolute left-0 top-0 h-full w-full",
                defaultValue: i.name,
                onChange: (r) => d({
                  ...i,
                  name: r
                }),
                ref: h,
                onBlur: (r) => y(r)
              }
            )
          ]
        },
        `section__${l}__${e?.id}`
      )) }) })
    ] }),
    /* @__PURE__ */ t.jsxs(c, { className: "flex justify-center gap-2 p-2", children: [
      /* @__PURE__ */ t.jsx(
        u,
        {
          onClick: j,
          icon: /* @__PURE__ */ t.jsx(R, {}),
          variant: "tertiary",
          size: "compact",
          children: "Add"
        }
      ),
      /* @__PURE__ */ t.jsx(
        u,
        {
          onClick: b,
          icon: /* @__PURE__ */ t.jsx(k, {}),
          variant: "tertiary",
          size: "compact",
          children: "Remove"
        }
      )
    ] })
  ] });
};
export {
  E as default
};
