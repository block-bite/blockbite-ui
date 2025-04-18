import { j as r } from "./node_modules/react/jsx-runtime.js";
import { Wrap as f } from "./Wrap.js";
import { ToggleControl as p } from "@wordpress/components";
import { useState as c, useEffect as l } from "@wordpress/element";
import n from "classnames";
const C = ({
  label: m,
  className: i,
  onChange: s,
  checked: e = !1
  // Default to false if undefined, so it's always controlled
}) => {
  const [a, t] = c(e);
  return l(() => {
    t(e);
  }, [e]), /* @__PURE__ */ r.jsx(f, { className: n(i, "flex items-center gap-2"), children: /* @__PURE__ */ r.jsx(
    p,
    {
      checked: a,
      label: m,
      onChange: (o) => {
        t(o), s && s(o);
      }
    }
  ) });
};
export {
  C as ToggleSwitch
};
