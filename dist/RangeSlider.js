import { j as a } from "./node_modules/react/jsx-runtime.js";
import { Wrap as h } from "./Wrap.js";
import { useState as r, useEffect as j } from "@wordpress/element";
import { RangeControl as C } from "@wordpress/components";
const $ = ({
  defaultValue: t,
  label: l,
  min: f = 0,
  max: p = 2e3,
  withInputField: c = !1,
  onValueChange: m,
  gridMode: n = !1,
  showTooltip: u = !1,
  ...x
}) => {
  const [i] = r(0), [s, o] = r(0);
  j(() => {
    o(Math.round(parseInt(t) / (n ? 16 : 1)));
  }, [t]);
  function g(e) {
    const R = e * (n ? 16 : 1);
    m(R.toString());
  }
  return /* @__PURE__ */ a.jsxs(h, { className: "flex min-w-[240px] flex-col", children: [
    /* @__PURE__ */ a.jsx(
      C,
      {
        label: l,
        value: s,
        min: f,
        max: p,
        showTooltip: u,
        withInputField: c,
        onChange: (e) => {
          o(e), g(e);
        },
        resetFallbackValue: i,
        ...x
      }
    ),
    /* @__PURE__ */ a.jsxs("span", { children: [
      n ? `${s * 16}px` : null,
      " "
    ] })
  ] });
};
export {
  $ as default
};
