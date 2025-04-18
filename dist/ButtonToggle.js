import { j as s } from "./node_modules/react/jsx-runtime.js";
import { Icon as d } from "./Icon.js";
import { Wrap as N } from "./Wrap.js";
import { Button as k } from "@wordpress/components";
import { memo as p, useState as g, useEffect as w, useCallback as B } from "@wordpress/element";
import h from "classnames";
const E = p(
  ({
    children: u,
    className: c,
    value: t,
    variant: o = "secondary",
    defaultPressed: i,
    onPressedChange: m,
    icon: b,
    size: x = "compact",
    display: a = "auto",
    label: l
  }) => {
    const [r, n] = g(!1);
    w(() => {
      n(i === t);
    }, [i]);
    const j = B(() => {
      n((_) => !_), m(t);
    }, [r, m]);
    return /* @__PURE__ */ s.jsxs(
      k,
      {
        "aria-label": l,
        className: h(c, "blockbite-ui__button--default"),
        value: t,
        size: x,
        label: l,
        variant: o,
        showTooltip: !0,
        isPressed: r,
        onClick: j,
        children: [
          b && /* @__PURE__ */ s.jsx(d, { icon: b }),
          a !== "icon" ? u : null,
          l && !u && a !== "icon" ? /* @__PURE__ */ s.jsx("span", { children: l }) : null
        ]
      }
    );
  }
), G = p(
  ({
    className: u,
    defaultPressed: c = "",
    toggle: t = !0,
    display: o = "auto",
    options: i,
    size: m = "compact",
    tabs: b = !1,
    variant: x = "secondary",
    stretch: a = !1,
    onPressedChange: l
  }) => {
    const [r, n] = g(c);
    w(() => {
      n(c);
    }, [c]);
    const j = B(
      (e) => {
        const f = t && r === e ? "" : e;
        n(f), l?.(f);
      },
      [r, l, t]
    ), _ = (e) => o === "icon" && e?.icon ? /* @__PURE__ */ s.jsx(d, { icon: e.icon }) : o === "label" ? /* @__PURE__ */ s.jsx("span", { children: e.label }) : /* @__PURE__ */ s.jsxs("span", { className: "flex items-center justify-center gap-1", children: [
      e.icon && /* @__PURE__ */ s.jsx(d, { icon: e.icon }),
      /* @__PURE__ */ s.jsx("span", { children: e.label })
    ] });
    return /* @__PURE__ */ s.jsx(
      N,
      {
        className: h(
          "blockbite-ui__button-group flex flex-wrap gap-1",
          u,
          b ? "blockbite-ui__button-group--tabs" : ""
        ),
        children: i.map((e, f) => /* @__PURE__ */ s.jsxs(
          k,
          {
            className: h("blockbite-ui__button--default", {
              grow: a,
              "justify-center": a
            }),
            "aria-label": e.label,
            showTooltip: !0,
            value: e.value,
            size: m,
            label: e?.tooltip || e.label,
            variant: x,
            isPressed: r === e.value,
            onClick: () => j(e.value),
            children: [
              _(e),
              e.children && e.children
            ]
          },
          `ButtonToggleGroup__${e.value}__${e.label}__${f}`
        ))
      }
    );
  }
);
export {
  E as ButtonToggle,
  G as ButtonToggleGroup,
  G as default
};
