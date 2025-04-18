import { j as s } from "./node_modules/react/jsx-runtime.js";
import { createBlock as i } from "@wordpress/blocks";
import { Button as a } from "@wordpress/components";
const { select: d, dispatch: k } = wp.data, u = ({
  buttonText: e = "Add block"
}) => {
  const c = () => {
    const r = d("core/block-editor").getSelectedBlock(), { clientId: n, innerBlocks: o } = r, t = o[o.length - 1], l = i(
      t.name,
      t.attributes,
      t.innerBlocks
    );
    k("core/block-editor").insertBlocks(l, 0, n);
  };
  return /* @__PURE__ */ s.jsx(a, { variant: "primary", onClick: () => c(), children: e });
};
export {
  u as default
};
