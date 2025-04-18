import { j as o } from "./node_modules/react/jsx-runtime.js";
import { Spinner as i } from "@wordpress/components";
import { useState as m, useEffect as n } from "@wordpress/element";
import a from "classnames";
const x = ({ className: t, defaultValue: s }) => {
  const [e, r] = m(!1);
  return n(() => {
    setTimeout(() => {
      r(!1);
    }, 500), s && r(!0);
  }, [e, s]), e && /* @__PURE__ */ o.jsx(i, { className: a(t) });
};
export {
  x as Spinner
};
