import { j as s } from "./node_modules/react/jsx-runtime.js";
import { Wrap as c } from "./Wrap.js";
import { Notice as i } from "@wordpress/components";
import { useState as a } from "@wordpress/element";
import p from "classnames";
const x = ({
  children: e,
  status: t = "success",
  className: r
}) => {
  const [m, o] = a(!0);
  return /* @__PURE__ */ s.jsx(c, { onClick: () => o(!1), children: m && /* @__PURE__ */ s.jsx(
    i,
    {
      status: t,
      className: p(r),
      onRemove: () => o(!1),
      children: e
    }
  ) });
};
export {
  x as Notice
};
