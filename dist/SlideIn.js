import { j as a } from "./node_modules/react/jsx-runtime.js";
import { Wrap as i } from "./Wrap.js";
import { useState as m, useEffect as n } from "@wordpress/element";
import l from "classnames";
const c = ({ children: s, watch: e, className: r }) => {
  const [t, o] = m(0);
  return n(() => {
    setTimeout(() => {
      o(1);
    }, 250);
  }, [e]), /* @__PURE__ */ a.jsx(
    i,
    {
      className: l(
        r,
        "duration-50 transform transition-all ease-in-out",
        {
          "translate-x-0": t === 1,
          "-translate-x-full": t === 0
        }
      ),
      children: s
    }
  );
};
export {
  c as SlideIn
};
