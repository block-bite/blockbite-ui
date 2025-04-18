import { j as r } from "./node_modules/react/jsx-runtime.js";
import { Icon as a } from "./Icon.js";
import { Button as f } from "@wordpress/components";
import c from "classnames";
const h = ({
  children: i,
  size: m = "default",
  label: t,
  className: u,
  onClick: l,
  variant: o = "primary",
  display: s = "auto",
  icon: n,
  disabled: p = !1
}) => {
  const e = s === "icon" || s === "icon-lg";
  return /* @__PURE__ */ r.jsxs(
    f,
    {
      size: m,
      variant: o,
      label: t,
      showTooltip: !0,
      disabled: p,
      className: c(
        u,
        "blockbite-ui__button",
        "flex items-center justify-center gap-1",
        { "is-primary": o === "primary" },
        { "is-secondary": o === "secondary" },
        { "is-link": o === "link" },
        { "is-tertiary": o === "tertiary" },
        { "is-icon": s === "icon" }
      ),
      onClick: l,
      children: [
        n && /* @__PURE__ */ r.jsx(
          a,
          {
            icon: n,
            className: c({ "h-4 w-4": s === "icon-lg" })
          }
        ),
        e ? null : i,
        t && !i && !e ? /* @__PURE__ */ r.jsx("span", { children: t }) : null
      ]
    }
  );
};
export {
  h as Button
};
