import { j as r } from "./node_modules/react/jsx-runtime.js";
import { Wrap as m } from "./Wrap.js";
import { CheckboxControl as i } from "@wordpress/components";
import { useState as x, useEffect as n } from "@wordpress/element";
const f = ({ label: t, help: s, defaultChecked: e }) => {
  const [c, o] = x(e);
  return n(() => {
    o(e);
  }, [e]), /* @__PURE__ */ r.jsx(m, { className: "blockbite-ui__checkbox mx-1 flex items-center gap-2", children: /* @__PURE__ */ r.jsx(
    i,
    {
      label: t,
      help: s,
      checked: c,
      onChange: o
    }
  ) });
};
export {
  f as Checkbox
};
