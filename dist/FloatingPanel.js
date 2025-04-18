import { j as s } from "./node_modules/react/jsx-runtime.js";
import { useRef as x, useState as o, useEffect as g } from "@wordpress/element";
function w({
  children: d
}) {
  const i = x(null), [r, c] = o({ x: 100, y: 100 }), [a, l] = o(!1), [n, f] = o({ x: 0, y: 0 });
  g(() => {
    const e = (u) => {
      a && c({
        x: u.clientX - n.x,
        y: u.clientY - n.y
      });
    }, t = () => l(!1);
    return window.addEventListener("mousemove", e), window.addEventListener("mouseup", t), () => {
      window.removeEventListener("mousemove", e), window.removeEventListener("mouseup", t);
    };
  }, [a, n]);
  const m = (e) => {
    const t = i.current.getBoundingClientRect();
    f({ x: e.clientX - t.left, y: e.clientY - t.top }), l(!0);
  };
  return /* @__PURE__ */ s.jsx("div", { className: "bb_", children: /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: i,
      className: "fixed bg-white shadow-xl rounded-2xl p-4 w-[400px] h-[550px] z-[9999]",
      style: { left: r.x, top: r.y },
      children: [
        d,
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "absolute top-1 right-1 cursor-move w-5 h-5 bg-gray-300 rounded",
            onMouseDown: m
          }
        )
      ]
    }
  ) });
}
export {
  w as default
};
