import { j as s } from "./node_modules/react/jsx-runtime.js";
import { Wrap as m } from "./Wrap.js";
import a from "classnames";
const x = ({
  children: l,
  className: o = "",
  height: r = "large"
}) => /* @__PURE__ */ s.jsx(
  m,
  {
    className: a("scrollbar relative overflow-y-scroll", o, {
      "h-[400px]": r === "large",
      "h-[300px]": r === "medium",
      "h-[200px]": r === "small"
    }),
    children: l
  }
);
export {
  x as ScrollList
};
