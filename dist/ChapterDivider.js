import { j as s } from "./node_modules/react/jsx-runtime.js";
import m from "classnames";
const i = ({
  id: l = "",
  title: a,
  className: r,
  help: e
}) => /* @__PURE__ */ s.jsxs("div", { ...l ? { id: l } : null, className: m("mb-4", r), children: [
  /* @__PURE__ */ s.jsxs("div", { className: "flex w-full flex-wrap items-center gap-2", children: [
    /* @__PURE__ */ s.jsx("small", { className: "shrink-1 text-[12px]", children: a }),
    /* @__PURE__ */ s.jsx("span", { className: "h-[1px] w-full bg-easy" })
  ] }),
  e && /* @__PURE__ */ s.jsx("small", { className: "w-full shrink-0 text-[12px]", children: e })
] });
export {
  i as ChapterDivider
};
