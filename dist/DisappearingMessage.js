import { j as n } from "./node_modules/react/jsx-runtime.js";
import { useState as l, useRef as i, useEffect as o } from "@wordpress/element";
const p = ({
  duration: t,
  children: a,
  trigger: s
}) => {
  const [f, r] = l(!1), e = i(!1);
  return o(() => {
    e.current = !0;
  }, []), o(() => {
    let u = null;
    return s && !e.current ? (r(!0), u = setTimeout(() => {
      r(!1);
    }, t)) : e.current = !1, () => {
      clearTimeout(u);
    };
  }, [s, t]), f && /* @__PURE__ */ n.jsx(n.Fragment, { children: a });
};
export {
  p as DisappearingMessage
};
