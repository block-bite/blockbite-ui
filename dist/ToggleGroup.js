import { j as l } from "./node_modules/react/jsx-runtime.js";
import { Wrap as g } from "./Wrap.js";
import { memo as i, useState as p, useEffect as x } from "@wordpress/element";
import { __experimentalToggleGroupControl as v, __experimentalToggleGroupControlOptionIcon as f, __experimentalToggleGroupControlOption as C } from "@wordpress/components";
import j from "classnames";
const d = i(
  ({
    className: s,
    options: t,
    defaultPressed: r,
    display: n = "label",
    label: o = !1,
    onPressedChange: m
  }) => {
    const [u, c] = p(""), a = (e) => {
      m(e);
    };
    return x(() => {
      c(r);
    }, [r]), /* @__PURE__ */ l.jsx(g, { className: j(s), children: /* @__PURE__ */ l.jsx(
      v,
      {
        isBlock: !0,
        value: u,
        label: typeof o == "string" ? o : "",
        children: t.map(
          (e) => n === "icon" ? /* @__PURE__ */ l.jsx(
            f,
            {
              icon: e.icon,
              label: e.label,
              value: e.value,
              onClick: () => a(e.value)
            },
            `ToggleGroupControlIcon-${e.value}`
          ) : /* @__PURE__ */ l.jsx(
            C,
            {
              value: e.value,
              label: e.label,
              onClick: () => a(e.value)
            },
            `ToggleGroupControlOption-${e.value}`
          )
        )
      }
    ) });
  }
);
export {
  d as ToggleGroup
};
