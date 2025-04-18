import { j as t } from "./node_modules/react/jsx-runtime.js";
import { SelectControl as p } from "@wordpress/components";
import { useState as u, useEffect as m } from "@wordpress/element";
const j = ({
  onChange: l,
  className: a,
  defaultValue: n,
  options: e,
  label: s = ""
}) => {
  const [c, o] = u("");
  m(() => {
    o(n);
  }, []);
  const i = (r) => {
    o(r), l && l(r);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: a, children: [
    e && e.length > 0 && /* @__PURE__ */ t.jsx(
      p,
      {
        label: s || "",
        value: c || "",
        onChange: i,
        options: [{ value: "", label: "Select an option" }, ...e]
      }
    ),
    !e && /* @__PURE__ */ t.jsx("p", { children: "No options available" })
  ] });
};
export {
  j as SelectControlWrapper
};
