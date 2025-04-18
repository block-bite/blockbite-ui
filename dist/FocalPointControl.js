import { j as i } from "./node_modules/react/jsx-runtime.js";
import { Wrap as p } from "./Wrap.js";
import { FocalPointPicker as x } from "@wordpress/components";
import { useState as m, useEffect as s } from "@wordpress/element";
const d = ({
  defaultValue: e,
  onValueChange: a,
  url: c
}) => {
  const [t, r] = m({
    x: 0.5,
    y: 0.5
  });
  return s(() => {
    a(
      `[${(t.x * 100).toFixed(2)}%_${(t.y * 100).toFixed(2)}%]`
    );
  }, [t]), s(() => {
    if (e.includes("%")) {
      const [o, n] = e.replace("[", "").replace("%]", "").split("_").map((l) => parseFloat(l) / 100);
      r({
        x: o,
        y: n
      });
    }
  }, [e]), /* @__PURE__ */ i.jsx(p, { className: "relative flex flex-col", children: /* @__PURE__ */ i.jsx(
    x,
    {
      url: c,
      value: t,
      onDrag: (o) => r(o),
      onChange: (o) => r(o)
    }
  ) });
};
export {
  d as default
};
