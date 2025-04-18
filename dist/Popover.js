import { j as s } from "./node_modules/react/jsx-runtime.js";
import p from "./node_modules/@blockbite/icons/dist/Cross2.js";
import { Popover as f, Button as n } from "@wordpress/components";
import { useState as d, useEffect as x } from "@wordpress/element";
const N = ({
  children: c,
  className: i,
  position: a,
  visible: o,
  onClick: m,
  onVisibleChange: t
}) => {
  const [r, e] = d(!!o);
  x(() => {
    o !== void 0 && e(o);
  }, [o]);
  const u = () => {
    const l = !r;
    e(l), t && t(l);
  };
  return /* @__PURE__ */ s.jsx(s.Fragment, { children: r && /* @__PURE__ */ s.jsx(
    f,
    {
      position: a,
      className: "blockbite-ui__popover bb_",
      onClick: m,
      onFocusOutside: () => {
        e(!1), t && t(!1);
      },
      children: /* @__PURE__ */ s.jsx("div", { className: i, children: /* @__PURE__ */ s.jsxs("div", { className: "relative h-full w-full p-4", children: [
        /* @__PURE__ */ s.jsx(
          n,
          {
            onClick: u,
            size: "small",
            className: "close-button absolute right-0 top-0",
            children: /* @__PURE__ */ s.jsx(p, {})
          }
        ),
        c
      ] }) })
    }
  ) });
};
export {
  N as Popover,
  N as default
};
