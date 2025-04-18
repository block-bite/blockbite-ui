import { j as e } from "./node_modules/react/jsx-runtime.js";
import { Wrap as r } from "./Wrap.js";
import s from "classnames";
const p = ({ children: t, title: m }) => /* @__PURE__ */ e.jsxs(
  r,
  {
    className: s(
      "text-gray-medium my-2 flex items-center gap-1 text-[12px] font-medium",
      s
    ),
    children: [
      m && /* @__PURE__ */ e.jsx(r, { className: "font-medium", children: m }),
      t
    ]
  }
);
export {
  p as Chapter
};
