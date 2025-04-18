import { j as r } from "./node_modules/react/jsx-runtime.js";
import { Wrap as j } from "./Wrap.js";
import { forwardRef as N } from "@wordpress/element";
import i from "classnames";
const g = N(
  ({
    onClick: t,
    onChange: o,
    className: x,
    defaultValue: l,
    children: p,
    inputClassName: d,
    readOnly: c,
    placeholder: u,
    onBlur: s,
    type: f = "text",
    label: m,
    helper: a = ""
  }, b) => {
    const n = `text-control-${Math.random().toString(36).substring(2, 15)}`;
    return /* @__PURE__ */ r.jsxs(j, { className: i("flex items-center p-0", x), children: [
      m ? /* @__PURE__ */ r.jsx("label", { htmlFor: n, className: "text-primary !m-0 !mb-0 !mr-2", children: m }) : null,
      /* @__PURE__ */ r.jsx(
        "input",
        {
          id: n,
          className: i(
            "border-primary !m-0 !mb-0 h-[32px] !rounded-none border border-opacity-70 focus:outline-none focus:ring-0",
            d
          ),
          type: f,
          value: l,
          placeholder: u,
          onFocus: () => t && t(),
          onBlur: (e) => {
            t && t(), s && s(e.target.value);
          },
          onChange: (e) => o && o(e.target.value),
          readOnly: c,
          ref: b
        }
      ),
      /* @__PURE__ */ r.jsx("span", { children: p }),
      a && /* @__PURE__ */ r.jsx("p", { className: "text-primary !m-0 !mb-0 text-xs", children: a })
    ] });
  }
);
g.displayName = "TextControl";
export {
  g as TextControl
};
