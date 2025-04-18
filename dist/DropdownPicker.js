import { j as o } from "./node_modules/react/jsx-runtime.js";
import p from "./node_modules/@blockbite/icons/dist/ChevronDown.js";
import { Icon as n } from "./Icon.js";
import { DropdownMenu as b } from "@wordpress/components";
import { useState as f, useEffect as v } from "@wordpress/element";
import x from "classnames";
const O = ({
  label: s,
  className: m,
  defaultValue: t,
  defaultIcon: l = p,
  onPressedChange: c,
  options: i
}) => {
  const [a, r] = f(null);
  v(() => {
    r(t);
  }, [t]);
  const u = [
    ...i.map((e) => ({
      icon: e.icon,
      label: e.label,
      title: e.label,
      value: e.value,
      onClick: () => {
        r(e.value), c(e.value);
      }
    })),
    {
      icon: /* @__PURE__ */ o.jsx(n, { icon: l }),
      title: "Reset",
      value: "reset",
      onClick: () => {
        r("reset"), c("reset");
      }
    }
  ];
  return /* @__PURE__ */ o.jsx(
    b,
    {
      controls: u,
      className: x(
        "blockbite-ui__dropdown-picker border-primary border",
        m
      ),
      icon: i.find((e) => e.value === a)?.icon || /* @__PURE__ */ o.jsx(n, { icon: l }),
      label: s || "Select"
    }
  );
};
export {
  O as DropdownPicker
};
