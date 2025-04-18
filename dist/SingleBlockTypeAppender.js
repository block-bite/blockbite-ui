import { j as s } from "./node_modules/react/jsx-runtime.js";
import "./node_modules/@wordpress/blocks/build-module/store/index.js";
import { Button as i } from "@wordpress/components";
import { createBlock as a } from "./node_modules/@wordpress/blocks/build-module/api/factory.js";
const { select: d, dispatch: k } = wp.data, b = ({
  buttonText: e = "Add block"
}) => {
  const c = () => {
    const r = d("core/block-editor").getSelectedBlock(), { clientId: n, innerBlocks: o } = r, t = o[o.length - 1], l = a(
      t.name,
      t.attributes,
      t.innerBlocks
    );
    k("core/block-editor").insertBlocks(l, 0, n);
  };
  return /* @__PURE__ */ s.jsx(i, { variant: "primary", onClick: () => c(), children: e });
};
export {
  b as default
};
