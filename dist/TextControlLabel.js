import { j as t } from "./node_modules/react/jsx-runtime.js";
import r from "./node_modules/@blockbite/icons/dist/Pencil1.js";
import { Wrap as s } from "./Wrap.js";
import { TextControl as i } from "@wordpress/components";
const x = ({
  onChange: e,
  defaultValue: o,
  children: l
}) => /* @__PURE__ */ t.jsxs(s, { className: "blockbite-ui__text-control-label flex items-center", children: [
  /* @__PURE__ */ t.jsxs("span", { className: "outline-b-2 relative block -outline-offset-2 outline-black", children: [
    /* @__PURE__ */ t.jsx(i, { type: "text", value: o, onChange: e }),
    /* @__PURE__ */ t.jsx(r, { className: "absolute right-1 top-2" })
  ] }),
  " ",
  l
] });
export {
  x as TextControlLabel
};
